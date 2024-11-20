import { Meta, StoryObj } from '@storybook/react';
import { Button, Tooltip } from '@src/ui';
import { AccountIcon } from '@src/assets';

export default {
  title: 'Component/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: {
      description: '提示內容',
      table: {
        category: 'PROPS',
      },
    },
    showArrow: {
      description: '是否顯示箭頭',
      table: {
        category: 'PROPS',
      },
    },
    placement: {
      description: '提示框位置',
      control: {
        type: 'select',
        options: [
          'top-left',
          'top',
          'top-right',
          'right-top',
          'right',
          'right-bottom',
          'bottom-right',
          'bottom',
          'bottom-left',
          'left-bottom',
          'left',
          'left-top',
        ],
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
      description: '顯示內容',
      table: {
        category: 'SLOTS',
      },
    },
  },
  args: {
    content: 'good day',
    placement: 'top',
    showArrow: true,
    className: '',
    children: (
      <Button
        prefix={<AccountIcon />}
        themeColor="primary"
        variant="contained"
        onClick={() => ({})}
      >
        Hover Me
      </Button>
    ),
  },
  parameters: {
    docs: {
      title: '提示工具',
      description: {
        component: '提示工具的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Tooltip {...args}></Tooltip>
      </div>
    );
  },
};
