import { Meta, StoryContext, StoryObj } from '@storybook/react';
import Badge from './badge';
import { SvgNotification } from '@src/assets';

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
  },
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
  },
} as Meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return (
      <Badge {...args}>
        <SvgNotification width={26} height={26} />
      </Badge>
    );
  },
};

export const Type: Story = {
  name: '類型選擇',
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
      <div style={{ display: 'flex', gap: '32px' }}>
        <Badge {...args} isShowDot>
          <SvgNotification width={26} height={26} />
        </Badge>
        <Badge {...args}>
          <SvgNotification width={26} height={26} />
        </Badge>
      </div>
    );
  },
};

export const Max: Story = {
  name: '最大值設定',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return `
<Badge {...args} value={99}>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} value={100}>
  <SvgNotification width={26} height={26} />
</Badge>
`;
        },
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '32px' }}>
        <Badge {...args} value={99}>
          <SvgNotification width={26} height={26} />
        </Badge>
        <Badge {...args} value={100}>
          <SvgNotification width={26} height={26} />
        </Badge>
      </div>
    );
  },
};

export const Theme: Story = {
  name: '主題色彩',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return `
<Badge {...args} isShowDot themeColor="primary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="secondary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="neutral">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="info">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="success">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="warning">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="error">
  <SvgNotification width={26} height={26} />
</Badge>
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
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
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
      </div>
    );
  },
};
