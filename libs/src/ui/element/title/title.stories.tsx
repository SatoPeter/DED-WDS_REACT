import { Meta, StoryObj } from '@storybook/react';
import { Title } from './title';

export default {
  title: 'Component/Typgraphy/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    level: {
      description: '標題等級',
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5, 6],
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
    children: {
      description: '標題內容',
      table: {
        category: 'SLOTS',
      },
    },
  },
  parameters: {
    docs: {
      title: 'Title',
      description: {
        component: '標題組件的呈現及說明。',
      },
    },
  },
  args: {
    themeColor: 'primary',
    level: 1,
    className: '',
    children: 'Title',
  },
} as Meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Title {...args}>{args.children}</Title>;
  },
};

export const Size: Story = {
  name: '標題大小',
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<Title level={1}>level 1: {args.children}</Title>
<Title level={2}>level 2: {args.children}</Title>
<Title level={3}>level 3: {args.children}</Title>
<Title level={4}>level 4: {args.children}</Title>
<Title level={5}>level 5: {args.children}</Title>
<Title level={6}>level 6: {args.children}</Title>
<Title level={0}>level 0: {args.children}</Title>
`,
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Title level={1}>level 1: {args.children}</Title>
        <Title level={2}>level 2: {args.children}</Title>
        <Title level={3}>level 3: {args.children}</Title>
        <Title level={4}>level 4: {args.children}</Title>
        <Title level={5}>level 5: {args.children}</Title>
        <Title level={6}>level 6: {args.children}</Title>
        <Title level={0}>level 0: {args.children}</Title>
      </div>
    );
  },
};

export const Theme: Story = {
  name: '主題色彩',
  args: {
    level: 3,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Title level={args.level} themeColor="primary">{args.children}</Title>
<Title level={args.level} themeColor="secondary">{args.children}</Title>
<Title level={args.level} themeColor="neutral">{args.children}</Title>
<Title level={args.level} themeColor="info">{args.children}</Title>
<Title level={args.level} themeColor="success">{args.children}</Title>
<Title level={args.level} themeColor="warning">{args.children}</Title>
<Title level={args.level} themeColor="error">{args.children}</Title>
`,
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Title level={args.level} themeColor="primary">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="secondary">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="neutral">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="info">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="success">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="warning">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="error">
          {args.children}
        </Title>
      </div>
    );
  },
};
