import { Meta, StoryObj } from '@storybook/react';
import Avatar from './avatar';

export default {
  title: 'Design System/Element/Avatar',
  // 設定對應的組件名稱: Component,
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    // 設定參數
    size: {
      description: '輸入框尺寸',
      control: {
        type: 'select',
        options: ['xsmall', 'small', 'medium', 'large'],
      },
    },
    shape: {
      description: '形狀',
      control: {
        type: 'radio',
        options: ['circle', 'square'],
      },
    },
    status: {
      description: '狀態',
      control: {
        type: 'select',
        options: ['online', 'idle', 'busy', 'offline'],
      },
    },
    imageSrc: {
      description: '圖片連結',
      control: {
        type: 'text',
      },
    },
    className: {
      description: '標題樣式',
      control: {
        type: 'text',
      },
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
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  name: '線上頭像',
  args: {
    shape: 'circle',
    size: 'medium',
    userName: 'Kevin',
    status: 'online',
    imageSrc: 'https://picsum.photos/320/240',
    className: '',
  },
  render(args) {
    return <Avatar {...args} />;
  },
};

// export const Multiple: Story = {
//   name: '忙碌頭像',
//   args: {
//     // 設定參數預設值
//     userName: 'Kevin',
//     imageSrc: 'https://picsum.photos/320/240',
//     className: '',
//   },
//   render(args) {
//     return (
//       <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
//         <Avatar {...args} size="large" shape="circle" status="online" />
//         <Avatar {...args} size="large" shape="square" status="idle" />
//         <Avatar {...args} size="medium" shape="circle" status="busy" />
//         <Avatar {...args} size="medium" shape="square" status="offline" />
//       </div>
//     );
//   },
// };
