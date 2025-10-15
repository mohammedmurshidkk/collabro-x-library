# Gemini Agent Instructions

This document provides instructions for the Gemini agent on how to interact with this project.

This is a shared library for the IKM portal. It contains UI components, utility functions, and media queries.

## Folder Structure

The folder structure of this project is as follows:

```
/
├───dist/                       # The distributable output of the project.
├───src/
│   ├───components/             # The React components.
│   │   ├───[ComponentName]/      # Each component has its own directory.
│   │   │   └───index.tsx         # The component file.
│   ├───lib/                      # Utility functions for the component library.
│   ├───media-queries/            # Shared media queries.
│   ├───styles/                   # The global styles.
│   └───utils/                    # Shared utility functions.
└───...                         # Configuration files.
```

When adding a new component, please follow this folder structure. Create a new directory for the component under `src/components` and name it with the component's name in PascalCase. The component file should be named `index.tsx`.

When adding a new utility function, please add it to the `src/utils` directory.

When adding new media queries, please add them to the `src/media-queries` directory.

## Naming Conventions

- **Components:** Component names should be in PascalCase (e.g., `Button`, `Input`).
- **Files:** File names should be in PascalCase (e.g., `Button.tsx`, `Input.tsx`).
- **Variables:** Variable names should be in camelCase (e.g., `buttonVariants`, `inputProps`).

## Code Style

This project uses Prettier to enforce a consistent code style. Please make sure to format your code before committing.

## Commits

Commit messages should be descriptive and follow the conventional commit format.
