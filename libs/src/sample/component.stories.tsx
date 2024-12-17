import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import Component from './component';

export default {
  /* 定義組件路徑及匯入名稱: Element/Component */
  title: 'Component/Sample/Component',
  /* 設定對應的組件名稱: Component */
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    /* 設定參數 */
    // size: {
    //   description: '輸入框尺寸',
    //   control: {
    //     type: 'select',
    //     options: ['small', 'medium', 'large'],
    //   },
    // },
    // isDisabled: {
    //   description: '是否禁用',
    //   control: {
    //     type: 'boolean',
    //   },
    // },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
    onClick: {
      description: '點擊事件',
    },
  },
  parameters: {
    docs: {
      title: '搜尋',
      description: {
        /* 組件描述 */
        component: '組件的呈現及說明。',
      },
    },
  },
} as Meta;
/* 設定組件類型 */
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  name: '預設項目',
  args: {
    /* 設定參數預設值 */
    // size: 'medium',
    // isDisabled: false,
    className: '',
    onClick: action('onClick'),
  },
  render(args) {
    return <Component {...args} />;
  },
};
