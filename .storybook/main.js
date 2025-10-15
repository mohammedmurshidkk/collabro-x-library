const config = {
  stories: ['../stories/**/*.stories.tsx'],

  addons: [
    '@storybook/addon-links',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
  ],

  framework: '@storybook/react-vite',

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}

export default config
