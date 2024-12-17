// .storybook/manager.js
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
// import create from '../.storybook/theme';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'DED WDS Storybook',
    brandUrl:
      'https://uedteam.github.io/DED-WDS_REACT/?path=/docs/introduction/changelog--docs',
    brandImage:
      'https://storage.googleapis.com/ded-wds-bucket/AUO-wds-logo-react.png',
    brandTarget: '_self',
    colorPrimary: '#00467c',
    colorSecondary: '#00467c',
    fontBase:
      "'Mabry Pro', Verdana, 'Noto Sans TC', 'Noto Sans SC', 'Noto Sans JP', 'Microsoft JhengHei', 'sans-serif','新細明體', '細明體'",
    fontCode: 'monospace',
  }),
});
