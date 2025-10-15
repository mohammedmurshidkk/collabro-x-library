# IKM Shared Library

This is a shared library for the IKM portal. It contains UI components, utility functions, and media queries. It is built with React, TypeScript, and Tailwind CSS. The components are based on shadcn/ui.

## Installation

To install the shared library, run the following command:

```bash
pnpm install ikm-shared-library
```

## Usage

### UI Components

To use a component from the library, import it into your project and use it like any other React component.

```jsx
import { Button } from 'ikm-shared-library'

function MyApp() {
  return <Button>Click me</Button>
}
```

### Utility Functions

To use a utility function from the library, import it into your project and use it like any other function.

```jsx
import { utils } from 'ikm-shared-library'

function myFunc() {
  return utils.add(1, 2)
}
```

### Media Queries

To use media queries from the library, import them into your project.

```jsx
import { mediaQueries } from 'ikm-shared-library'

const myComponent = () => {
  if (window.matchMedia(`(min-width: ${mediaQueries.screens.lg})`).matches) {
    // Do something for large screens
  }
}
```

## Folder Structure

The folder structure of this project is as follows:

```
/
├───dist/                       # The distributable output of the project.
├───src/
│   ├───components/             # The React components.
│   │   ├───Button/               # The Button component.
│   │   └───Input/                # The Input component.
│   ├───lib/                      # Utility functions for the component library.
│   ├───media-queries/            # Shared media queries.
│   └───utils/                    # Shared utility functions.
└───...                         # Configuration files.
```

## Local Development

To use this library in a local project and get real-time updates without publishing it to npm, you can use `pnpm link`.

1.  **Create a global link:**
    In the root directory of this project (`ikm-ui-library`), run the following command. This makes the library available for linking.

    ```bash
    pnpm link --global
    ```

2.  **Link in your project:**
    In the root directory of the project where you want to use this library, run this command:

    ```bash
    pnpm link --global ikm-ui-library
    ```

3.  **Enable Real-Time Updates:**
    To automatically rebuild the library whenever you make a change, run the `dev` script in the `ikm-ui-library` directory:

    ```bash
    pnpm run dev
    ```

    This will watch for file changes and ensure your linked project always has the latest version of the library.

## Contributing

To contribute to the component library, please follow these steps:

1.  Create a new branch for your feature or bug fix.
2.  Make your changes and commit them with a descriptive commit message.
3.  Push your changes to your forked repository.
4.  Create a pull request to the main repository.
