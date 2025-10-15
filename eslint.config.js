import globals from 'globals'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'
import tseslintParser from '@typescript-eslint/parser' // Explicitly import the parser
import tsPlugin from '@typescript-eslint/eslint-plugin' // Explicitly import the plugin

// mimic CommonJS variables -- not needed if using Jest or another runner that defines these
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
})

export default [
  js.configs.recommended,
  // Removed compat.extends for typescript-eslint recommended
  ...compat.extends(
    'plugin:prettier/recommended',
    'plugin:storybook/recommended'
  ),
  {
    files: [
      '.storybook/*.js',
      'babel.config.cjs',
      'postcss.config.cjs',
      'tailwind.config.cjs',
    ],
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'no-undef': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsPlugin, // Explicitly add the plugin
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslintParser, // Assign the imported parser object
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules, // Apply recommended rules from tsPlugin
      'no-unused-vars': 'off', // Disable base ESLint rule
      '@typescript-eslint/no-unused-vars': [
        'error', // Keep as error
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'prettier/prettier': 'error',
    },
  },
  {
    // Ignore files from .gitignore
    ignores: ['dist/', 'node_modules/', 'storybook-static/'],
  },
]
