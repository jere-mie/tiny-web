import { useState, html } from '../standalone-preact-htm.esm.js';
import { Header } from './Header.js';
import { Counter } from './Counter.js';
import { TodoList } from './TodoList.js';
import { Clock } from './Clock.js';
import { UserCard } from './UserCard.js';

export function App() {
    const [activeTab, setActiveTab] = useState('home');

    const tabs = [
        { id: 'home', label: 'Home', icon: '🏠' },
        { id: 'counter', label: 'Counter', icon: '🔢' },
        { id: 'todos', label: 'Todos', icon: '✅' },
        { id: 'profile', label: 'Profile', icon: '👤' }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'home':
                return html`
                    <div class="row">
                        <div class="col-md-8">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h5 class="card-title">🚀 Welcome to Preact + HTM</h5>
                                    <p class="card-text">
                                        This is a modern web application built with Preact and HTM, 
                                        styled with Bootstrap, and requiring zero build tools!
                                    </p>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="card bg-light">
                                                <div class="card-body text-center">
                                                    <h6 class="card-title">⚡ Fast</h6>
                                                    <p class="card-text small">Preact is only 3kB</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="card bg-light">
                                                <div class="card-body text-center">
                                                    <h6 class="card-title">🛠️ No Build</h6>
                                                    <p class="card-text small">Just open in browser</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <${Clock} />
                        </div>
                    </div>
                `;
            case 'counter':
                return html`<${Counter} />`;
            case 'todos':
                return html`<${TodoList} />`;
            case 'profile':
                return html`<${UserCard} />`;
            default:
                return html`<div class="alert alert-warning">Page not found</div>`;
        }
    };

    return html`
        <div class="container-fluid">
            <${Header} />
            
            <!-- Navigation Tabs -->
            <div class="row">
                <div class="col-12">
                    <ul class="nav nav-pills nav-fill mb-4">
                        ${tabs.map(tab => html`
                            <li class="nav-item" key=${tab.id}>
                                <button 
                                    class="nav-link ${activeTab === tab.id ? 'active' : ''}"
                                    onClick=${() => setActiveTab(tab.id)}
                                    style="border: none; background: none;"
                                >
                                    ${tab.icon} ${tab.label}
                                </button>
                            </li>
                        `)}
                    </ul>
                </div>
            </div>

            <!-- Tab Content -->
            <div class="row">
                <div class="col-12">
                    ${renderTabContent()}
                </div>
            </div>

            <!-- Footer -->
            <footer class="mt-5 pt-4 border-top">
                <div class="row">
                    <div class="col-12 text-center">
                        <p class="text-muted">
                            Built with ❤️ using Preact + HTM + Bootstrap
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    `;
}