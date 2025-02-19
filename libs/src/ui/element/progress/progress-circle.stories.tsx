import { Meta, StoryObj } from '@storybook/react';
import { CircleProgress } from './progress-circle';

export default {
  title: 'Component/Progress-Circle',
  component: CircleProgress,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: '進度指示標籤',
      table: {
        category: 'PROPS',
      },
    },
    percent: {
      description: '進度',
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
      table: {
        category: 'PROPS',
      },
    },
    size: {
      description: '直徑',
      control: {
        type: 'range',
        min: 24,
        max: 200,
        step: 1,
      },
      table: {
        category: 'PROPS',
      },
    },
    strokeWidth: {
      description: '線條寬度',
      control: {
        type: 'range',
        min: 1,
        max: 20,
        step: 1,
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
    label: 'Label',
    percent: 65,
    size: 100,
    strokeWidth: 10,
    className: '',
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ display: 'flex', gap: '32px' }}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    docs: {
      title: 'Circle Progress',
      description: {
        component: '圓形進度指示組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof CircleProgress>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <CircleProgress {...args} />;
  },
};

export const Label: Story = {
  name: '顯示標籤',
  argTypes: {
    label: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<CircleProgress {...args} label="Label" size={70} />
<CircleProgress {...args} label="Label" size={100} />
`,
      },
    },
  },
  render(args) {
    return (
      <>
        <CircleProgress {...args} label="Label" size={70} />
        <CircleProgress {...args} label="Label" size={100} />
      </>
    );
  },
};

// export const Theme: Story = {
//   name: '主題色彩',
//   argTypes: {
//     themeColor: {
//       table: {
//         disable: true,
//       },
//     },
//   },
//   args: {},
//   parameters: {
//     docs: {
//       source: {
//         code: `
// <CircleProgress {...args} themeColor="neutral" />
// <CircleProgress {...args} themeColor="primary" />
// <CircleProgress {...args} themeColor="secondary" />
// <CircleProgress {...args} themeColor="info" />
// <CircleProgress {...args} themeColor="success" />
// <CircleProgress {...args} themeColor="warning" />
// <CircleProgress {...args} themeColor="error" />
// `,
//       },
//     },
//   },
//   render(args) {
//     return (
//       <>
//         <CircleProgress {...args} themeColor="neutral" />
//         <CircleProgress {...args} themeColor="primary" />
//         <CircleProgress {...args} themeColor="secondary" />
//         <CircleProgress {...args} themeColor="info" />
//         <CircleProgress {...args} themeColor="success" />
//         <CircleProgress {...args} themeColor="warning" />
//         <CircleProgress {...args} themeColor="error" />
//       </>
//     );
//   },
// };
