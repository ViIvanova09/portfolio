# Profile Bio Design

## Intent

Add a short biography to the portfolio profile so visitors can learn more than the developer's name and role.

## Scope

- Add a nullable `bio` text column to the existing SQLite `profile` table.
- Update profile row `id = 1` with biography text.
- Return `bio` from the existing Express `GET /profile` route.
- Add `bio` to the React `ProfileData` type and display it in `Profile`.

This change will not redesign the page or add profile editing through the browser.

## Approaches Considered

1. Use `ALTER TABLE` to add the column. This preserves existing data and introduces a simple database migration.
2. Delete and recreate the database. This is quick for experiments but removes existing data.

We chose `ALTER TABLE` so the existing profile remains intact and the project follows a realistic database-change workflow.

## Learning Flow

Make and verify one layer at a time: SQLite, then Express, then the React type, and finally the rendered profile.
