import { Meta, StoryObj } from '@storybook/react';
import Avatar from './avatar';

export default {
  title: 'Component/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      description: '形狀',
      control: {
        type: 'select',
        options: ['circle', 'square'],
      },
      table: {
        category: 'PROPS',
      },
    },
    size: {
      description: '尺寸',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      table: {
        category: 'PROPS',
      },
    },
    status: {
      description: '狀態',
      control: {
        type: 'select',
        options: ['none', 'online', 'idle', 'busy', 'offline'],
      },
      table: {
        category: 'PROPS',
      },
    },
    isShowInfo: {
      description: '是否顯示資訊',
      table: {
        category: 'PROPS',
      },
    },
    src: {
      description: '圖片連結',
      table: {
        category: 'PROPS',
      },
    },
    alt: {
      description: '圖片描述',
      table: {
        category: 'PROPS',
      },
    },
    userName: {
      description: '使用者名稱',
      table: {
        category: 'PROPS',
      },
    },
    caption: {
      description: '使用者描述',
      table: {
        category: 'PROPS',
      },
    },
    className: {
      description: '客製化樣式',
      table: {
        category: 'PROPS',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-end' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      title: 'Avatar',
      description: {
        component: '個人頭像組件的呈現及說明。',
      },
    },
  },
  args: {
    shape: 'circle',
    size: 'large',
    status: 'none',
    isShowInfo: true,
    src: 'https://storage.googleapis.com/ded-wds-bucket/monkey.png',
    alt: '無圖顯示',
    userName: 'Name',
    caption: 'Caption',
    className: '',
  },
} as Meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Avatar {...args} />;
  },
};

export const AvatarShape: Story = {
  name: '頭像形狀',
  argTypes: {
    shape: {
      table: {
        disable: true,
      },
    },
    alt: {
      table: {
        disable: true,
      },
    },
    src: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    src: 'https://storage.googleapis.com/ded-wds-bucket/fox.png',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Avatar {...args} shape="circle" />
<Avatar {...args} shape="square" />
        `,
      },
    },
  },
  render(args) {
    return (
      <>
        <Avatar {...args} shape="circle" />
        <Avatar {...args} shape="square" />
      </>
    );
  },
};

export const AvatarStatus: Story = {
  name: '頭像狀態',
  argTypes: {
    status: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    shape: 'circle',
    size: 'large',
    src: 'https://storage.googleapis.com/ded-wds-bucket/tigger.png',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Avatar {...args} status="online" />
<Avatar {...args} status="idle" />
<Avatar {...args} status="busy" />
<Avatar {...args} status="offline" />
        `,
      },
    },
  },
  render(args) {
    return (
      <>
        <Avatar {...args} />
        <Avatar {...args} status="online" />
        <Avatar {...args} status="idle" />
        <Avatar {...args} status="busy" />
        <Avatar {...args} status="offline" />
      </>
    );
  },
};
