import { action } from '@storybook/addon-actions';
import { Meta, StoryContext, StoryObj } from '@storybook/react';
import { Tag } from './tag';
import {
  AccountIcon,
  SearchIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from '@src/assets';

export default {
  title: 'Component/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
      options: [
        'neutral',
        'primary',
        'secondary',
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
    variable: {
      description: '變數',
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
        Account: <AccountIcon />,
        Search: <SearchIcon />,
        Visibility: <VisibilityIcon />,
        VisibilityOff: <VisibilityOffIcon />,
      },
      table: {
        category: 'PROPS',
      },
    },
    closable: {
      description: '是否可關閉',
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
    themeColor: 'neutral',
    variable: 'filled',
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
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return `
<Tag {...args} prefix={<AccountIcon></AccountIcon>} />
          `;
        },
      },
    },
  },
  render(args) {
    return <Tag {...args} prefix={<AccountIcon></AccountIcon>} />;
  },
};

export const Variable: Story = {
  name: '外觀樣式',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return `
<Tag {...args} variable="filled" />
<Tag {...args} variable="ghost" />
`;
        },
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Tag {...args} variable="filled" themeColor="primary" label="Primary" />
        <Tag {...args} variable="ghost" themeColor="primary" label="Primary" />
      </div>
    );
  },
};

export const ThemeColor: Story = {
  name: '主題色彩',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return `
<Tag {...args} themeColor="neutral" />
<Tag {...args} themeColor="primary" />
<Tag {...args} themeColor="secondary" />
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
        <Tag {...args} themeColor="neutral" label="Neutral" />
        <Tag {...args} themeColor="primary" label="Primary" />
        <Tag {...args} themeColor="secondary" label="Secondary" />
        <Tag {...args} themeColor="info" label="Info" />
        <Tag {...args} themeColor="success" label="Success" />
        <Tag {...args} themeColor="warning" label="Warning" />
        <Tag {...args} themeColor="error" label="Error" />
      </div>
    );
  },
};
