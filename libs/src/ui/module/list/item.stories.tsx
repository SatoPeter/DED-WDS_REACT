import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Avatar, Item } from '@src/ui';
import { AccountIcon, ArrowDownIcon } from '@src/assets';

export default {
  title: 'Design System/Item',
  component: Item,
  tags: ['autodocs'],
  argTypes: {
    /* 設定參數 */
    // isDisabled: {
    //   description: '是否禁用',
    //   control: {
    //     type: 'boolean',
    //   },
    // },
    prefix: {
      description: '前置元件',
      options: ['None', 'Account', 'Avatar', 'ArrowDownIcon'],
      mapping: {
        None: null,
        Account: <AccountIcon className="icon" />,
        Avatar: <Avatar size="xsmall" shape="circle" userName="test" />,
        ArrowDownIcon: <ArrowDownIcon className="icon" />,
      },
    },
    content: {
      description: '內容',
      control: {
        type: 'object',
      },
    },
    suffix: {
      description: '後置元件',
      options: ['None', 'Account', 'Avatar', 'ArrowDownIcon'],
      mapping: {
        None: null,
        Account: <AccountIcon className="icon" />,
        Avatar: <Avatar size="xsmall" shape="circle" userName="test" />,
        ArrowDownIcon: <ArrowDownIcon className="icon" />,
      },
    },
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
      title: '項目',
      description: {
        /* 組件描述 */
        component: '項目的呈現及說明。',
      },
    },
  },
} as Meta;
/* 設定組件類型 */
type Story = StoryObj<typeof Item>;

export const Primary: Story = {
  name: '搜尋輸入框',
  args: {
    /* 設定參數預設值 */
    // size: 'medium',
    // isDisabled: false,
    prefix: <Avatar size="xsmall" shape="circle" userName="test" />,
    content: {
      label: '選項一',
      value: 'option1',
      // href: 'https://www.google.com',
    },
    // suffix: <ArrowDownIcon width={'24px'} height={'24px'} />,

    className: '',
    onClick: () => action('onClick')(),
  },
  render(args) {
    return (
      <div style={{ width: '200px' }}>
        <Item {...args} />
      </div>
    );
  },
};
