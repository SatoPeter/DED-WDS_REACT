import { action } from '@storybook/addon-actions';
import { Meta, StoryContext, StoryObj } from '@storybook/react';
import { Tag } from './tag';
import {
  SvgAccount,
  SvgSearch,
  SvgVisibility,
  SvgVisibilityOff,
} from '@src/assets/icons';

export default {
  title: 'Component/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
      options: [
        'primary',
        'secondary',
        'neutral',
        'info',
        'success',
        'warning',
        'error',
      ],
      control: {
        type: 'select',
      },
      table: {
        category: 'PROPS',
      },
    },
    variant: {
      description: '外觀樣式',
      options: ['filled', 'ghost'],
      control: {
        type: 'select',
      },
      table: {
        category: 'PROPS',
      },
    },
    label: {
      description: '標籤文字',
      table: {
        category: 'PROPS',
      },
    },
    href: {
      description: '超連結',
      table: {
        category: 'PROPS',
      },
    },
    prefix: {
      description: '圖示',
      options: ['None', 'Account', 'Search', 'Visibility', 'VisibilityOff'],
      mapping: {
        None: null,
        Account: <SvgAccount />,
        Search: <SvgSearch />,
        Visibility: <SvgVisibility />,
        VisibilityOff: <SvgVisibilityOff />,
      },
      table: {
        category: 'PROPS',
      },
    },
    closable: {
      description: '摸到時顯示關閉圖示',
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
    onClose: {
      description: '關閉事件',
      action: 'closed',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    themeColor: 'primary',
    variant: 'filled',
    label: 'Tag',
    href: '',
    prefix: 'None',
    closable: true,
    isDisabled: false,
    className: '',
    onClose: action('closed'),
  },
  parameters: {
    docs: {
      title: 'Tag',
      description: {
        component: '標籤組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Tag {...args} />;
  },
};

export const Additional: Story = {
  name: '附加元素',
  argTypes: {
    prefix: {
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
<Tag {...args} prefix={<SvgAccount></SvgAccount>} />
          `;
        },
      },
    },
  },
  render(args) {
    return <Tag {...args} prefix={<SvgAccount />} />;
  },
};

export const Variant: Story = {
  name: '外觀樣式',
  argTypes: {
    variant: {
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
<Tag {...args} variant="filled" />
<Tag {...args} variant="ghost" />
`;
        },
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Tag {...args} variant="filled" themeColor="primary" label="Primary" />
        <Tag {...args} variant="ghost" themeColor="primary" label="Primary" />
      </div>
    );
  },
};

export const ThemeColor: Story = {
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
<Tag {...args} themeColor="primary" />
<Tag {...args} themeColor="secondary" />
<Tag {...args} themeColor="neutral" />
<Tag {...args} themeColor="info" />
<Tag {...args} themeColor="success" />
<Tag {...args} themeColor="warning" />
<Tag {...args} themeColor="error" />
`;
        },
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Tag {...args} themeColor="primary" label="Primary" />
        <Tag {...args} themeColor="secondary" label="Secondary" />
        <Tag {...args} themeColor="neutral" label="Neutral" />
        <Tag {...args} themeColor="info" label="Info" />
        <Tag {...args} themeColor="success" label="Success" />
        <Tag {...args} themeColor="warning" label="Warning" />
        <Tag {...args} themeColor="error" label="Error" />
      </div>
    );
  },
};
