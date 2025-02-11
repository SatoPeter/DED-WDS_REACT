import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

export default {
  title: 'Component/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: '標題',
      table: {
        category: 'PROPS',
      },
    },
    placeholder: {
      description: '輸入提示',
      table: {
        category: 'PROPS',
      },
    },
    limit: {
      description: '字數限制',
      table: {
        category: 'PROPS',
      },
    },
    initValue: {
      description: '輸入值',
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
      action: 'onChange',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    limit: 0,
    initValue: 'Type something',
    hint: { error: '', description: '' },
    isDisabled: false,
    className: '',
    onChange: action('onChange'),
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      title: 'Textarea',
      description: {
        component: '文字輸入框組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Textarea {...args} />;
  },
};

export const Limit: Story = {
  name: '字數限制',
  args: {
    limit: 30,
  },
  render(args) {
    return <Textarea {...args} />;
  },
};

export const TextareaStatus: Story = {
  name: '輸入框狀態',
  argTypes: {
    isDisabled: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    limit: 30,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Textarea {...args} hint={{ error: 'Error', description: '' }} />
<Textarea {...args} hint={{ error: '', description: 'Prompt message' }} />
`,
      },
    },
  },
  render(args) {
    return (
      <>
        <Textarea {...args} hint={{ error: 'Error', description: '' }} />
        <Textarea
          {...args}
          hint={{ error: '', description: 'Prompt message' }}
        />
      </>
    );
  },
};
