import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggleStatus, onDeleteTodo }) {
  const getPriorityClass = (priority) => {
    return `priority-${priority}`;
  };

  const getPriorityLabel = (priority) => {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <div className="todo-header">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleStatus(todo.id, todo.completed)}
            className="checkbox"
          />
          <h4 className="todo-title">{todo.title}</h4>
          <span className={`priority-badge ${getPriorityClass(todo.priority)}`}>
            {getPriorityLabel(todo.priority)}
          </span>
        </div>
        
        {todo.description && (
          <p className="todo-description">{todo.description}</p>
        )}
        
        <div className="todo-meta">
          <span className="todo-date">📅 {formatDate(todo.created_at)}</span>
        </div>
      </div>

      <button
        onClick={() => onDeleteTodo(todo.id)}
        className="delete-btn"
        title="Delete task"
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;
