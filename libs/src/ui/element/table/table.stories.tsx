import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Table, Button, Tooltip } from '@src/ui';
import { RowData } from '@src/ui/element/table';

const columns = [
  { key: 'head', title: 'TH', width: '50px' },
  {
    key: 'column1',
    title: 'TH',
    width: '100px',
  },
  {
    key: 'column2',
    title: 'TH',
    width: '100px',
  },
  {
    key: 'column3',
    title: 'TH',
    width: '100px',
  },
  {
    key: 'column4',
    title: 'TH',
    width: '50px',
  },
  {
    key: 'column5',
    title: 'TH',
    width: '50px',
    align: 'center' as const,
  },
];

const customColumns = [
  { key: 'head', title: 'TH', width: '50px' },
  {
    key: 'column1',
    title: 'TH',
    width: '100px',
    render: (item: { head: string; column1: string }) => (
      <Tooltip content={item.column1} placement="top">
        {item.column1}
      </Tooltip>
    ),
  },
  {
    key: 'column2',
    title: 'TH',
    width: '100px',
    render: (item: { head: string; column2: string }) => (
      <Tooltip content={item.column2} placement="top">
        {item.column2}
      </Tooltip>
    ),
  },
  {
    key: 'column3',
    title: 'TH',
    width: '100px',
    render: (item: { head: string; column3: string }) => (
      <Tooltip content={item.column3} placement="top">
        {item.column3}
      </Tooltip>
    ),
  },
  {
    key: 'column4',
    title: 'TH',
    width: '50px',
    render: (item: { head: string; column4: string }) => (
      <Tooltip content={item.column4} placement="top">
        {item.column4}
      </Tooltip>
    ),
  },
  {
    key: 'column5',
    title: 'TH',
    width: '50px',
    align: 'center' as const,
    render: (item: { head: string; column5: string }) => (
      <Button
        themeColor="primary"
        variant="filled"
        size="small"
        onClick={() => alert(item.column5)}
      >
        View
      </Button>
    ),
  },
];

const dataSource: RowData[] = Array(7)
  .fill(null)
  .map((_, index) => ({
    head: `Head-${index + 1}`,
    column1: 'td1',
    column2: 'td2',
    column3: 'td3',
    column4: 'td4',
    column5: 'td5',
  }));

export default {
  title: 'Component/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    dataSource: {
      description: '資料來源',
      table: {
        category: 'PROPS',
      },
    },
    columns: {
      description: '欄位',
      table: {
        category: 'PROPS',
      },
    },
    showCheckbox: {
      description: '是否顯示 checkbox',
      table: {
        category: 'PROPS',
      },
    },
    showVerticalBorders: {
      description: '是否顯示垂直邊框',
      table: {
        category: 'PROPS',
      },
    },
    isSprite: {
      description: '是否為 Sprite',
      table: {
        category: 'PROPS',
      },
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
      table: {
        category: 'PROPS',
      },
    },
    onRowClick: {
      description: '點擊事件',
      table: {
        category: 'EVENTS',
      },
    },
    onSelect: {
      description: '選取事件',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    dataSource,
    columns,
    showCheckbox: false,
    showVerticalBorders: false,
    isSprite: true,
    className: '',
    onRowClick: action('onRowClick'),
    onSelect: action('onSelect'),
  },
  parameters: {
    docs: {
      title: 'Table',
      description: {
        component: 'Table 組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Table {...args} />;
  },
};

export const Border: Story = {
  name: '框線表格',
  args: {},
  render(args) {
    return <Table {...args} showVerticalBorders showCheckbox />;
  },
};

export const Custom: Story = {
  name: '客製化欄位',
  args: {
    columns: customColumns,
  },
  render(args) {
    return <Table {...args} />;
  },
};

export const Checkbox: Story = {
  name: '可勾選資料列',
  args: {},
  render(args) {
    return <Table {...args} showCheckbox />;
  },
};
