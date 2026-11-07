# Learning Documentation Design

## Intent

Create a small documentation area that supports visual learning while the portfolio is built.

## Goals

- Explain where project documentation belongs.
- Record short learning notes in plain language.
- Show the frontend/backend/database relationship with Mermaid embedded in Markdown.
- Use VS Code's built-in Markdown preview; do not install an extension.

## Non-goals

- Document the full portfolio before it is designed.
- Change application code or dependencies.
- Add an admin interface or backend in this change.

## Structure

- `docs/README.md`: documentation guide and preview instructions.
- `docs/architecture.md`: simple React, Express, and SQLite architecture explanation and Mermaid diagram.
- `docs/learning-notes.md`: a growing glossary of concepts learned during development.

## Approach

VS Code's built-in Mermaid renderer was chosen over an additional extension because the installed VS Code version already supports Mermaid blocks in Markdown preview. Diagrams will stay small and live beside their explanations.
