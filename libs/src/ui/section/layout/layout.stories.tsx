import { Meta, StoryObj } from '@storybook/react';
import { Layout } from './layout';
import { Header } from './header';
import { Content } from './content';
import { Footer } from './footer';
import { Side } from './side';

export default {
  title: 'Component/Layout',
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
      title: 'Layout',
      description: {
        component: '佈局組件的呈現及說明。',
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
        <Content>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0958d9',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            content
          </div>
        </Content>
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
        <Header>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4096ff',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            header
          </div>
        </Header>
        <Content>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0958d9',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            content
          </div>
        </Content>
        <Footer>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#4096ff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            footer
          </div>
        </Footer>
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
        <Header>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4096ff',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            header
          </div>
        </Header>
        <Layout>
          <Side>
            <div
              style={{
                minWidth: '80px',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1677ff',
                color: '#fff',
                fontSize: '24px',
              }}
            >
              side
            </div>
          </Side>
          <Content>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0958d9',
                color: '#fff',
                fontSize: '24px',
              }}
            >
              content
            </div>
          </Content>
        </Layout>
        <Footer>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#4096ff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            footer
          </div>
        </Footer>
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
        <Header>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4096ff',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            header
          </div>
        </Header>
        <Layout>
          <Content>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0958d9',
                color: '#fff',
                fontSize: '24px',
              }}
            >
              content
            </div>
          </Content>
          <Side>
            <div
              style={{
                minWidth: '80px',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1677ff',
                color: '#fff',
                fontSize: '24px',
              }}
            >
              side
            </div>
          </Side>
        </Layout>
        <Footer>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4096ff',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            footer
          </div>
        </Footer>
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
        <Side>
          <div
            style={{
              minWidth: '80px',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#1677ff',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            side
          </div>
        </Side>
        <Layout>
          <Header>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#4096ff',
                color: '#fff',
                fontSize: '24px',
              }}
            >
              header
            </div>
          </Header>
          <Content>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0958d9',
                color: '#fff',
                fontSize: '24px',
              }}
            >
              content
            </div>
          </Content>
          <Footer>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#4096ff',
                color: '#fff',
                fontSize: '24px',
              }}
            >
              footer
            </div>
          </Footer>
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
        <Header>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4096ff',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            header
          </div>
        </Header>
        <Layout>
          <Side>
            <div
              style={{
                minWidth: '80px',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1677ff',
                color: '#fff',
                fontSize: '24px',
              }}
            >
              side
            </div>
          </Side>
          <Layout>
            <Content>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#0958d9',
                  color: '#fff',
                  fontSize: '24px',
                }}
              >
                content
              </div>
            </Content>
            <Footer>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#4096ff',
                  color: '#fff',
                  fontSize: '24px',
                }}
              >
                footer
              </div>
            </Footer>
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
        <Header>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4096ff',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            header
          </div>
        </Header>
        <Layout>
          <Side>
            <div
              style={{
                minWidth: '80px',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1677ff',
                color: '#fff',
                fontSize: '24px',
              }}
            >
              side
            </div>
          </Side>
          <Layout>
            <Content>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#0958d9',
                  color: '#fff',
                  fontSize: '24px',
                }}
              >
                content
              </div>
            </Content>
            <Footer>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#4096ff',
                  color: '#fff',
                  fontSize: '24px',
                }}
              >
                footer
              </div>
            </Footer>
          </Layout>
          <Side>
            <div
              style={{
                minWidth: '80px',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1677ff',
                color: '#fff',
                fontSize: '24px',
              }}
            >
              side
            </div>
          </Side>
        </Layout>
      </Layout>
    );
  },
};

export const A1: Story = {
  name: '文章導覽式佈局',
  args: {
    className: '',
  },
  render(args) {
    return (
      <Layout {...args}>
        <Side>
          <div
            style={{
              minWidth: '80px',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#1677ff',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            side
          </div>
        </Side>
        <Content>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0958d9',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            content
          </div>
        </Content>
      </Layout>
    );
  },
};
