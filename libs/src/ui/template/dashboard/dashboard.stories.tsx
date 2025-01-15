import { Meta, StoryObj } from '@storybook/react';
import Dashboard from './dashboard';

export default {
  title: 'Template/Dashboard',
  component: Dashboard,
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
      title: 'Dashboard',
      description: {
        component: 'Dashboard 組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Dashboard>;

export const Default: Story = {
  name: '預設項目',
  args: {
    className: '',
  },
  render(args) {
    return <Dashboard {...args} />;
  },
};
