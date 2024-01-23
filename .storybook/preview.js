/** @type { import('@storybook/html').Preview } */

const customViewports = {
  smallUgly: {
    name: 'smallUgly',
    styles: {
      width: '360px',
      height: '500px'
    },
  },
  mediumUgly: {
    name: 'mediumUgly',
    styles: {
      width: '768px',
      height: '800px'
    },
  },
}

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'someDefault',
    },
  },
};

export default preview;
