import React from 'react';
import './item.css';

const ToDoItem = ({ todo, onDelete, children }) => {
  return (
    <li>
      {children} {/* Renderiza o conteúdo passado como children */}
      <span>{todo.title}</span> {/* Exibe o título da tarefa */}
      <button onClick={() => onDelete(todo.id)}>Excluir</button> {/* Exclui o item baseado no ID */}
    </li>
  );
};

export default ToDoItem;