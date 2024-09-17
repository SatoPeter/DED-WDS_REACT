import { Meta, StoryObj } from '@storybook/react';
import AvatarGroup from './avatar-group';

export default {
  title: 'Design System/Module/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  argTypes: {
    // 設定參數
    users: {
      description: '使用者清單',
      control: {
        type: 'object',
      },
    },
    limit: {
      description: '限制顯示數量',
      control: {
        type: 'number',
        min: 1,
      },
    },
    className: {
      description: '標題樣式',
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
        // 組件描述
        component: '組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Primary: Story = {
  name: '搜尋輸入框',
  args: {
    // 設定參數預設值
    users: [
      {
        userName: 'eason',
        // status: 'online',
        shape: 'circle',
        size: 'medium',
        // imageSrc: 'https://picsum.photos/320/240',
      },
      {
        userName: 'KevinYang',
        // status: 'busy',
        shape: 'circle',
        size: 'medium',
        // imageSrc: 'https://picsum.photos/320/240',
      },
      {
        userName: 'AmosLee',
        // status: 'idle',
        shape: 'circle',
        size: 'medium',
        imageSrc: 'https://picsum.photos/320/240',
      },
      {
        userName: 'JohnWu',
        // status: 'idle',
        shape: 'circle',
        size: 'medium',
        imageSrc: 'https://picsum.photos/320/340',
      },
    ],
    limit: 1,
    placement: 'right-top',
    className: '',
  },
  render(args) {
    return <AvatarGroup {...args} />;
  },
};
