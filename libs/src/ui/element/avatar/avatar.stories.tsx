import { Meta, StoryObj } from '@storybook/react';
import Avatar from './avatar';

export default {
  title: 'Design System/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: '頭像尺寸',
      control: {
        type: 'select',
        options: ['xsmall', 'small', 'medium', 'large'],
      },
    },
    shape: {
      description: '頭像形狀',
      control: {
        type: 'select',
        options: ['circle', 'square'],
      },
    },
    userName: {
      description: '登入者名稱',
    },
    status: {
      description: '登入者狀態',
      control: {
        type: 'select',
        options: ['none', 'online', 'idle', 'busy', 'offline'],
      },
    },
    imgSrc: {
      description: '圖片連結',
    },
    alt: {
      description: '圖片描述',
    },
    className: {
      description: '客製化樣式',
    },
  },
  parameters: {
    docs: {
      title: 'Avatar',
      description: {
        component: '個人頭像的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  name: '預設項目',
  args: {
    size: 'medium',
    shape: 'circle',
    userName: 'default',
    status: 'none',
    imgSrc: '',
    alt: '無圖顯示',
  },
  render(args) {
    return <Avatar {...args} />;
  },
};

export const AvatarShape: Story = {
  name: '頭像形狀',
  args: {
    userName: 'Kevin',
    imgSrc: 'https://picsum.photos/320/240',
    className: '',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-end' }}>
        <Avatar {...args} size="large" shape="circle" status="online" />
        <Avatar {...args} size="large" shape="square" status="idle" />
      </div>
    );
  },
};

export const AvatarStatus: Story = {
  name: '頭像狀態',
  args: {
    userName: 'Kevin',
    imgSrc: 'https://picsum.photos/320/240',
    className: '',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
        <Avatar {...args} size="large" shape="circle" status="online" />
        <Avatar {...args} size="large" shape="circle" status="idle" />
        <Avatar {...args} size="large" shape="circle" status="busy" />
        <Avatar {...args} size="large" shape="circle" status="offline" />
      </div>
    );
  },
};
