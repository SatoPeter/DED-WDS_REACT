import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
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
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'error',
        'info',
      ],
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
    themeColor: 'primary',
    label: 'Tag',
    prefix: 'None',
    closable: true,
    isDisabled: false,
    className: '',
    onClose: action('closed'),
  },
  parameters: {
    docs: {
      title: '標籤',
      description: {
        component: '標籤的呈現及說明。',
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

export const ThemeColor: Story = {
  name: '主題色彩',
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<Tag {...args} themeColor="primary" label="primary" />
<Tag {...args} themeColor="secondary" label="secondary" />
<Tag {...args} themeColor="tertiary" label="tertiary" />
<Tag {...args} themeColor="info" label="info" />
<Tag {...args} themeColor="success" label="success" />
<Tag {...args} themeColor="warning" label="warning" />
<Tag {...args} themeColor="error" label="error" />
`,
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Tag {...args} themeColor="primary" label="Primary" />
        <Tag {...args} themeColor="secondary" label="Secondary" />
        <Tag {...args} themeColor="tertiary" label="Tertiary" />
        <Tag {...args} themeColor="info" label="Info" />
        <Tag {...args} themeColor="success" label="Success" />
        <Tag {...args} themeColor="warning" label="Warning" />
        <Tag {...args} themeColor="error" label="Error" />
      </div>
    );
  },
};
