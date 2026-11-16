# Focused Profile Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Style the database-backed profile as a centered introduction with a circular portrait, full name, accented role, readable biography, and cat favicon.

**Architecture:** `Profile.tsx` owns the profile markup and imports `Profile.css` for component-specific styling. Existing global theme variables remain in `index.css`, while the SQLite and Express data flow remains unchanged apart from saving the full display name.

**Tech Stack:** React 19, TypeScript, Vite 8, CSS, Node.js 24, SQLite

**Spec:** `docs/superpowers/specs/2026-11-15-focused-profile-design.md`

## Global Constraints

- Keep the practice counter.
- Keep global defaults in `src/index.css` and component styles in `src/Profile.css`.
- Use `profile`, `profile__photo`, `profile__name`, `profile__role`, and `profile__bio` class names.
- Display the name exactly as `Viktoria Ivanova`.
- Reuse the existing `--accent`, `--text`, and `--text-h` theme variables.
- Do not change the API response structure.

## Review Focus

- The portrait has useful alt text and is not stretched.
- The profile remains readable at 320px width without horizontal scrolling.
- Light and dark modes both retain readable contrast.
- Loading and error states still appear when profile data is unavailable.
- The cat favicon is included in the Vite production build.

---

### Task 1: Verify profile content and assets

**Files:**
- Modify: `server/sqlite.js`
- Modify: `index.html`
- Add: `src/assets/profile-photo.jpeg`
- Add: `src/assets/cat.svg`
- Modify: `.gitignore`

**Interfaces:**
- Produces: profile API data with `name: "Viktoria Ivanova"`, a portrait import path, and a favicon path

- [ ] **Step 1: Keep the database name as `Viktoria Ivanova` and run the data script**

Run: `node server/sqlite.js`

Expected: the logged profile includes `name: 'Viktoria Ivanova'`.

- [ ] **Step 2: Verify the favicon reference**

Keep the `index.html` icon link pointed at `src/assets/cat.svg`; confirm the cat appears in the browser tab after a hard refresh.

- [ ] **Step 3: Ignore visual brainstorming scratch files**

Add `.superpowers/` to `.gitignore` so browser-mockup session files are not committed.

### Task 2: Add semantic profile markup

**Files:**
- Create: `src/Profile.css`
- Modify: `src/Profile.tsx`

**Interfaces:**
- Consumes: `profile-photo.jpeg` and `ProfileData`
- Produces: focused profile markup with component-specific class names

- [ ] **Step 1: Create and import the stylesheet**

Create `src/Profile.css` and import it from `src/Profile.tsx`.

- [ ] **Step 2: Import the portrait**

Import `./assets/profile-photo.jpeg` as `profilePhoto` in `Profile.tsx`.

- [ ] **Step 3: Add the focused markup**

Apply `profile` to the wrapper; render the portrait with `src={profilePhoto}`, `alt="Viktoria Ivanova"`, and `profile__photo`; then apply `profile__name`, `profile__role`, and `profile__bio` to their matching text elements.

- [ ] **Step 4: Verify behavior before styling**

Expected: the real photo and all profile text appear, loading still appears briefly, and the browser console has no image or React errors.

### Task 3: Style the focused profile

**Files:**
- Modify: `src/Profile.css`

**Interfaces:**
- Consumes: the five class names from Task 2 and theme variables from `index.css`
- Produces: centered, responsive focused-profile presentation

- [ ] **Step 1: Center the profile content**

Make `.profile` a vertical flex container with centered alignment, a readable maximum width, automatic horizontal margins, responsive padding, and consistent gap spacing.

- [ ] **Step 2: Crop the portrait**

Give `.profile__photo` equal width and height, `border-radius: 50%`, `object-fit: cover`, and an object position that keeps Viktoria's face centered.

- [ ] **Step 3: Establish text hierarchy**

Use `--text-h` for the name, `--accent` with medium weight for the role, and `--text` with a comfortable line height for the biography.

- [ ] **Step 4: Add the narrow-screen adjustment**

At a small-screen breakpoint, reduce the portrait size and horizontal profile padding; verify at 320px that nothing overflows.

### Task 4: Verify and commit

**Files:**
- Verify: all files changed by Tasks 1-3

**Interfaces:**
- Consumes: completed focused profile
- Produces: lint-clean, production-buildable feature

- [ ] **Step 1: Check the UI states**

With Express running, verify the portrait, full name, role, and bio in both wide and narrow browser widths. With Express stopped, refresh and verify the existing error message; then restart Express.

- [ ] **Step 2: Run project checks**

Run: `npm run lint`

Expected: exit code 0.

Run: `npm run build`

Expected: exit code 0 and a successful Vite production build.

- [ ] **Step 3: Commit**

```bash
git add .gitignore index.html server/sqlite.js server/portfolio.db src/Profile.tsx src/Profile.css src/assets/profile-photo.jpeg src/assets/cat.svg docs/superpowers/specs/2026-11-15-focused-profile-design.md docs/superpowers/plans/2026-11-15-focused-profile.md
git commit -m "feat: style focused portfolio profile"
```
