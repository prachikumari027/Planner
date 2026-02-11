import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, onToggleStatus, onDeleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">✨</div>
        <h3>No tasks yet!</h3>
        <p>Create a new task to get started</p>
      </div>
    );
  }

  const incompleteTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="todo-list-container">
      {incompleteTodos.length > 0 && (
        <div className="todo-section">
          <h3 className="section-title">Active Tasks ({incompleteTodos.length})</h3>
          <div className="todo-list">
            {incompleteTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleStatus={onToggleStatus}
                onDeleteTodo={onDeleteTodo}
              />
            ))}
          </div>
        </div>
      )}

      {completedTodos.length > 0 && (
        <div className="todo-section">
          <h3 className="section-title">Completed Tasks ({completedTodos.length})</h3>
          <div className="todo-list completed">
            {completedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleStatus={onToggleStatus}
                onDeleteTodo={onDeleteTodo}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoList;
