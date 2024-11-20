import { Meta, StoryObj } from '@storybook/react';
import { Container } from './container';
import { Row } from './row';
import { Column } from './column';
import { Flex } from './flex';

export default {
  title: 'Component/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      title: '搜尋',
      description: {
        component: 'Flexbox 的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  name: 'Flexbox',
  args: {
    className: '',
  },
  render(args) {
    return <Flex {...args} />;
  },
};
