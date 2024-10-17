import { Meta, StoryObj } from '@storybook/react';
import AvatarGroup from './avatar-group';

export default {
  title: 'Design System/Avatar-Group',
  component: AvatarGroup,
  tags: ['autodocs'],
  argTypes: {
    users: {
      description: '使用者清單',
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
    },
  },
  parameters: {
    docs: {
      title: '個人頭像群組',
      description: {
        component: '個人頭像群組的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Primary: Story = {
  name: '主要項目',
  args: {
    users: [
      {
        userName: 'eason',
        shape: 'circle',
        size: 'medium',
      },
      {
        userName: 'KevinYang',
        shape: 'circle',
        size: 'medium',
      },
      {
        userName: 'AmosLee',
        shape: 'circle',
        size: 'medium',
        imgSrc: 'https://picsum.photos/320/240',
      },
      {
        userName: 'JohnWu',
        shape: 'circle',
        size: 'medium',
        imgSrc: 'https://picsum.photos/320/340',
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
