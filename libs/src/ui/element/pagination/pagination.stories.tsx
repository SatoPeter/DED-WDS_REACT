import { action } from '@storybook/addon-actions';
import { Meta, StoryContext, StoryObj } from '@storybook/react';
import { Pagination } from '@src/ui';

export default {
  title: 'Component/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalItems: {
      description: '總筆數',
      table: {
        category: 'PROPS',
      },
    },
    currentPage: {
      description: '目前頁數',
      control: {
        type: 'number',
        min: 1,
        max: 100,
        step: 1,
      },
      table: {
        category: 'PROPS',
      },
    },
    itemsPerPageOptions: {
      description: '每頁顯示筆數選項',
      table: {
        category: 'PROPS',
      },
    },
    defaultItemsPerPage: {
      description: '預設每頁顯示筆數',
      table: {
        category: 'PROPS',
      },
    },
    isShowPageInfo: {
      description: '是否顯示頁數資訊',
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
    onPageChange: {
      description: '頁碼變更事件',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    totalItems: 100,
    currentPage: 1,
    itemsPerPageOptions: [10, 20, 50],
    defaultItemsPerPage: 5,
    isShowPageInfo: false,
    className: '',
    onPageChange: action('onPageChange'),
  },
  parameters: {
    docs: {
      title: '頁碼',
      description: {
        component: '頁碼組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Pagination {...args} />;
  },
};

export const Info: Story = {
  name: '顯示資訊',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return `<Pagination {...args} isShowPageInfo />`;
        },
      },
    },
  },
  render(args) {
    return <Pagination {...args} isShowPageInfo />;
  },
};
