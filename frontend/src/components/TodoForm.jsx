import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setSubmitted(true);
      return;
    }

    onAddTodo(title, description, priority);
    
    // Reset form
    setTitle('');
    setDescription('');
    setPriority('medium');
    setSubmitted(false);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <h2>Create New Task</h2>
      
      <div className="form-group">
        <label htmlFor="title">Task Title *</label>
        <input
          id="title"
          type="text"
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={submitted && !title.trim() ? 'error' : ''}
        />
        {submitted && !title.trim() && <span className="error-text">Title is required</span>}
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter task description (optional)..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority">Priority Level</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <button type="submit" className="submit-btn">Add Task</button>
    </form>
  );
}

export default TodoForm;
