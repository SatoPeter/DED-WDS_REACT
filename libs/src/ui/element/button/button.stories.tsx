import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Title, Button } from '@src/ui';
import {
  AccountIcon,
  SearchIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from '@src/assets';

export default {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: '按鈕樣式',
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
    themeColor: {
      description: '主題顏色',
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'tertiary',
          'success',
          'warning',
          'error',
          'info',
        ],
      },
    },
    isDisabled: {
      description: '是否禁用',
    },
    children: {
      description: '按鈕內容',
      options: ['標題按鈕', '客製化按鈕'],
    },
    size: {
      description: '按鈕尺寸',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
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
    },
    onClick: {
      description: '點擊事件',
      action: 'clicked',
    },
    className: {
      description: '客製化樣式',
    },
  },
  args: {
    variant: 'contained',
    themeColor: 'primary',
    isDisabled: false,
    children: '按鈕',
    onClick: action('onClick'),
  },
  parameters: {
    docs: {
      title: '按鈕',
      description: {
        component: '按鈕組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  name: '主要項目',
  args: {
    themeColor: 'primary',
    children: <Title>標題按鈕</Title>,
    size: 'large',
    prefix: <AccountIcon />,
    onClick: (e) => action('onClick')(e),
    className: '',
  },
  render(args) {
    return <Button {...args}>{args.children}</Button>;
  },
};

export const Multiple: Story = {
  name: '多個按鈕',
  args: {
    variant: 'outlined',
    themeColor: 'primary',
    children: <Title>標題按鈕</Title>,
    prefix: <AccountIcon />,
    onClick: () => action('onClick')('點擊事件'),
    className: '',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button {...args} variant="contained">
          {args.children}
        </Button>
        <Button {...args} variant="contained" themeColor="secondary">
          {args.children}
        </Button>
        <Button {...args} variant="contained" themeColor="error">
          {args.children}
        </Button>
        <Button {...args} variant="contained" themeColor="tertiary">
          {args.children}
        </Button>
      </div>
    );
  },
};
