import { Meta, StoryObj } from '@storybook/react';
import { Divider } from './divider';

export default {
  title: 'Component/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    width: {
      description: '線條寬度',
      control: {
        type: 'select',
      },
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      table: {
        category: 'PROPS',
      },
    },
    type: {
      description: '線條樣式',
      control: {
        type: 'select',
      },
      options: ['solid', 'dashed', 'dotted'],
      table: {
        category: 'PROPS',
      },
    },
    direction: {
      description: '線條方向',
      control: {
        type: 'select',
      },
      options: ['horizontal', 'vertical'],
      table: {
        category: 'PROPS',
      },
    },
    align: {
      description: '文字位置',
      control: {
        type: 'select',
      },
      options: ['start', 'center', 'end'],
      table: {
        category: 'PROPS',
      },
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
      table: {
        category: 'PROPS',
      },
    },
    children: {
      description: '分隔線內容',
      table: {
        category: 'SLOTS',
      },
    },
  },
  args: {
    width: 'small',
    type: 'solid',
    direction: 'horizontal',
    align: 'center',
    className: '',
    children: 'Divider',
  },
  parameters: {
    docs: {
      title: '分隔線',
      description: {
        component: '分隔線組件的呈現及說明。',
      },
    },
  },
} as Meta;
/* 設定組件類型 */
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Divider {...args} />;
  },
};

export const Align: Story = {
  name: '文字對齊',
  args: {
    width: 'small',
    type: 'solid',
    direction: 'horizontal',
    className: '',
  },
  render(args) {
    return (
      <div>
        <Divider {...args} align="start">
          Start
        </Divider>
        <Divider {...args} align="center">
          Center
        </Divider>
        <Divider {...args} align="end">
          End
        </Divider>
      </div>
    );
  },
};

export const Type: Story = {
  name: '線條粗細',
  args: {
    width: 'small',
    type: 'solid',
    direction: 'horizontal',
    align: 'center',
    className: '',
  },
  render(args) {
    return (
      <div>
        <Divider {...args} width="xsmall">
          xsmall(1px)
        </Divider>
        <Divider {...args} width="small">
          small(2px)
        </Divider>
        <Divider {...args} width="medium">
          medium(4px)
        </Divider>
        <Divider {...args} width="large">
          large(6px)
        </Divider>
        <Divider {...args} width="xlarge">
          xlarge(8px)
        </Divider>
      </div>
    );
  },
};

export const Width: Story = {
  name: '線條類型',
  args: {
    width: 'small',
    type: 'solid',
    direction: 'horizontal',
    align: 'center',
    className: '',
  },
  render(args) {
    return (
      <div>
        <Divider {...args} type="solid">
          Solid
        </Divider>
        <Divider {...args} type="dotted">
          Dotted
        </Divider>
        <Divider {...args} type="dashed">
          Dashed
        </Divider>
      </div>
    );
  },
};

export const Direction: Story = {
  name: '線條方向',
  args: {
    width: 'small',
    type: 'solid',
    direction: 'vertical',
    className: '',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', height: '100px' }}>
        <Divider {...args} align="start">
          Start
        </Divider>
        <Divider {...args} align="center">
          Center
        </Divider>
        <Divider {...args} align="end">
          End
        </Divider>
      </div>
    );
  },
};
