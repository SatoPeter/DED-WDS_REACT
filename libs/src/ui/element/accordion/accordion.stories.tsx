import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@src/ui';

export default {
  title: 'Component/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    dataSource: {
      description: '資料來源',
      table: {
        category: 'PROPS',
      },
    },
    isOpenAll: {
      description: '是否全部展開',
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
  },
  parameters: {
    docs: {
      title: 'Accordion',
      description: {
        component: '折疊選單組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Accordion>;

const qaList = [
  {
    id: '1',
    label: 'Q1. What is React?',
    detail: 'React is a JavaScript library for building user interfaces.',
  },
  {
    id: '2',
    label: 'Q2. What are the features of React?',
    detail:
      'The features of React include component-based architecture, unidirectional data flow, and virtual DOM.',
  },
  {
    id: '3',
    label: 'Q3. What is included in the React ecosystem?',
    detail: 'The React ecosystem includes React Router, Redux, and Axios.',
  },
  {
    id: '4',
    label: 'Q4. What are the advantages of React?',
    detail:
      'The advantages of React include component-based architecture, unidirectional data flow, and virtual DOM. These features provide efficiency, reusability, and better performance.',
  },
];

export const Default: Story = {
  name: '預設項目',
  args: {
    dataSource: qaList,
    isOpenAll: false,
    className: '',
  },
  render(args) {
    return <Accordion {...args} />;
  },
};
