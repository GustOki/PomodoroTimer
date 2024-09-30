import React, { useEffect, useState } from 'react';
import ToDoForm from '../ToDoForm/todoForm';
import ToDoItem from '../ToDoItem/item';
import './lista.css';

const ToDoLista = ({ backgroundColor }) => {
  const [todos, setTodos] = useState([]);

  // Função para buscar todos os itens da API
  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3001/todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Erro ao buscar os todos:', error);
    }
  };

  // useEffect para carregar os dados da API quando o componente monta
  useEffect(() => {
    fetchTodos();
  }, []);

  // Função para adicionar um novo todo
  const addTodo = async (title) => {
    const newTodo = {
      title,
      completed: false,
    };

    try {
      const response = await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });
      const addedTodo = await response.json();
      setTodos([...todos, addedTodo]);
    } catch (error) {
      console.error('Erro ao adicionar o todo:', error);
    }
  };

  // Função para deletar um todo
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:3001/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Erro ao deletar o todo:', error);
    }
  };

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
