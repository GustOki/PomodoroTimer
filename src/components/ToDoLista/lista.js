import React, { useEffect, useState } from 'react';
import ToDoForm from '../ToDoForm/todoForm';
import ToDoItem from '../ToDoItem/item';
import './lista.css';

const ToDoLista = ({ backgroundColor }) => {
  const [todos, setTodos] = useState([]);

  // Carrega os todos do localStorage ao montar o componente
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Salva os todos no localStorage sempre que eles forem atualizados
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Função para adicionar um novo todo
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(), // Gera um ID único baseado na data/hora atual
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Função para deletar um todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
