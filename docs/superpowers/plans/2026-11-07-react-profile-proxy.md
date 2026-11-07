# React Profile Proxy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Display the SQLite profile in React by fetching the existing Express endpoint through Vite's development proxy.

**Architecture:** React requests `/api/profile` from the Vite development server. Vite removes the `/api` prefix and forwards `/profile` to Express on port 3000; Express returns the SQLite row as JSON.

**Tech Stack:** React 19, TypeScript, Vite 8, Express 5, Node SQLite

**Spec:** `docs/superpowers/specs/2026-11-07-react-profile-proxy-design.md`

## Global Constraints

- Do not add CORS or another npm package.
- Do not change the SQLite schema or stored profile.
- Do not add editing, authentication, or deployment configuration.
- Teach and write each change one small step at a time.

## Review Focus

- `/api/profile` must rewrite to `/profile`, not `/api/profile`, before reaching Express.
- The frontend must show a useful loading state before the request finishes.
- A failed HTTP response or network request must show an error instead of crashing.
- Rendering must not assume profile data exists before the request completes.
- Express and Vite must remain independently runnable on ports 3000 and 5173.

---

### Task 1: Proxy and profile data flow

**Files:**
- Modify: `vite.config.ts`
- Modify: `src/Profile.tsx`
- Verify: `server/express-server.js`

**Interfaces:**
- Consumes: Express `GET /profile`, returning `{ id: number, name: string, role: string }` as JSON.
- Produces: React request to `GET /api/profile` and rendered loading, error, or profile content.

- [ ] **Step 1: Observe the request before proxy configuration**

With Express and Vite running, request `http://localhost:5173/api/profile` and confirm it does not return the expected profile JSON.

- [ ] **Step 2: Configure the Vite proxy**

In `vite.config.ts`, add `server.proxy['/api']` targeting `http://localhost:3000` and rewrite the leading `/api` to an empty string.

- [ ] **Step 3: Verify the proxy independently**

Request `http://localhost:5173/api/profile` and confirm the JSON contains `id: 1`, `name: "Viki"`, and `role: "Web developer"`.

- [ ] **Step 4: Define the React data contract and states**

In `src/Profile.tsx`, define `ProfileData` with `id`, `name`, and `role`; add state for `ProfileData | null`, loading, and an error message.

- [ ] **Step 5: Fetch the profile when the component mounts**

Use `useEffect` to call `fetch('/api/profile')`, reject non-successful HTTP responses, parse JSON as `ProfileData`, update profile state, capture errors, and finish loading.

- [ ] **Step 6: Render each state**

Render a loading message while pending, an error message on failure, and the profile name and role after success.

- [ ] **Step 7: Verify the complete flow**

Run: `npm run build`

Expected: exit code 0 with a successful Vite production build.

Run: `npm run lint`

Expected: exit code 0 with no ESLint errors.

With both development servers running, confirm the React page displays `Viki` and `Web developer` from SQLite.
