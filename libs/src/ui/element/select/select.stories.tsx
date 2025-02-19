import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Select } from '@src/ui';
import { SvgArrowDropDown } from '@src/assets/icons';
import { useState } from 'react';
import { c } from 'vite/dist/node/types.d-aGj9QkWt';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

const IconComponents = {
  SvgArrowDropDown: <SvgArrowDropDown />,
};

export default {
  title: 'Component/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    /* 設定參數 */
    dataSource: {
      description: '選項',
      control: {
        type: 'object',
      },
      table: {
        category: 'PROPS',
        type: {
          detail: `
            interface Option {
              label: string;
              value: string | number;
            }
          `,
        },
      },
    },
    suffix: {
      description: '後綴圖示',
      options: ['SvgArrowDropDown'],
      mapping: IconComponents,
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
    value: {
      description: '值',
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
      description: '選擇變更事件',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    dataSource: options,
    placeholder: 'Select',
    value: '',
    suffix: <SvgArrowDropDown width={18} height={18} />,
    isDisabled: false,
    className: '',
  },
  parameters: {
    docs: {
      title: 'Select',
      description: {
        component: '選擇組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render: function (args) {
    const [selectedValue, setSelectedValue] = useState<string | number>('');

    const handleChange = (value: string | number) => {
      action('onChange')(value);
      setSelectedValue(value);
    };

    return <Select {...args} value={selectedValue} onChange={handleChange} />;
  },
};
