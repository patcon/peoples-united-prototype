

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: async (config) => {
    // Set the base path for GitHub Pages deployment
    // eslint-disable-next-line no-undef
    const repoName = process.env.VITE_GITHUB_REPO_NAME;
    if (repoName) {
      config.base = `/${repoName}/storybook/`;
    }
    return config;
  }
};
export default config;