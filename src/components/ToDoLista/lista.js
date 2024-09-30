import React, { useEffect, useState } from 'react';
import ToDoForm from '../ToDoForm/todoForm';
import ToDoItem from '../ToDoItem/item';
import './lista.css';

// URL base da API do jsonplaceholder
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const ToDoLista = ({ backgroundColor }) => {
  const [todos, setTodos] = useState([]);
  
  // Função para buscar os todos da API
  const fetchTodos = async () => {
    try {
      const response = await fetch(`${API_URL}?_limit=3`); // Limitar para 3 itens
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Erro ao buscar os todos:', error);
    }
  };

  // Função para adicionar um novo todo
  const addTodo = async (title) => {
    try {
      const newTodo = {
        id: Date.now(), // Gerar ID único localmente
        title,
        completed: false
      };

      // Envia o novo todo para a API (opcional, já que a fake API não salva de verdade)
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });

      const createdTodo = await response.json();

      // Adiciona o novo todo ao estado local com o ID gerado
      setTodos((prevTodos) => [...prevTodos, { ...createdTodo, id: newTodo.id }]);
    } catch (error) {
      console.error('Erro ao adicionar o todo:', error);
    }
  };

  // Função para deletar um todo
  const deleteTodo = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      // Atualiza o estado local removendo o todo
      setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Erro ao deletar o todo:', error);
    }
  };

  // Busca os todos ao carregar o componente
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className='todolist' style={{ backgroundColor }}>
      <h1>To-Do List</h1>
      <ToDoForm onAddTodo={addTodo} /> {/* Formulário para adicionar novos todos */}
      <ul>
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} onDelete={deleteTodo}>
            <p>Atividade:</p> {/* Exemplo de children sendo passado */}
          </ToDoItem>
        ))}
      </ul>
    </div>
  );
};

export default ToDoLista;
