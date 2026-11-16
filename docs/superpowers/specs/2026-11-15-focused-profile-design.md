# Focused Profile Design

## Intent

Turn the existing data-driven profile into a friendly, focused introduction for Viktoria's portfolio while using the work as a practical introduction to component CSS.

## Visual Design

- Center the profile content in a single column.
- Show `profile-photo.jpeg` as a circular portrait above the text.
- Display the full name `Viktoria Ivanova`, the role with a purple accent, and the biography beneath it.
- Keep the biography readable with a limited line length and comfortable spacing.
- Make the layout adapt to narrow screens without horizontal scrolling.
- Use `cat.svg` as the page favicon.

## CSS Organization

- Create `src/Profile.css` and import it from `src/Profile.tsx`.
- Use component-specific class names: `profile`, `profile__photo`, `profile__name`, `profile__role`, and `profile__bio`.
- Keep global page defaults in `src/index.css` and App-level or counter styles in `src/App.css`.
- Regular CSS remains global, so the class naming convention prevents accidental collisions.

## Approaches Considered

1. A normal `Profile.css` file: selected because it keeps the component styles nearby and uses familiar CSS syntax.
2. Put the styles in `App.css`: fewer files, but profile styles would become mixed with page-level styles.
3. Use `Profile.module.css`: provides automatic isolation but adds CSS Modules syntax before it is needed.

## Scope

This change includes the focused profile layout, portrait, responsive styling, full display name, and favicon. It does not change the API structure, remove the practice counter, or add other CV sections.
