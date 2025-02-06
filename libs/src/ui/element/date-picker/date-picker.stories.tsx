import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './date-picker';

export default {
  title: 'Component/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: '日期',
      table: {
        category: 'PROPS',
      },
    },
    format: {
      description: '日期格式',
      table: {
        category: 'PROPS',
      },
    },
    placeholder: {
      description: '提示文字(請注意與format格式相符)',
      table: {
        category: 'PROPS',
      },
    },
    isRange: {
      description: '日期區間',
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
      description: '日期更改事件',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    value: '',
    format: 'yyyy/mm/dd',
    isRange: false,
    placeholder: 'YYYY/MM/DD',
    className: '',
    onChange: action('onChange'),
  },
  parameters: {
    docs: {
      title: '日期',
      description: {
        component: '日期組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <DatePicker {...args} />;
  },
};

export const Range: Story = {
  name: '日期區間',
  argTypes: {
    value: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      table: {
        disable: true,
      },
    },
    isRange: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    isRange: true,
  },
  render(args) {
    return <DatePicker {...args} />;
  },
};
