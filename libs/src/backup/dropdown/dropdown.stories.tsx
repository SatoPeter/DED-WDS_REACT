import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../dropdown';

export default {
  title: 'Component/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    /* 設定參數 */
    // isDisabled: {
    //   description: '是否禁用',
    //   control: {
    //     type: 'boolean',
    //   },
    // },
    placement: {
      description: '下拉選單位置',
      control: {
        type: 'select',
        options: [
          'top-left',
          'top',
          'top-right',
          'right-top',
          'right',
          'right-bottom',
          'bottom-right',
          'bottom',
          'bottom-left',
          'left-bottom',
          'left',
          'left-top',
        ],
      },
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
    onSelect: {
      description: '選擇事件',
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
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  name: '搜尋輸入框',
  args: {
    dataSource: [
      {
        content: {
          label: '選項一',
          value: 'option1',
          // href: 'https://google.com',
        },
      },
      {
        content: {
          label: '選項二',
          value: 'option2',
          // href: 'https://google.com',
        },
      },
      {
        content: {
          label: '選項三',
          value: 'option3',
          // href: 'https://google.com',
        },
      },
    ],
    placement: 'bottom',
    /* 設定參數預設值 */
    // isDisabled: false,
    className: '',
    onSelect: action('onClick'),
  },
  render(args) {
    return (
      <div style={{ width: '300px' }}>
        <Dropdown {...args} />
      </div>
    );
  },
};
