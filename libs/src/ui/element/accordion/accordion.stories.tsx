import { Meta, StoryObj } from '@storybook/react';
import { Accordion, Title, Button } from '@src/ui';
import { ArrowDownIcon, InfoIcon } from '@src/assets';

const qaList = [
  {
    id: '1',
    label: (
      <Title level={3} themeColor="primary">
        What is React?
      </Title>
    ),
    detail: (
      <>
        <p>React is a JavaScript library for building user interfaces.</p>
        <Button
          themeColor="primary"
          variant="soft"
          onClick={() => ({})}
          size="small"
          suffix={<ArrowDownIcon width={20} height={20} />}
        >
          Button
        </Button>
      </>
    ),
  },
  {
    id: '2',
    label: (
      <Title level={3} themeColor="primary">
        What are the features of React ?
      </Title>
    ),
    detail: (
      <p>
        The features of React include component-based architecture,
        unidirectional data flow, and virtual DOM.
      </p>
    ),
  },
  {
    id: '3',
    label: (
      <Title level={3} themeColor="primary">
        What is included in the React ecosystem ?
      </Title>
    ),
    detail: <p>The React ecosystem includes React Router, Redux, and Axios.</p>,
  },
  {
    id: '4',
    label: (
      <Title level={3} themeColor="primary">
        What are the advantages of React ?
      </Title>
    ),
    detail: (
      <p>
        The advantages of React include component-based architecture,
        unidirectional data flow, and virtual DThese features provide
        efficiency, reusability, and better performance.
      </p>
    ),
  },
];

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
    prefix: {
      description: '前置元素',
      table: {
        category: 'PROPS',
      },
    },
    borderStyle: {
      description: '邊框樣式',
      control: {
        type: 'select',
        options: ['solid', 'highlight'],
      },
      table: {
        category: 'PROPS',
      },
    },
    isSmallSize: {
      description: '是否為小尺寸',
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
  args: {
    dataSource: qaList,
    prefix: <InfoIcon width={20} height={20} />,
    borderStyle: 'highlight',
    isSmallSize: false,
    isOpenAll: false,
    className: '',
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

export const Default: Story = {
  name: '預設項目',
  args: {
    borderStyle: 'highlight',
    isSmallSize: false,
    isOpenAll: false,
  },
  render(args) {
    return <Accordion {...args} />;
  },
};

export const Border: Story = {
  name: '邊框樣式',
  args: {
    borderStyle: 'solid',
    isOpenAll: false,
  },
  render(args) {
    return <Accordion {...args} />;
  },
};

const smallQaList = [
  {
    id: '1',
    label: (
      <Title level={4} themeColor="primary">
        What is React?
      </Title>
    ),
    detail: (
      <>
        <p>React is a JavaScript library for building user interfaces.</p>
        <Button
          themeColor="primary"
          variant="soft"
          onClick={() => ({})}
          size="small"
          suffix={<ArrowDownIcon width={20} height={20} />}
        >
          Button
        </Button>
      </>
    ),
  },
  {
    id: '2',
    label: (
      <Title level={4} themeColor="primary">
        What are the features of React ?
      </Title>
    ),
    detail: (
      <p>
        The features of React include component-based architecture,
        unidirectional data flow, and virtual DOM.
      </p>
    ),
  },
  {
    id: '3',
    label: (
      <Title level={4} themeColor="primary">
        What is included in the React ecosystem ?
      </Title>
    ),
    detail: <p>The React ecosystem includes React Router, Redux, and Axios.</p>,
  },
  {
    id: '4',
    label: (
      <Title level={4} themeColor="primary">
        What are the advantages of React ?
      </Title>
    ),
    detail: (
      <p>
        The advantages of React include component-based architecture,
        unidirectional data flow, and virtual DThese features provide
        efficiency, reusability, and better performance.
      </p>
    ),
  },
];

export const Small: Story = {
  name: '小尺寸',
  args: {
    dataSource: smallQaList,
    borderStyle: 'solid',
    isSmallSize: true,
    isOpenAll: false,
    className: '',
  },
  render(args) {
    return <Accordion {...args} />;
  },
};
