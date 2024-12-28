import { Meta, StoryObj } from '@storybook/react';
import AvatarGroup from './avatar-group';
import { AvatarProps } from '@src/ui/element/avatar';

const users: AvatarProps[] = [
  {
    userName: 'eason',
    caption: 'Eason',
  },
  {
    userName: 'KevinYang',
    caption: 'Kevin',
  },
  {
    userName: 'AmosLee',
    caption: 'Amos',
    src: 'https://picsum.photos/320/240',
  },
  {
    userName: 'JohnWu',
    caption: 'John',
    src: 'https://picsum.photos/320/340',
  },
  {
    userName: 'Peter',
    caption: 'Peter',
    src: 'https://picsum.photos/320/340',
  },
];

export default {
  title: 'Component/Avatar-Group',
  component: AvatarGroup,
  tags: ['autodocs'],
  argTypes: {
    dataSource: {
      description: '資料來源',
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
    limit: {
      description: '展開數量上限',
      control: {
        type: 'number',
        min: 1,
      },
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
  args: {
    dataSource: users,
    size: 'large',
    limit: 2,
    className: '',
  },
  parameters: {
    docs: {
      title: 'Avatar Group',
      description: {
        component: '個人頭像群組的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <AvatarGroup {...args} />;
  },
};
