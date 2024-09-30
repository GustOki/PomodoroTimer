import React, { useEffect, useState } from 'react';
import ToDoForm from '../ToDoForm/todoForm';
import ToDoItem from '../ToDoItem/item';
import './lista.css';

const ToDoLista = () => {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(201); // ID inicial para novos itens (começa após o maior id da API)

  // Função para buscar os todos da API
  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3005/todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Erro ao buscar os todos: ", error);
    }
  };
  
  const addTodo = async (title) => {
    const newTodo = {
      title,
      completed: false,
    };
    
    try {
      const response = await fetch('http://localhost:3005/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo), // Envia o novo todo para a API
      });
  
      const data = await response.json(); // Recebe a resposta da API (incluindo o ID gerado)
  
      // Atualiza o estado adicionando o novo todo ao final da lista de todos existentes
      setTodos((prevTodos) => [...prevTodos, data]); 
    } catch (error) {
      console.error('Erro ao adicionar um novo todo: ', error);
    }
  };
  
  
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:3005/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error("Erro ao deletar o todo: ", error);
    }
  };

  useEffect(() => {
    fetchTodos(); // Busca os todos quando o componente é montado
  }, []);

  return (
    <>
      <ToDoForm onAddTodo={addTodo} /> {/* Formulário para adicionar novos todos */}
      <ul>
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} onDelete={deleteTodo}>
            <p>Atividade:</p> {/* Exemplo de children sendo passado */}
          </ToDoItem>
        ))}
      </ul>
    </>
  );
};

export default ToDoLista;
