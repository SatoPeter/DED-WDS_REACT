import { Meta, StoryContext, StoryObj } from '@storybook/react';
import Badge from './badge';
import { SvgNotification, SvgAccount } from '@src/assets/icons';

export default {
  title: 'Component/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
      control: {
        type: 'select',
        options: [
          'none',
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
    isShowDot: {
      description: '是否顯示圓點',
      table: {
        category: 'PROPS',
      },
    },
    value: {
      description: '徽章數值',
      table: {
        category: 'PROPS',
      },
    },
    limit: {
      description: '限制數值',
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
      description: '子元件',
      options: ['Account', 'Notification'],
      mapping: {
        Account: <SvgAccount width={26} height={26} />,
        Notification: <SvgNotification width={26} height={26} />,
      },
      table: {
        category: 'SLOTS',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      title: '徽章',
      description: {
        component: '徽章組件的呈現及說明。',
      },
    },
  },
  args: {
    themeColor: 'error',
    isShowDot: false,
    value: 100,
    limit: 99,
    className: '',
    children: <SvgNotification width={26} height={26} />,
  },
} as Meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Badge {...args}>{args.children}</Badge>;
  },
};

export const Type: Story = {
  name: '類型選擇',
  argTypes: {
    isShowDot: {
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
<Badge {...args} isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args}>
  <SvgNotification width={26} height={26} />
</Badge>
`;
        },
      },
    },
  },
  render(args) {
    return (
      <>
        <Badge {...args} isShowDot>
          {args.children}
        </Badge>
        <Badge {...args}>{args.children}</Badge>
      </>
    );
  },
};

export const Max: Story = {
  name: '最大值設定',
  argTypes: {
    limit: {
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
<Badge {...args} limit={50}>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} limit={99}>
  <SvgNotification width={26} height={26} />
</Badge>
`;
        },
      },
    },
  },
  render(args) {
    return (
      <>
        <Badge {...args} limit={50}>
          {args.children}
        </Badge>
        <Badge {...args} limit={99}>
          {args.children}
        </Badge>
      </>
    );
  },
};

export const Theme: Story = {
  name: '主題色彩',
  argTypes: {
    themeColor: {
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
<Badge {...args} themeColor="primary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="secondary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="neutral">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="info">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="success">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="warning">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="error">
  <SvgNotification width={26} height={26} />
</Badge>
`;
        },
      },
    },
  },
  render(args) {
    return (
      <>
        <Badge {...args} themeColor="primary">
          {args.children}
        </Badge>
        <Badge {...args} themeColor="secondary">
          {args.children}
        </Badge>
        <Badge {...args} themeColor="neutral">
          {args.children}
        </Badge>
        <Badge {...args} themeColor="info">
          {args.children}
        </Badge>
        <Badge {...args} themeColor="success">
          {args.children}
        </Badge>
        <Badge {...args} themeColor="warning">
          {args.children}
        </Badge>
        <Badge {...args} themeColor="error">
          {args.children}
        </Badge>
      </>
    );
  },
};
