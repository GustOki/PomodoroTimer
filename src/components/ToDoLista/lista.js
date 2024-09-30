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
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=0');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Erro ao buscar os todos: ", error);
    }
  };

  // Função para adicionar um novo todo com um ID gerado localmente
  const addTodo = async (title) => {
    const newTodo = {
      id: nextId, // Usamos o próximo ID disponível
      title,
      completed: false
    };
    
    // Simulando o POST na API
    try {
      await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });
      
      setTodos((prevTodos) => [...prevTodos, newTodo]); // Adiciona o novo todo à lista
      setNextId(nextId + 1); // Incrementa o ID para o próximo item
    } catch (error) {
      console.error("Erro ao adicionar um novo todo: ", error);
    }
  };

  // Função para deletar um todo
  const deleteTodo = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id)); // Atualiza a lista após a exclusão
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
