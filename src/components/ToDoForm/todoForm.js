import React, { useState } from 'react';
import './todoForm.css'

const ToDoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      onAddTodo(title);
      setTitle(''); // Limpa o campo após o envio
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
      
    </form>
  );
};

export default ToDoForm;
