# React Profile Proxy Design

## Intent

Connect the React `Profile` component to the existing Express `/profile` endpoint through Vite's development proxy so the portfolio displays profile data stored in SQLite.

## Goals

- React requests `/api/profile`.
- Vite forwards the request to Express as `/profile`.
- Express reads profile ID `1` from `server/portfolio.db` and returns JSON.
- The component displays loading, profile, and error states.
- Changes are taught and written one small step at a time.

## Non-goals

- Do not add CORS or another npm package.
- Do not change the SQLite schema or stored profile.
- Do not add editing, authentication, or deployment configuration.

## Approach

Use Vite's `server.proxy` configuration with the `/api` prefix and rewrite it away before forwarding to `http://localhost:3000`. Keep the Express route `/profile` unchanged. Fetch `/api/profile` from React when the component loads.

## Alternatives considered

- Direct browser request with CORS: useful later, but introduces cross-origin configuration now.
- Vite proxy: selected because it keeps the first React data-fetching lesson focused and requires no extra dependency.
