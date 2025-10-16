import { useState, useEffect, html } from '../standalone-preact-htm.esm.js';

// Simple hash-based router
export class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = this.getCurrentRoute(); // Initialize with current hash
        this.listeners = new Set();
        
        // Listen for hash changes
        window.addEventListener('hashchange', this.handleHashChange.bind(this));
        window.addEventListener('load', this.handleHashChange.bind(this));
        
        // Set initial route immediately
        setTimeout(() => this.handleHashChange(), 0);
    }
    
    // Add a route
    route(path, component) {
        this.routes[path] = component;
        return this;
    }
    
    // Navigate to a route
    navigate(path) {
        window.location.hash = path;
    }
    
    // Get current route
    getCurrentRoute() {
        return window.location.hash.slice(1) || '/';
    }
    
    // Handle hash changes
    handleHashChange() {
        const newRoute = this.getCurrentRoute();
        this.currentRoute = newRoute;
        this.notifyListeners();
    }
    
    // Subscribe to route changes
    subscribe(listener) {
        this.listeners.add(listener);
        // Immediately notify new listeners of current route
        listener(this.currentRoute);
        return () => this.listeners.delete(listener);
    }
    
    // Notify all listeners
    notifyListeners() {
        this.listeners.forEach(listener => listener(this.currentRoute));
    }
    
    // Get component for current route
    getComponent() {
        return this.routes[this.currentRoute] || this.routes['*'] || null;
    }
}

// Create global router instance
export const router = new Router();

// Router hook for components
export function useRouter() {
    const [currentRoute, setCurrentRoute] = useState(router.getCurrentRoute());
    
    useEffect(() => {
        const unsubscribe = router.subscribe(setCurrentRoute);
        return unsubscribe;
    }, []);
    
    return {
        currentRoute,
        navigate: router.navigate.bind(router),
        router
    };
}

// Router component
export function RouterOutlet() {
    const { currentRoute } = useRouter();
    const Component = router.getComponent();
    
    if (!Component) {
        return html`
            <div class="alert alert-warning">
                <h4>Page Not Found</h4>
                <p>The page you're looking for doesn't exist.</p>
                <a href="#/" class="btn btn-primary">Go Home</a>
            </div>
        `;
    }
    
    return html`<${Component} />`;
}

// Navigation Link component
export function NavLink({ to, children, className = '', activeClassName = 'active', ...props }) {
    const { currentRoute } = useRouter();
    const isActive = currentRoute === to;
    const finalClassName = `${className} ${isActive ? activeClassName : ''}`.trim();
    
    const handleClick = (e) => {
        e.preventDefault();
        router.navigate(to);
    };
    
    return html`
        <a 
            href="#${to}" 
            class=${finalClassName}
            onClick=${handleClick}
            ...${props}
        >
            ${children}
        </a>
    `;
}