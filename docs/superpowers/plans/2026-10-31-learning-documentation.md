# Learning Documentation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a small Markdown documentation area with an embedded Mermaid architecture diagram for visual learning.

**Architecture:** Three focused Markdown files provide navigation, architecture explanations, and ongoing learning notes. Mermaid rendering uses VS Code's built-in Markdown preview, with no extension or project dependency.

**Tech Stack:** Markdown, Mermaid, VS Code built-in Markdown preview

**Spec:** `docs/superpowers/specs/2026-10-31-learning-documentation-design.md`

## Global Constraints

- Do not change application code or dependencies.
- Do not install a VS Code extension.
- Keep explanations short and beginner-friendly.
- Embed Mermaid diagrams directly in Markdown.

## Review Focus

- The Mermaid fence must use the `mermaid` language identifier so VS Code renders it.
- The first architecture diagram must show React, Express, and SQLite in request order.
- Preview instructions must use the macOS shortcut available to the user.
- Links from the documentation index must resolve to the two documentation pages.
- Learning notes must remain a reusable glossary rather than duplicate the architecture page.

---

### Task 1: Visual learning documentation

**Files:**
- Create: `docs/README.md`
- Create: `docs/architecture.md`
- Create: `docs/learning-notes.md`

**Interfaces:**
- Consumes: VS Code's built-in Markdown preview and Mermaid fenced-block support.
- Produces: A documentation index, initial architecture diagram, and learning glossary.

- [ ] **Step 1: Create the documentation index**

Add links to `architecture.md` and `learning-notes.md`, plus instructions to open preview with `Cmd+Shift+V`.

- [ ] **Step 2: Create the architecture explanation**

Explain the responsibilities of React, Express, Node.js, and SQLite, and add a left-to-right Mermaid request-flow diagram.

- [ ] **Step 3: Create the learning notes**

Add short definitions for frontend, backend, API, database, and request/response.

- [ ] **Step 4: Verify the documentation**

Confirm all three files exist, internal links point to existing files, and the Mermaid block has balanced fences and the `mermaid` language identifier.

- [ ] **Step 5: Review the working tree**

Run: `git diff --check && git status --short`

Expected: no whitespace errors; only the approved documentation files are new.
