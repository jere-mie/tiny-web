import { useState, html } from '../standalone-preact-htm.esm.js';

export function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn Preact + HTM', completed: false, priority: 'high' },
        { id: 2, text: 'Build awesome apps', completed: false, priority: 'medium' },
        { id: 3, text: 'Share with the world', completed: false, priority: 'low' }
    ]);
    const [newTodo, setNewTodo] = useState('');
    const [newPriority, setNewPriority] = useState('medium');
    const [filter, setFilter] = useState('all');

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, {
                id: Date.now(),
                text: newTodo.trim(),
                completed: false,
                priority: newPriority
            }]);
            setNewTodo('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    const getFilteredTodos = () => {
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    };

    const getPriorityBadge = (priority) => {
        const badges = {
            high: 'bg-danger',
            medium: 'bg-warning',
            low: 'bg-success'
        };
        return badges[priority] || 'bg-secondary';
    };

    const stats = {
        total: todos.length,
        completed: todos.filter(t => t.completed).length,
        active: todos.filter(t => !t.completed).length
    };

    return html`
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <div class="card shadow">
                    <div class="card-header bg-success text-white">
                        <h5 class="card-title mb-0">
                            📝 Todo List Manager
                        </h5>
                    </div>
                    <div class="card-body">
                        <!-- Add Todo Form -->
                        <div class="row mb-4">
                            <div class="col-md-6">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Add a new todo..."
                                    value=${newTodo}
                                    onInput=${(e) => setNewTodo(e.target.value)}
                                    onKeyPress=${handleKeyPress}
                                />
                            </div>
                            <div class="col-md-3">
                                <select 
                                    class="form-select"
                                    value=${newPriority}
                                    onChange=${(e) => setNewPriority(e.target.value)}
                                >
                                    <option value="low">Low Priority</option>
                                    <option value="medium">Medium Priority</option>
                                    <option value="high">High Priority</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <button 
                                    class="btn btn-primary w-100"
                                    onClick=${addTodo}
                                    disabled=${!newTodo.trim()}
                                >
                                    Add Todo
                                </button>
                            </div>
                        </div>

                        <!-- Stats -->
                        <div class="row mb-3">
                            <div class="col-12">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <span class="badge bg-primary me-2">Total: ${stats.total}</span>
                                        <span class="badge bg-warning me-2">Active: ${stats.active}</span>
                                        <span class="badge bg-success">Completed: ${stats.completed}</span>
                                    </div>
                                    <div class="btn-group btn-group-sm" role="group">
                                        <input type="radio" class="btn-check" name="filter" id="all" checked=${filter === 'all'} />
                                        <label class="btn btn-outline-secondary" for="all" onClick=${() => setFilter('all')}>All</label>
                                        
                                        <input type="radio" class="btn-check" name="filter" id="active" checked=${filter === 'active'} />
                                        <label class="btn btn-outline-secondary" for="active" onClick=${() => setFilter('active')}>Active</label>
                                        
                                        <input type="radio" class="btn-check" name="filter" id="completed" checked=${filter === 'completed'} />
                                        <label class="btn btn-outline-secondary" for="completed" onClick=${() => setFilter('completed')}>Completed</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Todo List -->
                        <div class="list-group">
                            ${getFilteredTodos().length === 0 ? html`
                                <div class="text-center py-4 text-muted">
                                    <i class="bi bi-inbox" style="font-size: 2rem;"></i>
                                    <p class="mt-2">No todos to show</p>
                                </div>
                            ` : getFilteredTodos().map(todo => html`
                                <div key=${todo.id} class="list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'bg-light' : ''}">
                                    <div class="d-flex align-items-center">
                                        <input 
                                            type="checkbox" 
                                            class="form-check-input me-3"
                                            checked=${todo.completed}
                                            onChange=${() => toggleTodo(todo.id)}
                                        />
                                        <span class="${todo.completed ? 'text-decoration-line-through text-muted' : ''}">
                                            ${todo.text}
                                        </span>
                                        <span class="badge ${getPriorityBadge(todo.priority)} ms-2 small">
                                            ${todo.priority}
                                        </span>
                                    </div>
                                    <button 
                                        class="btn btn-outline-danger btn-sm"
                                        onClick=${() => deleteTodo(todo.id)}
                                    >
                                        🗑️
                                    </button>
                                </div>
                            `)}
                        </div>

                        ${stats.completed > 0 && html`
                            <div class="mt-3">
                                <button 
                                    class="btn btn-outline-warning btn-sm"
                                    onClick=${() => setTodos(todos.filter(t => !t.completed))}
                                >
                                    Clear Completed
                                </button>
                            </div>
                        `}
                    </div>
                </div>
            </div>
        </div>
    `;
}