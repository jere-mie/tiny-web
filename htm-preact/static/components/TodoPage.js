import { html } from '../standalone-preact-htm.esm.js';
import { TodoList } from './TodoList.js';

export function TodoPage() {
    return html`
        <div class="container-fluid py-4">
            <div class="row g-3">
                <div class="col-12">
                    <div class="mb-4">
                        <h2>✅ Todo Manager</h2>
                        <p class="text-muted">A comprehensive todo application with priority levels, filtering, and statistics.</p>
                    </div>
                    
                    <${TodoList} />
                    
                    <div class="row g-3 mt-4">
                        <div class="col-12 col-lg-4">
                            <div class="card h-100">
                                <div class="card-header bg-success text-white">
                                    <h6 class="mb-0">✨ Core Features</h6>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled mb-0">
                                        <li class="mb-2">📝 Add new todos</li>
                                        <li class="mb-2">✅ Mark as complete</li>
                                        <li class="mb-2">🗑️ Delete unwanted items</li>
                                        <li class="mb-2">🏷️ Priority levels</li>
                                        <li class="mb-2">📊 Real-time statistics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="card h-100">
                                <div class="card-header bg-info text-white">
                                    <h6 class="mb-0">🔍 Filtering</h6>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled mb-0">
                                        <li class="mb-2">🌐 View all todos</li>
                                        <li class="mb-2">⚡ Active todos only</li>
                                        <li class="mb-2">✅ Completed todos only</li>
                                        <li class="mb-2">🎯 Priority-based sorting</li>
                                        <li class="mb-2">🧹 Bulk operations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="card h-100">
                                <div class="card-header bg-warning text-dark">
                                    <h6 class="mb-0">🛠️ Technical</h6>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled mb-0">
                                        <li class="mb-2">🪝 useState for state</li>
                                        <li class="mb-2">🎨 Bootstrap styling</li>
                                        <li class="mb-2">📱 Responsive design</li>
                                        <li class="mb-2">⌨️ Keyboard shortcuts</li>
                                        <li class="mb-2">💾 Client-side storage</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="alert alert-info mt-4">
                        <h6 class="alert-heading">💡 Pro Tips</h6>
                        <ul class="mb-0">
                            <li>Press <kbd>Enter</kbd> after typing to quickly add a todo</li>
                            <li>Use priority levels to organize your tasks effectively</li>
                            <li>Filter by status to focus on what needs to be done</li>
                            <li>Use "Clear Completed" to keep your list tidy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}