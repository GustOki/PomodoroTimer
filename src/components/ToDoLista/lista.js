import React, { useEffect, useState } from 'react';
import ToDoForm from '../ToDoForm/todoForm';
import ToDoItem from '../ToDoItem/item';
import './lista.css';

const ToDoLista = ( {backgroundColor} ) => {
  const [todos, setTodos] = useState(() => {
    // Recupera os itens do localStorage quando o componente é montado
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : []; // Retorna os itens ou uma lista vazia se não houver
  });
  const [nextId, setNextId] = useState(() => {
    const savedNextId = localStorage.getItem('nextId');
    return savedNextId ? JSON.parse(savedNextId) : 1; // Retorna o próximo ID salvo ou começa em 1
  });

  // Função para salvar os todos e o próximo ID no localStorage
  const saveToLocalStorage = (todos, nextId) => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('nextId', JSON.stringify(nextId));
  };

  // Função para adicionar um novo todo com um ID gerado localmente
  const addTodo = (title) => {
    const newTodo = {
      id: nextId, // Usamos o próximo ID disponível
      title,
      completed: false
    };

    const updatedTodos = [...todos, newTodo]; // Adiciona o novo todo à lista
    setTodos(updatedTodos); // Atualiza o estado
    setNextId(nextId + 1); // Incrementa o ID para o próximo item
    saveToLocalStorage(updatedTodos, nextId + 1); // Salva os dados no localStorage
  };

  // Função para deletar um todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id); // Filtra a lista
    setTodos(updatedTodos); // Atualiza a lista no estado
    saveToLocalStorage(updatedTodos, nextId); // Salva os dados atualizados no localStorage
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
