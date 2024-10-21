import { Meta, StoryObj } from '@storybook/react';
import Layout from './layout';
import { Button } from '@src/ui/element/button';

export default {
  title: 'Design System/Layout',
  /* 設定對應的組件名稱: Component */
  component: Layout,
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
        component: '組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Layout>;

export const Primary: Story = {
  name: '預設項目',
  args: {
    className: '',
  },
  render(args) {
    return (
      <Layout {...args}>
        <Layout.Content>content</Layout.Content>
      </Layout>
    );
  },
};

export const Third: Story = {
  name: '三段式佈局',
  args: {
    className: '',
  },
  render(args) {
    return (
      <Layout {...args}>
        <Layout.Header>header</Layout.Header>
        <Layout.Content>content</Layout.Content>
        <Layout.Footer>footer</Layout.Footer>
      </Layout>
    );
  },
};

export const I1: Story = {
  name: '左側欄三段式佈局',
  args: {
    className: '',
  },
  render(args) {
    return (
      <Layout {...args}>
        <Layout.Header>header</Layout.Header>
        <Layout>
          <Layout.Side>side</Layout.Side>
          <Layout.Content>content</Layout.Content>
        </Layout>
        <Layout.Footer>footer</Layout.Footer>
      </Layout>
    );
  },
};

export const I2: Story = {
  name: '右側欄三段式佈局',
  args: {
    className: '',
  },
  render(args) {
    return (
      <Layout {...args}>
        <Layout.Header>header</Layout.Header>
        <Layout>
          <Layout.Content>content</Layout.Content>
          <Layout.Side>side</Layout.Side>
        </Layout>
        <Layout.Footer>footer</Layout.Footer>
      </Layout>
    );
  },
};

export const L: Story = {
  name: '左側欄固定佈局',
  args: {
    className: '',
  },
  render(args) {
    return (
      <Layout {...args}>
        <Layout.Side>side</Layout.Side>
        <Layout>
          <Layout.Header>header</Layout.Header>
          <Layout.Content>content</Layout.Content>
          <Layout.Footer>footer</Layout.Footer>
        </Layout>
      </Layout>
    );
  },
};

export const L2: Story = {
  name: '標準左側佈局',
  args: {
    className: '',
  },
  render(args) {
    return (
      <Layout {...args}>
        <Layout.Header>header</Layout.Header>
        <Layout>
          <Layout.Side>side</Layout.Side>
          <Layout>
            <Layout.Content>content</Layout.Content>
            <Layout.Footer>footer</Layout.Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  },
};

export const L3: Story = {
  name: '官網佈局',
  args: {
    className: '',
  },
  render(args) {
    return (
      <Layout {...args}>
        <Layout.Header>header</Layout.Header>
        <Layout>
          <Layout.Side>side</Layout.Side>
          <Layout>
            <Layout.Content>content</Layout.Content>
            <Layout.Footer>footer</Layout.Footer>
          </Layout>
          <Layout.Side>side</Layout.Side>
        </Layout>
      </Layout>
    );
  },
};
