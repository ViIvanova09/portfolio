# Profile Bio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Store a short professional biography in SQLite and display it in the React profile.

**Architecture:** Extend the existing `profile` table with a nullable `bio` text column while preserving existing data. The existing Express `SELECT *` route will return the new value, and React will type and render it.

**Tech Stack:** Node.js 24, built-in `node:sqlite`, Express 5, React 19, TypeScript, Vite 8

**Spec:** `docs/superpowers/specs/2026-11-14-profile-bio-design.md`

## Global Constraints

- Preserve the existing profile row and database file.
- Keep the change inside the existing SQLite, Express, and React structure.
- Store the biography as plain text without Markdown.
- Continue learning one layer at a time: SQLite, Express, then React.

## Review Focus

- An existing database without `bio` gains the column without losing its profile row.
- Rerunning the SQLite practice script does not fail because `bio` already exists.
- The apostrophe and punctuation in the biography are stored safely through a prepared statement.
- `GET /profile` returns `bio` along with `id`, `name`, and `role`.
- The existing loading and error states still work when the API is slow or unavailable.

---

### Task 1: Add and populate the SQLite bio column

**Files:**
- Modify: `server/sqlite-practice.js`
- Modify at runtime: `server/portfolio.db`

**Interfaces:**
- Consumes: existing SQLite `profile(id, name, role)` table
- Produces: `profile(id, name, role, bio)` with `bio` containing the approved plain-text biography

- [ ] **Step 1: Update the table definition for new databases**

Add `bio TEXT` to the `CREATE TABLE IF NOT EXISTS profile` statement.

- [ ] **Step 2: Add a repeatable migration for the existing database**

Read `PRAGMA table_info(profile)` and run `ALTER TABLE profile ADD COLUMN bio TEXT` only when no column named `bio` exists.

- [ ] **Step 3: Update the prepared profile statement**

Include `bio` in the prepared statement and bind this exact value as a parameter:

```text
Junior Software Developer with one year of professional experience using JavaScript and TypeScript to develop and maintain online games. Currently learning React and building personal projects to strengthen my front-end skills.
```

- [ ] **Step 4: Run the database script twice**

Run: `node server/sqlite-practice.js`

Expected after each run: no SQLite error, and the logged profile contains `id`, `name`, `role`, and `bio`.

### Task 2: Verify the Express API contract

**Files:**
- Verify: `server/express-server.js`

**Interfaces:**
- Consumes: profile row containing `bio`
- Produces: `GET /profile` JSON with `id`, `name`, `role`, and `bio`

- [ ] **Step 1: Restart Express and request the profile endpoint**

Run Express: `node server/express-server.js`

Request: `http://localhost:3000/profile`

Expected: the JSON contains the approved `bio`. No route change should be needed because the existing query uses `SELECT *`.

### Task 3: Display the bio in React

**Files:**
- Modify: `src/Profile.tsx`

**Interfaces:**
- Consumes: `/api/profile` response with `bio: string`
- Produces: a profile view showing the biography below the role

- [ ] **Step 1: Extend the TypeScript data type**

Add `bio: string` to `ProfileData`.

- [ ] **Step 2: Render the biography**

Add a paragraph that reads `profile.bio` below the existing role paragraph.

- [ ] **Step 3: Verify all three UI states**

With Express running, confirm the name, role, and bio appear. With Express stopped, refresh and confirm the existing error message appears. Restart Express afterward.

- [ ] **Step 4: Run project verification**

Run: `npm run lint`

Expected: exit code 0.

Run: `npm run build`

Expected: exit code 0 and a successful Vite production build.

- [ ] **Step 5: Commit the feature**

```bash
git add server/sqlite-practice.js server/portfolio.db src/Profile.tsx docs/superpowers/specs/2026-11-14-profile-bio-design.md docs/superpowers/plans/2026-11-14-profile-bio.md
git commit -m "feat: add biography to profile"
```
