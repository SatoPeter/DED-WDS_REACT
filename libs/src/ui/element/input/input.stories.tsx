import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import {
  AccountIcon,
  SearchIcon,
  VisibilityIcon,
  VisibilityOffIcon,
  CloseIcon,
  LockIcon,
} from '@src/assets';

export default {
  title: 'Component/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: '標題',
      table: {
        category: 'PROPS',
      },
    },
    type: {
      description: '輸入類型',
      control: {
        type: 'select',
        options: ['text', 'password', 'number', 'email'],
      },
      table: {
        category: 'PROPS',
      },
    },
    placeholder: {
      description: '輸入提示',
      control: {
        type: 'text',
      },
      table: {
        category: 'PROPS',
      },
    },
    initValue: {
      description: '初始值',
      table: {
        category: 'PROPS',
      },
    },
    prefix: {
      description: '前置元素',
      options: [
        'None',
        'Account',
        'Search',
        'Visibility',
        'VisibilityOff',
        'Close',
        'Lock',
      ],
      mapping: {
        None: null,
        Account: <AccountIcon />,
        Search: <SearchIcon />,
        Visibility: <VisibilityIcon />,
        VisibilityOff: <VisibilityOffIcon />,
        Close: <CloseIcon />,
        Lock: <LockIcon />,
      },
      table: {
        category: 'PROPS',
      },
    },
    size: {
      description: '輸入框尺寸',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      table: {
        category: 'PROPS',
      },
    },
    hint: {
      description: '提示訊息',
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
    onChange: {
      description: '輸入事件',
      action: 'changed',
      table: {
        category: 'EVENTS',
      },
    },
  },
  parameters: {
    docs: {
      title: '輸入框',
      description: {
        component: '輸入框組件的呈現及說明。',
      },
    },
  },
  args: {
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder...',
    prefix: <AccountIcon />,
    size: 'medium',
    initValue: '',
    hint: { error: '', description: 'Prompt message' },
    isDisabled: false,
    className: '',
    onChange: (e: string) => action('changed')(e),
  },
} as Meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Input {...args} />;
  },
};

export const InputWithStatus: Story = {
  name: '輸入框狀態',
  args: {
    prefix: <AccountIcon />,
    placeholder: 'Placeholder...',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Input {...args} label="Account" />
<Input {...args} label="Password" type={'password'} prefix={<LockIcon />} />
<Input {...args} label="Account" hint={{ error: 'Error message', description: '' }} />
<Input {...args} label="Account" hint={{ error: '', description: 'Prompt message' }} />
`,
      },
    },
  },
  render(args) {
    return (
      <div>
        <Input {...args} label="Account" />
        <Input
          {...args}
          label="Password"
          type={'password'}
          prefix={<LockIcon />}
        />
        <Input
          {...args}
          label="Account"
          hint={{ error: 'Error message', description: '' }}
        />
        <Input
          {...args}
          label="Account"
          hint={{ error: '', description: 'Prompt message' }}
        />
      </div>
    );
  },
};
