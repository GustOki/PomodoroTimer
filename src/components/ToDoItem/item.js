import React from 'react';
import './item.css';

const ToDoItem = ({ todo, onDelete, children }) => {
  return (
    <li>
      {children} {/* Renderiza qualquer conteúdo filho passado */}
      {todo.title}
      <button onClick={() => onDelete(todo.id)}>Excluir</button>
    </li>
  );
};

export default ToDoItem;
