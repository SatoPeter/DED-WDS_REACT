import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { List } from '@src/ui';

export default {
  title: 'Design System/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    /* 設定參數 */
    // isDisabled: {
    //   description: '是否禁用',
    //   control: {
    //     type: 'boolean',
    //   },
    // },
    isMenu: {
      description: '是否為選單',
      control: {
        type: 'boolean',
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
type Story = StoryObj<typeof List>;

export const Primary: Story = {
  name: '列表清單',
  args: {
    /* 設定參數預設值 */
    // isDisabled: false,
    options: [
      {
        content: {
          label: '選項一',
          value: 'option1',
        },
      },
      {
        content: {
          label: '選項二',
          value: 'option2',
        },
      },
      {
        content: {
          label: '選項三',
          value: 'option3',
        },
      },
    ],
    className: '',
    onSelect: action('onSelect'),
  },
  render(args) {
    return (
      <div style={{ width: '200px' }}>
        <List {...args} />
      </div>
    );
  },
};

export const Menu: Story = {
  name: '功能選單',
  args: {
    /* 設定參數預設值 */
    // isDisabled: false,
    isMenu: true,
    options: [
      {
        // prefix: <Avatar size="xsmall" shape="circle" userName="test" />,
        content: {
          label: '選項一',
          value: 'option1',
          // href: 'https://google.com',
        },
        // suffix: <ArrowDownIcon width={'24px'} height={'24px'} />,
      },
      {
        // prefix: <Avatar size="xsmall" shape="circle" userName="test" />,
        content: {
          label: '選項二',
          value: 'option2',
          // href: 'https://google.com',
        },
        // suffix: <ArrowDownIcon width={'24px'} height={'24px'} />,
      },
      {
        // prefix: <Avatar size="xsmall" shape="circle" userName="test" />,
        content: {
          label: '選項三',
          value: 'option3',
          // href: 'https://google.com',
        },
        // suffix: <ArrowDownIcon width={'24px'} height={'24px'} />,
      },
    ],
    className: '',
    onSelect: action('onSelect'),
  },
  render(args) {
    return (
      <div style={{ width: '200px' }}>
        <List {...args} />
      </div>
    );
  },
};
