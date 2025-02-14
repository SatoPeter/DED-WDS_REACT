import { Meta, StoryContext, StoryObj } from '@storybook/react';
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
      options: ['1px', '2px', '3px', '4px', '5px'],
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
    width: '1px',
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
  argTypes: {
    direction: {
      table: {
        disable: true,
      },
    },
    align: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const { args } = storyContext;
          return `
<Divider {...args} align="start">Start</Divider>
<Divider {...args} align="center">Center</Divider>
<Divider {...args} align="end">End</Divider>
`;
        },
      },
    },
  },
  render(args) {
    return (
      <>
        <Divider {...args} align="start">
          Start
        </Divider>
        <Divider {...args} align="center">
          Center
        </Divider>
        <Divider {...args} align="end">
          End
        </Divider>
      </>
    );
  },
};

export const Type: Story = {
  name: '線條粗細',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const { args } = storyContext;
          return `
<Divider {...args} width="1px">1px</Divider>
<Divider {...args} width="2px">2px</Divider>
<Divider {...args} width="3px">3px</Divider>
<Divider {...args} width="4px">4px</Divider>
<Divider {...args} width="5px">5px</Divider>
`;
        },
      },
    },
  },
  render(args) {
    return (
      <>
        <Divider {...args} width="1px">
          1px
        </Divider>
        <Divider {...args} width="2px">
          2px
        </Divider>
        <Divider {...args} width="3px">
          3px
        </Divider>
        <Divider {...args} width="4px">
          4px
        </Divider>
        <Divider {...args} width="5px">
          5px
        </Divider>
      </>
    );
  },
};

export const Width: Story = {
  name: '線條類型',
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const { args } = storyContext;
          return `
<Divider {...args} type="solid">Solid</Divider>
<Divider {...args} type="dotted">Dotted</Divider>
<Divider {...args} type="dashed">Dashed</Divider>
`;
        },
      },
    },
  },
  render(args) {
    return (
      <>
        <Divider {...args} type="solid">
          Solid
        </Divider>
        <Divider {...args} type="dotted">
          Dotted
        </Divider>
        <Divider {...args} type="dashed">
          Dashed
        </Divider>
      </>
    );
  },
};

export const Vertical: Story = {
  name: '線條方向-垂直',
  argTypes: {
    direction: {
      table: {
        disable: true,
      },
    },
    align: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', height: '100px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const { args } = storyContext;
          return `
<Divider {...args} align="start" direction="vertical">Start</Divider>
<Divider {...args} align="center" direction="vertical">Center</Divider>
<Divider {...args} align="end" direction="vertical">End</Divider>
`;
        },
      },
    },
  },
  render(args) {
    return (
      <>
        <Divider {...args} align="start" direction="vertical">
          Start
        </Divider>
        <Divider {...args} align="center" direction="vertical">
          Center
        </Divider>
        <Divider {...args} align="end" direction="vertical">
          End
        </Divider>
      </>
    );
  },
};

export const Horizontal: Story = {
  name: '線條方向-水平',
  argTypes: {
    direction: {
      table: {
        disable: true,
      },
    },
    align: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const { args } = storyContext;
          return `
<Divider {...args} align="start" direction="horizontal">Start</Divider>
<Divider {...args} align="center" direction="horizontal">Center</Divider>
<Divider {...args} align="end" direction="horizontal">End</Divider>
`;
        },
      },
    },
  },
  render(args) {
    return (
      <>
        <Divider {...args} align="start" direction="horizontal">
          Start
        </Divider>
        <Divider {...args} align="center" direction="horizontal">
          Center
        </Divider>
        <Divider {...args} align="end" direction="horizontal">
          End
        </Divider>
      </>
    );
  },
};
