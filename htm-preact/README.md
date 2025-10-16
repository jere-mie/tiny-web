# Preact + HTM + Bootstrap No-Build Webs## Getting Started

1. **Local Development**: For best results, serve via HTTP:
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have live-server installed)
   npx live-server
   ```
2. **Visit**: http://localhost:8000

## Key Features

### 🎯 Navigation
- **Tab-based Interface** - Clean navigation between different app sections
- **Responsive Design** - Works perfectly on desktop and mobile
- **Bootstrap Components** - Professional UI with consistent styling

### 🔢 Interactive Counter
- **Customizable Step Size** - Set your own increment/decrement value
- **Mathematical Operations** - Shows positive, absolute, and squared values
- **Visual Feedback** - Color-coded display based on positive/negative values

### ✅ Advanced Todo Manager
- **Priority Levels** - High, medium, and low priority tasks
- **Smart Filtering** - View all, active, or completed todos
- **Statistics Dashboard** - Real-time stats with visual badges
- **Bulk Operations** - Clear all completed tasks at once

### 🕐 Live Clock
- **Real-time Updates** - Updates every second
- **12/24 Hour Toggle** - Switch between time formats
- **Timezone Information** - Shows current timezone
- **Date Calculations** - Week and day of year information

### 👤 User Profile
- **Editable Profile** - Click edit to modify user information
- **Skills Management** - Add/remove skills with visual tags
- **Statistics Display** - Shows experience and project counts
- **Social Links** - Connect buttons for various platforms

## Component Architecture

### Creating New Components

1. **Create Component File**:
```javascript
// static/components/MyComponent.js
import { useState, html } from '../standalone-preact-htm.esm.js';

export function MyComponent({ prop1, prop2 }) {
    const [state, setState] = useState('initial');
    
    return html`
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${prop1}</h5>
                <p class="card-text">${prop2}</p>
            </div>
        </div>
    `;
}
```

2. **Import in App.js**:
```javascript
import { MyComponent } from './MyComponent.js';

// Use in render:
html`<${MyComponent} prop1="Hello" prop2="World" />`
```

### Bootstrap Integration

All components use Bootstrap 5 classes for styling:

```javascript
// Card with Bootstrap classes
html`
    <div class="card shadow">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title mb-0">Title</h5>
        </div>
        <div class="card-body">
            <p class="card-text">Content</p>
            <button class="btn btn-primary">Action</button>
        </div>
    </div>
`
``` modern web application built with Preact, HTM, and Bootstrap without any build tools or bundlers. Features a modular component architecture with beautiful Bootstrap styling.

## What's Included

### 📁 Project Structure

```
├── README.md
├── index.html                              # Main entry point
└── static/                                 # All static assets
    ├── components/                         # Modular components
    │   ├── App.js                         # Main app component with navigation
    │   ├── Header.js                      # App header with branding
    │   ├── Counter.js                     # Interactive counter with step control
    │   ├── TodoList.js                    # Advanced todo management
    │   ├── Clock.js                       # Live clock with timezone info
    │   └── UserCard.js                    # Editable user profile card
    ├── bootstrap.min.css                   # Bootstrap 5 CSS framework
    └── standalone-preact-htm.esm.js       # All-in-one Preact+HTM library
```

### 🎨 Components Overview

- **App.js** - Main application with tab navigation and layout
- **Header.js** - Beautiful header with branding and badges
- **Counter.js** - Interactive counter with customizable steps and math operations
- **TodoList.js** - Full-featured todo manager with priorities, filtering, and stats
- **Clock.js** - Live clock with 12/24 hour toggle and timezone information
- **UserCard.js** - Editable user profile with skills management

### 🛠️ Tech Stack

- **[Preact](https://preactjs.com/)** - Fast 3kB alternative to React
- **[HTM](https://github.com/developit/htm)** - JSX-like syntax using template literals  
- **[Bootstrap 5](https://getbootstrap.com/)** - Modern CSS framework for responsive design
- **ES Modules** - Native browser module system, no bundling required

## Getting Started

1. **Open in Browser**: Simply open `index.html` or `advanced.html` in any modern browser
2. **Local Development**: For best results, serve via HTTP (not file://):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have live-server installed)
   npx live-server
   ```
3. **Visit**: http://localhost:8000

## Key Concepts

### HTM Syntax

HTM lets you write JSX-like syntax using tagged template literals:

```javascript
import { html } from './static/standalone-preact-htm.esm.js';

// Instead of JSX:
// <div className="card">Hello {name}</div>

// Use HTM:
html`<div class="card">Hello ${name}</div>`
```

### Component Definition

```javascript
function MyComponent({ title, children }) {
    const [count, setCount] = useState(0);
    
    return html`
        <div>
            <h2>${title}</h2>
            <p>Count: ${count}</p>
            <button onClick=${() => setCount(count + 1)}>+</button>
            ${children}
        </div>
    `;
}
```

### Using Components

```javascript
// Self-closing
html`<${MyComponent} title="Hello" />`

// With children
html`
    <${MyComponent} title="Hello">
        <p>This is a child element</p>
    </MyComponent>
`
```

### State Management

```javascript
import { useState, useEffect } from './static/standalone-preact-htm.esm.js';

function StatefulComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        // Fetch data on mount
        fetchData();
    }, []);
    
    return html`<div>...</div>`;
}
```

## Building Your Own Components

### 1. Create Component Files

Create `.js` files in the `static/` folder:

```javascript
// static/my-components.js
import { useState } from 'https://esm.sh/preact@10.19.2/hooks';
import { html } from 'https://esm.sh/htm@3.1.1/preact';

export function MyCustomComponent({ prop1, prop2 }) {
    return html`<div>${prop1} - ${prop2}</div>`;
}
```

### 2. Import and Use

```javascript
// In your HTML file
import { MyCustomComponent } from './static/my-components.js';

function App() {
    return html`
        <${MyCustomComponent} prop1="Hello" prop2="World" />
    `;
}
```

## Styling Options

### 1. Inline Styles
```javascript
html`<div style="color: red; font-size: 16px;">Styled text</div>`
```

### 2. CSS Classes
```javascript
html`<div class="my-class ${isActive ? 'active' : ''}">Content</div>`
```

### 3. CSS-in-JS
```javascript
const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f0f0f0'
    }
};

html`<div style=${styles.container}>Content</div>`
```

## Advanced Patterns

### Conditional Rendering
```javascript
html`
    <div>
        ${isLoggedIn ? html`<p>Welcome back!</p>` : html`<p>Please log in</p>`}
    </div>
`
```

### Lists
```javascript
html`
    <ul>
        ${items.map(item => html`
            <li key=${item.id}>${item.name}</li>
        `)}
    </ul>
`
```

### Event Handling
```javascript
const handleClick = (e) => {
    e.preventDefault();
    console.log('Clicked!');
};

html`<button onClick=${handleClick}>Click me</button>`
```

## Fetching Data

```javascript
function DataComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/data')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (loading) return html`<div>Loading...</div>`;

    return html`
        <div>
            <h2>Data:</h2>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        </div>
    `;
}
```

## Benefits of This Approach

✅ **No Build Step** - Just open HTML files in browser  
✅ **Fast Development** - Instant reload, no compilation  
✅ **Modern Syntax** - JSX-like experience with HTM  
✅ **Small Bundle** - Preact is only 3kB  
✅ **ES Modules** - Native browser support  
✅ **CDN Delivery** - No local dependencies  

## Browser Support

- Chrome/Edge 61+
- Firefox 60+
- Safari 11+

All modern browsers with ES module support.

## Benefits of This Approach

✅ **No Build Step** - Just open HTML files in browser  
✅ **Modern UI** - Professional Bootstrap 5 styling  
✅ **Component Architecture** - Modular, reusable components  
✅ **Fast Development** - Instant reload, no compilation  
✅ **Responsive Design** - Works on all device sizes  
✅ **Modern JavaScript** - ES modules, hooks, and modern syntax  
✅ **Small Bundle** - Preact is only 3kB + Bootstrap CSS  
✅ **No Dependencies** - Everything included locally  

## Development Tips

1. **Component Organization**: Keep each component in its own file for better maintainability
2. **Bootstrap Classes**: Use Bootstrap's utility classes for quick styling
3. **State Management**: Use `useState` for component state, consider signals for global state
4. **Development Server**: Always use a local server to avoid CORS issues
5. **Hot Reload**: Changes are visible immediately after browser refresh

## Next Steps

- **Add More Components**: Create new components in the `/static/components` directory
- **Customize Bootstrap**: Replace `bootstrap.min.css` with a custom theme
- **Add Routing**: Implement client-side routing for multi-page apps
- **State Management**: Add global state management with Preact Signals
- **PWA Features**: Add service worker for offline support
- **API Integration**: Connect to backend services for real data

Happy coding! 🚀

## Tips

1. **Use TypeScript**: Add `// @ts-check` at the top of JS files for basic type checking
2. **Development Server**: Use a local server to avoid CORS issues
3. **Component Organization**: Keep components in separate files for better organization
4. **State Management**: For complex apps, consider using a state management library
5. **Performance**: Use `useMemo` and `useCallback` for optimization when needed

## Next Steps

- Add more components to `static/components.js`
- Create multiple pages and link them together
- Add a CSS framework like Tailwind via CDN
- Implement routing with `preact/router`
- Add PWA features for offline support

Happy coding! 🚀