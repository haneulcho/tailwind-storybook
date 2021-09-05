import Alpine from 'alpinejs';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      small: {
        name: 'Viewport: Small',
        styles: {
          width: '1440px',
          height: '1050px',
        },
      },
      medium: {
        name: 'Viewport: Medium',
        styles: {
          width: '1680px',
          height: '1050px',
        },
      },
      large: {
        name: 'Viewport: Large',
        styles: {
          width: '1920px',
          height: '1050px',
        },
      }
    },
  },
  html: {
    removeEmptyComments: true,
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
};

Alpine.start();
import '../src/styles/tailwind.css';
