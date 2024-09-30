import React, { useEffect, useState } from 'react';
import ToDoForm from '../ToDoForm/todoForm';
import ToDoItem from '../ToDoItem/item';
import './lista.css';

const ToDoLista = () => {
  const [todos, setTodos] = useState([]);

  // Função para buscar os todos da API
  const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=0');
    const data = await response.json();
    setTodos(data);
  };

  // Função para adicionar um novo todo
  const addTodo = async (title) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, completed: false }),
    });
    const newTodo = await response.json();
    setTodos([...todos, newTodo]); // Adiciona o novo todo à lista
  };

  // Função para deletar um todo
  const deleteTodo = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter(todo => todo.id !== id)); // Atualiza a lista após a exclusão
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <ToDoForm onAddTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} onDelete={deleteTodo} >
            <p>Atividade:</p> {/* Exemplo de children */}
          </ToDoItem>
        ))}
      </ul>
    </>
  );
};

export default ToDoLista;

