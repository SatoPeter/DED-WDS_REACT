import { Meta, StoryObj } from '@storybook/react';
import { Layout } from './layout';

export default {
  title: 'Component/Layout',
  /* 設定對應的組件名稱: Component */
  component: Layout,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
      table: {
        category: 'PROPS',
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

export const Default: Story = {
  name: '預設項目',
  args: {
    className: '',
  },
  render(args) {
    return (
      <Layout {...args}>
        <Layout.Content>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0958d9',
              color: '#fff',
            }}
          >
            content
          </div>
        </Layout.Content>
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
        <Layout.Header>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4096ff',
              color: '#fff',
            }}
          >
            header
          </div>
        </Layout.Header>
        <Layout.Content>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0958d9',
              color: '#fff',
            }}
          >
            content
          </div>
        </Layout.Content>
        <Layout.Footer>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#4096ff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            }}
          >
            footer
          </div>
        </Layout.Footer>
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
        <Layout.Header>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4096ff',
              color: '#fff',
            }}
          >
            header
          </div>
        </Layout.Header>
        <Layout>
          <Layout.Side>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1677ff',
                color: '#fff',
              }}
            >
              side
            </div>
          </Layout.Side>
          <Layout.Content>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0958d9',
                color: '#fff',
              }}
            >
              content
            </div>
          </Layout.Content>
        </Layout>
        <Layout.Footer>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#4096ff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            }}
          >
            footer
          </div>
        </Layout.Footer>
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
        <Layout.Header>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4096ff',
              color: '#fff',
            }}
          >
            header
          </div>
        </Layout.Header>
        <Layout>
          <Layout.Content>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0958d9',
                color: '#fff',
              }}
            >
              content
            </div>
          </Layout.Content>
          <Layout.Side>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1677ff',
                color: '#fff',
              }}
            >
              side
            </div>
          </Layout.Side>
        </Layout>
        <Layout.Footer>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4096ff',
              color: '#fff',
            }}
          >
            footer
          </div>
        </Layout.Footer>
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
        <Layout.Side>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#1677ff',
              color: '#fff',
            }}
          >
            side
          </div>
        </Layout.Side>
        <Layout>
          <Layout.Header>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#4096ff',
                color: '#fff',
              }}
            >
              header
            </div>
          </Layout.Header>
          <Layout.Content>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0958d9',
                color: '#fff',
              }}
            >
              content
            </div>
          </Layout.Content>
          <Layout.Footer>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#4096ff',
                color: '#fff',
              }}
            >
              footer
            </div>
          </Layout.Footer>
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
        <Layout.Header>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4096ff',
              color: '#fff',
            }}
          >
            header
          </div>
        </Layout.Header>
        <Layout>
          <Layout.Side>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1677ff',
                color: '#fff',
              }}
            >
              side
            </div>
          </Layout.Side>
          <Layout>
            <Layout.Content>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#0958d9',
                  color: '#fff',
                }}
              >
                content
              </div>
            </Layout.Content>
            <Layout.Footer>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#4096ff',
                  color: '#fff',
                }}
              >
                footer
              </div>
            </Layout.Footer>
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
        <Layout.Header>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4096ff',
              color: '#fff',
            }}
          >
            header
          </div>
        </Layout.Header>
        <Layout>
          <Layout.Side>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1677ff',
                color: '#fff',
              }}
            >
              side
            </div>
          </Layout.Side>
          <Layout>
            <Layout.Content>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#0958d9',
                  color: '#fff',
                }}
              >
                content
              </div>
            </Layout.Content>
            <Layout.Footer>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#4096ff',
                  color: '#fff',
                }}
              >
                footer
              </div>
            </Layout.Footer>
          </Layout>
          <Layout.Side>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1677ff',
                color: '#fff',
              }}
            >
              side
            </div>
          </Layout.Side>
        </Layout>
      </Layout>
    );
  },
};
