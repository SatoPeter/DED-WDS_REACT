import { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '@src/ui';
import { AUOIcon } from '@src/assets';

const links = [
  { label: 'Solutions', href: '#solutions', order: 2 },
  { label: 'Products', href: '#products', order: 1 },
  { label: 'Technologies', href: '#technologies', order: 4 },
  { label: 'About', href: '#about', order: 3 },
];

export default {
  title: 'Component/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
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
  args: {
    links,
    logoSrc: 'https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg',
    onSearch: (query: string) => {
      console.log(query);
    },
  },
  parameters: {
    docs: {
      title: 'Navbar',
      description: {
        component: 'Navbar 組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  name: '預設項目',
  args: {
    className: '',
  },
  render(args) {
    return <Navbar {...args} />;
  },
};
