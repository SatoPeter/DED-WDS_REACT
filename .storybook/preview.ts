import '@style/globals.scss';
import { Preview } from '@storybook/react';
import '../index.css';
import './preview.scss';

/* snipped for brevity */

const preview: Preview = {
  initialGlobals: {
    styles: {
      body: {
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif',
      },
    },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#333' },
        { name: 'gray', value: '#f0f0f0' },
      ],
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', 'Components'],
        locales: 'en-US',
      },
    },
    controls: { expanded: true },
  },
  tags: ['autodocs'],
};

export default preview;
