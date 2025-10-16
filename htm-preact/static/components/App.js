import { useState, html } from '../standalone-preact-htm.esm.js';
import { Header } from './Header.js';
import { router, RouterOutlet, NavLink } from './Router.js';
import { HomePage } from './HomePage.js';
import { CounterPage } from './CounterPage.js';
import { TodoPage } from './TodoPage.js';
import { ProfilePage } from './ProfilePage.js';
import { NotFoundPage } from './NotFoundPage.js';

// Set up routes
router
    .route('/', HomePage)
    .route('/counter', CounterPage)
    .route('/todos', TodoPage)
    .route('/profile', ProfilePage)
    .route('*', NotFoundPage); // 404 page for unmatched routes

export function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const navItems = [
        { path: '/', label: 'Home', icon: '🏠' },
        { path: '/counter', label: 'Counter', icon: '🔢' },
        { path: '/todos', label: 'Todos', icon: '✅' },
        { path: '/profile', label: 'Profile', icon: '👤' }
    ];

    return html`
        <div class="container-fluid">
            <${Header} />
            
            <!-- Navigation Bar -->
            <nav class="navbar navbar-expand-lg navbar-light bg-light rounded mb-4 shadow-sm">
                <div class="container-fluid">
                    <span class="navbar-brand d-lg-none">
                        <span class="badge bg-primary me-1">⚛️</span>
                        Navigation
                    </span>
                    <button 
                        class="navbar-toggler" 
                        type="button" 
                        onClick=${toggleMobileMenu}
                        aria-controls="navbarNav"
                        aria-expanded=${mobileMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse ${mobileMenuOpen ? 'show' : 'collapse'}" id="navbarNav">
                        <ul class="navbar-nav me-auto">
                            ${navItems.map(item => html`
                                <li class="nav-item" key=${item.path}>
                                    <${NavLink} 
                                        to=${item.path}
                                        className="nav-link px-3 py-2"
                                        activeClassName="nav-link active px-3 py-2"
                                        onClick=${closeMobileMenu}
                                    >
                                        <span class="d-inline-block me-2">${item.icon}</span>
                                        ${item.label}
                                    </NavLink>
                                </li>
                            `)}
                        </ul>
                        <div class="navbar-text d-none d-lg-block">
                            <small class="text-muted">No build tools • Client-side routing</small>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Content -->
            <main>
                <${RouterOutlet} />
            </main>

            <!-- Footer -->
            <footer class="mt-5 pt-4 border-top">
                <div class="row">
                    <div class="col-md-8">
                        <h6>🚀 Preact + HTM + Bootstrap</h6>
                        <p class="text-muted mb-0">
                            A modern web application built without build tools. 
                            Features client-side routing, component architecture, and responsive design.
                        </p>
                    </div>
                    <div class="col-md-4 text-md-end">
                        <div class="d-flex justify-content-md-end justify-content-start gap-2">
                            <span class="badge bg-primary">Preact 10.26.9</span>
                            <span class="badge bg-success">HTM 3.1.1</span>
                            <span class="badge bg-info">Bootstrap 5</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    `;
}