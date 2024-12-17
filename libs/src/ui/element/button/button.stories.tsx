import { action } from '@storybook/addon-actions';
import { Meta, StoryContext, StoryObj } from '@storybook/react';
import { Button } from '@src/ui';
import {
  AccountIcon,
  SearchIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from '@src/assets';

export default {
  title: 'Component/Button',
  component: Button,
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
    variant: {
      description: '外觀樣式',
      control: {
        type: 'select',
        options: ['filled', 'soft', 'ghost', 'text'],
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
    prefix: {
      description: '前置元素',
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
    suffix: {
      description: '後置元素',
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
    size: {
      description: '按鈕尺寸',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      table: {
        category: 'PROPS',
      },
    },
    width: {
      description: '按鈕寬度',
      control: {
        type: 'select',
        options: ['fit', 'fluid'],
      },
      table: {
        category: 'PROPS',
      },
    },
    borderWidth: {
      description: '按鈕邊框寬度',
      control: {
        type: 'select',
        options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      },
      table: {
        category: 'PROPS',
      },
    },
    radius: {
      description: '按鈕圓角大小',
      control: {
        type: 'select',
        options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'full'],
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
    children: {
      control: {},
      description: '按鈕內容',
      options: ['標題按鈕', '客製化按鈕'],
      table: {
        category: 'SLOTS',
      },
    },
    onClick: {
      description: '點擊事件',
      action: 'clicked',
      table: {
        category: 'EVENTS',
      },
      required: true,
    },
  },

  args: {
    themeColor: 'primary',
    variant: 'filled',
    prefix: null,
    suffix: null,
    size: 'medium',
    width: 'fit',
    borderWidth: 'sm',
    radius: 'sm',
    isDisabled: false,
    className: '',
    children: 'Button',
    onClick: action('onClick'),
  },
  parameters: {
    docs: {
      title: 'Button',
      description: {
        component: '按鈕組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Button {...args}>{args.children}</Button>;
  },
};

export const Additional: Story = {
  name: '附加元素',
  args: {
    variant: 'ghost',
    onClick: () => action('onClick')('點擊事件'),
    className: '',
  },
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const { args } = storyContext;
          return `
<Button {...args} prefix={<AccountIcon />}>${args.children}</Button>
<Button {...args} suffix={<SearchIcon />}>${args.children}</Button>
`;
        },
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <Button {...args} prefix={<AccountIcon />}>
          {args.children}
        </Button>
        <Button {...args} suffix={<SearchIcon />}>
          {args.children}
        </Button>
      </div>
    );
  },
};

export const Shape: Story = {
  name: '外觀樣式',
  args: {
    variant: 'ghost',
    suffix: null,
    onClick: () => action('onClick')('點擊事件'),
    className: '',
  },
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const { args } = storyContext;
          return `
<Button {...args} variant="filled">${args.children}</Button>
<Button {...args} variant="ghost">${args.children}</Button>
<Button {...args} variant="text">${args.children}</Button>
`;
        },
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <Button {...args} variant="filled">
          {args.children}
        </Button>
        <Button {...args} variant="ghost">
          {args.children}
        </Button>
        <Button {...args} variant="text">
          {args.children}
        </Button>
      </div>
    );
  },
};

export const Theme: Story = {
  name: '主題色彩',
  args: {
    variant: 'filled',
    prefix: <AccountIcon />,
    suffix: null,
    onClick: () => action('onClick')('點擊事件'),
    className: '',
  },
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const { args } = storyContext;
          return `
<Button { ...args } themeColor="primary">${args.children}</Button>
<Button { ...args } themeColor="secondary">${args.children}</Button>
<Button { ...args } themeColor="neutral">${args.children}</Button>
<Button { ...args } themeColor="info">${args.children}</Button>
<Button { ...args } themeColor="success">${args.children}</Button>
<Button { ...args } themeColor="warning">${args.children}</Button>
<Button { ...args } themeColor="error">${args.children}</Button>
`;
        },
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <Button {...args} themeColor="primary">
          {args.children}
        </Button>
        <Button {...args} themeColor="secondary">
          {args.children}
        </Button>
        <Button {...args} themeColor="neutral">
          {args.children}
        </Button>
        <Button {...args} themeColor="info">
          {args.children}
        </Button>
        <Button {...args} themeColor="success">
          {args.children}
        </Button>
        <Button {...args} themeColor="warning">
          {args.children}
        </Button>
        <Button {...args} themeColor="error">
          {args.children}
        </Button>
      </div>
    );
  },
};
