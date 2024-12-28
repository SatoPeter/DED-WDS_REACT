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
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="square" status="idle" />
        `,
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-end' }}>
        <Avatar
          {...args}
          src="https://storage.googleapis.com/ded-wds-bucket/fox.png"
          size="large"
          shape="circle"
          status="online"
        />
        <Avatar
          {...args}
          src="https://storage.googleapis.com/ded-wds-bucket/tigger.png"
          size="large"
          shape="square"
          status="idle"
        />
      </div>
    );
  },
};

export const AvatarStatus: Story = {
  name: '頭像狀態',
  args: {
    shape: 'circle',
    size: 'large',
    src: 'https://picsum.photos/320/240',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="circle" status="idle" />
<Avatar {...args} size="large" shape="circle" status="busy" />
<Avatar {...args} size="large" shape="circle" status="offline" />
        `,
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-end' }}>
        <Avatar
          {...args}
          src="https://storage.googleapis.com/ded-wds-bucket/fox.png"
          shape="circle"
        />
        <Avatar
          {...args}
          src="https://storage.googleapis.com/ded-wds-bucket/lion.png"
          shape="circle"
          status="online"
        />
        <Avatar
          {...args}
          src="https://storage.googleapis.com/ded-wds-bucket/koala.png"
          shape="circle"
          status="idle"
        />
        <Avatar
          {...args}
          src="https://storage.googleapis.com/ded-wds-bucket/dog.png"
          shape="circle"
          status="busy"
        />
        <Avatar
          {...args}
          src="https://storage.googleapis.com/ded-wds-bucket/pig.png"
          shape="circle"
          status="offline"
        />
      </div>
    );
  },
};
