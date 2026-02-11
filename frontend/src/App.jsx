import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

// Configure API base URL
const API_BASE_URL = window.location.origin === 'http://localhost:3000' 
  ? 'http://localhost:5000/api'
  : '/api';

axios.defaults.baseURL = API_BASE_URL;

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos from backend
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/todos');
      setTodos(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add new todo
  const addTodo = async (title, description, priority) => {
    try {
      const response = await axios.post('/todos', {
        title,
        description,
        priority
      });
      setTodos([response.data, ...todos]);
    } catch (err) {
      setError('Failed to add todo');
      console.error(err);
    }
  };

  // Update todo completion status
  const toggleTodoStatus = async (id, completed) => {
    try {
      const response = await axios.put(`/todos/${id}`, {
        completed: !completed
      });
      setTodos(todos.map(todo => todo.id === id ? response.data : todo));
    } catch (err) {
      setError('Failed to update todo');
      console.error(err);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error(err);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>📝 SmartStudy</h1>
          <p>Stay organized with your daily tasks</p>
        </header>

        {error && <div className="error-banner">{error}</div>}

        <TodoForm onAddTodo={addTodo} />

        {loading ? (
          <div className="loading">Loading todos...</div>
        ) : (
          <TodoList
            todos={todos}
            onToggleStatus={toggleTodoStatus}
            onDeleteTodo={deleteTodo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
