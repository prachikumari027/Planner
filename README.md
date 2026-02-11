# SmartStudy - Todo Application

A full-stack todo application built with React, Node.js, PostgreSQL, and Docker.

## Features

- ✅ Add new tasks with priority levels (Low, Medium, High)
- ✅ View all tasks in a structured list
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ Task descriptions and metadata
- ✅ Organized active/completed tasks sections
- ✅ Responsive design

## Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Axios** - HTTP client
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **PostgreSQL 15** - Database
- **pg** - PostgreSQL client

### Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## Project Structure

```
SmartStudy/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── Dockerfile
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── backend/                  # Node.js backend API
│   ├── src/
│   │   ├── server.js        # Main server file
│   │   └── db.js            # Database connection
│   ├── Dockerfile
│   ├── package.json
│   └── .env.example
├── docker-compose.yml        # Multi-container configuration
└── README.md
```

## Quick Start

### Prerequisites
- Docker and Docker Compose installed
- Or: Node.js 18+ and PostgreSQL 15

### Using Docker Compose (Recommended)

1. **Clone/Navigate to project**
   ```bash
   cd SmartStudy
   ```

2. **Start all services**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - PostgreSQL: localhost:5432

4. **Stop services**
   ```bash
   docker-compose down
   ```

### Local Development (Without Docker)

#### Backend Setup
```bash
cd backend

# Create .env file
cp .env.example .env

# Install dependencies
npm install

# Make sure PostgreSQL is running locally
# Update .env with your database credentials

# Start backend server
npm run dev
```

#### Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Access frontend at http://localhost:3000

## API Endpoints

### Todos
- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get single todo
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo
- `GET /api/health` - Health check

### Request/Response Examples

**Create Todo**
```json
POST /api/todos
{
  "title": "Complete project",
  "description": "Finish the SmartStudy application",
  "priority": "high"
}
```

**Response**
```json
{
  "id": 1,
  "title": "Complete project",
  "description": "Finish the SmartStudy application",
  "priority": "high",
  "completed": false,
  "created_at": "2026-02-10T10:30:00Z",
  "updated_at": "2026-02-10T10:30:00Z"
}
```

## Environment Variables

### Backend (.env)
```
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=todo_db
PORT=5000
```

## Database Schema

```sql
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  priority VARCHAR(20) CHECK (priority IN ('low', 'medium', 'high')) DEFAULT 'medium',
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Development Commands

### Backend
```bash
npm install    # Install dependencies
npm run dev    # Run with auto-reload
npm start      # Run production server
```

### Frontend
```bash
npm install    # Install dependencies
npm run dev    # Start Vite dev server
npm run build  # Build for production
npm run preview # Preview production build
```

### Docker
```bash
docker-compose up              # Start all services
docker-compose up --build      # Rebuild images
docker-compose down            # Stop all services
docker-compose logs -f         # View logs
docker-compose logs backend    # View specific service logs
```

## Features in Detail

### Task Management
- **Create**: Add tasks with title, optional description, and priority level
- **Read**: View all tasks organized by completion status
- **Update**: Mark tasks as completed/incomplete with single click
- **Delete**: Remove tasks with trash icon

### Priority System
- **Low** - Green badge
- **Medium** - Orange badge
- **High** - Red badge

### User Interface
- Clean, modern design with gradient header
- Responsive layout works on mobile and desktop
- Visual feedback for interactions
- Organized sections for active and completed tasks
- Empty state with helpful message

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL service is running
- Check environment variables match database credentials
- Verify database exists or will be auto-created

### Port Already in Use
```bash
# Change ports in docker-compose.yml or:
docker-compose down  # Stop existing containers
```

### Frontend Can't Reach Backend
- Check backend is running (http://localhost:5000/api/health)
- Verify API URLs in frontend code
- Check CORS is enabled in backend

## Performance Optimization

- Database queries are optimized with proper indexing
- Frontend uses React.useState and useEffect hooks efficiently
- CSS is modularized by component
- Docker multi-stage builds can be implemented for production

## Future Enhancements

- User authentication and authorization
- Task categories/tags
- Due dates and reminders
- Task search and filtering
- Recurring tasks
- Task collaboration
- Dark mode
- Mobile native apps

## License

MIT License - feel free to use this project for learning and personal use.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.
