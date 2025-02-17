import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import {
  SvgAccount,
  SvgSearch,
  SvgVisibility,
  SvgVisibilityOff,
  SvgClose,
  SvgLock,
} from '@src/assets/icons';

const IconComponents = {
  SvgAccount: <SvgAccount />,
  SvgSearch: <SvgSearch />,
  SvgVisibility: <SvgVisibility />,
  SvgVisibilityOff: <SvgVisibilityOff />,
  SvgClose: <SvgClose />,
  SvgLock: <SvgLock />,
};

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
    hasClear: {
      description: '是否顯示清除按鈕',
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
    currValue: {
      description: '初始值',
      table: {
        category: 'PROPS',
      },
    },
    maxLimit: {
      description: '最長輸入限制',
      table: {
        category: 'PROPS',
      },
    },
    prefix: {
      description: '前置元素',
      options: Object.keys(IconComponents),
      control: {
        type: 'select',
        labels: {
          SvgAccount: 'Account Icon',
          SvgSearch: 'Search Icon',
          SvgVisibility: 'Visibility Icon',
          SvgVisibilityOff: 'Visibility Off Icon',
          SvgClose: 'Close Icon',
          SvgLock: 'Lock Icon',
        },
      },
      mapping: IconComponents,
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
    isOpen: {
      description: '是否使用選單並開啟',
      table: {
        disable: true,
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
      title: 'Input',
      description: {
        component: '輸入框組件的呈現及說明。',
      },
    },
  },
  args: {
    label: 'Label',
    type: 'text',
    hasClear: true,
    placeholder: 'Placeholder',
    size: 'medium',
    currValue: '',
    maxLimit: 0,
    hint: { error: '', description: 'Prompt message' },
    isDisabled: false,
    className: '',
    onChange: (e: string) => action('changed')(e),
  },
} as Meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  name: '預設項目',
  args: {
    prefix: <SvgAccount />,
  },
  render(args) {
    return <Input {...args} />;
  },
};

export const Type: Story = {
  name: '輸入類型',
  argTypes: {
    isDisabled: {
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
<Input {...args} label="Account"  prefix={<SvgAccount />} />
<Input {...args} label="Password" type={'password'} prefix={<Lock />} />
<Input {...args} label="Number" type="number" />
`,
      },
    },
  },
  render(args) {
    return (
      <>
        <Input
          {...args}
          currValue="Account"
          label="Account"
          type="text"
          prefix={<SvgAccount />}
        />
        <Input
          {...args}
          currValue="Password"
          label="Password"
          type="password"
          prefix={<SvgLock />}
        />
        <Input {...args} currValue="12345" label="Amount" type="number" />
      </>
    );
  },
};

export const InputWithStatus: Story = {
  name: '提示訊息',
  argTypes: {
    isDisabled: {
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
<Input {...args} label="Account" hint={{ error: 'Error message', description: '' }} />
<Input {...args} label="Account" hint={{ error: '', description: 'Prompt message' }} />
`,
      },
    },
  },
  render(args) {
    return (
      <>
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
      </>
    );
  },
};
