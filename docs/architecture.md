# Portfolio Architecture

This diagram shows how the three main parts of the portfolio will communicate.

```mermaid
flowchart LR
    React["React frontend"] -->|"HTTP request"| Express["Express API<br/>running on Node.js"]
    Express -->|"SQL query"| SQLite[("SQLite database")]
    SQLite -->|"Stored data"| Express
    Express -->|"JSON response"| React
```

## Development Request Flow with the Vite Proxy

During development, React sends API requests to Vite. The Vite proxy forwards them to Express, which reads the profile from SQLite and returns JSON through the same path.

```mermaid
flowchart LR
    React["React<br/>Browser"] -->|"GET /api/profile"| Vite["Vite proxy<br/>Port 5173"]
    Vite -->|"Forwards GET /profile"| Express["Express API<br/>Port 3000"]
    Express -->|"SELECT profile"| SQLite[("SQLite<br/>portfolio.db")]
    SQLite -->|"Profile row"| Express
    Express -->|"JSON response"| Vite
    Vite -->|"JSON response"| React
```

Open this file in VS Code and press `Cmd+Shift+V` to see the rendered diagram.
