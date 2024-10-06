/** @type { import('@storybook/web-components').Preview } */
import '!style-loader!css-loader!sass-loader!../src/index.scss';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
