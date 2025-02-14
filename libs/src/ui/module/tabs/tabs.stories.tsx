import { action } from '@storybook/addon-actions';
import { Meta, StoryContext, StoryObj } from '@storybook/react';
import { Tabs } from './tabs';
import { SvgArrowDown } from '@src/assets/icons';

const tabs = [
  { title: 'Tab 1', content: 'Content 1' },
  { title: 'Tab 2', content: 'Content 2' },
  { title: 'Tab 3', content: 'Content 3' },
];

export default {
  title: 'Component/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'neutral',
          'info',
          'success',
          'warning',
          'error',
        ],
      },
      table: {
        category: 'PROPS',
      },
    },
    dataSource: {
      description: '資料來源',
      table: {
        category: 'PROPS',
      },
    },
    activeIndex: {
      description: '活動頁籤索引',
      control: {
        type: 'number',
        min: 0,
        max: 2,
      },
      table: {
        category: 'PROPS',
      },
    },
    type: {
      description: '頁籤樣式',
      control: {
        type: 'select',
        options: ['basic', 'outline', 'button'],
      },
      table: {
        category: 'PROPS',
      },
    },
    prefix: {
      description: '前綴元素',
      options: ['none', 'SvgArrowDown'],
      mapping: {
        none: null,
        SvgArrowDown: <SvgArrowDown />,
      },
      table: {
        category: 'PROPS',
      },
    },
    isDisabled: {
      description: '是否禁用',
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
    onClick: {
      description: '點擊事件',
      action: 'clicked',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    themeColor: 'primary',
    dataSource: tabs,
    activeIndex: 0,
    type: 'basic',
    prefix: <SvgArrowDown />,
    isDisabled: false,
    className: '',
    onClick: action('onClick'),
  },
  decorators: [
    (Story: any) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      title: 'Tabs',
      description: {
        component: '頁籤組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Tabs {...args} />;
  },
};

export const Type: Story = {
  name: '頁籤類型',
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
          return `
<Tabs {...args} type="basic" />
<Tabs {...args} type="outline" />
<Tabs {...args} type="button" />
`;
        },
      },
    },
  },
  render(args) {
    return (
      <>
        <Tabs {...args} type="basic" />
        <Tabs {...args} type="outline" />
        <Tabs {...args} type="button" />
      </>
    );
  },
};

export const PrimaryWithButton: Story = {
  name: '主題色彩',
  args: {
    type: 'button',
    activeIndex: 2,
  },
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return `
<Tabs {...args} themeColor="primary" />
<Tabs {...args} themeColor="secondary" />
<Tabs {...args} themeColor="neutral" />
<Tabs {...args} themeColor="info" />
<Tabs {...args} themeColor="success" />
<Tabs {...args} themeColor="warning" />
<Tabs {...args} themeColor="error" />
`;
        },
      },
    },
  },
  render(args) {
    return (
      <>
        <Tabs {...args} themeColor="primary" />
        <Tabs {...args} themeColor="secondary" />
        <Tabs {...args} themeColor="neutral" />
        <Tabs {...args} themeColor="info" />
        <Tabs {...args} themeColor="success" />
        <Tabs {...args} themeColor="warning" />
        <Tabs {...args} themeColor="error" />
      </>
    );
  },
};
