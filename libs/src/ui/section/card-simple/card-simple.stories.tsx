import { Meta, StoryObj } from '@storybook/react';
import { CardSimple } from '@src/ui';
import { Column, Grid, Row } from '@src/ui/section/grid';

export default {
  title: 'Component/Card Simple',
  component: CardSimple,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      description: '佈局',
      control: {
        type: 'select',
        options: ['vertical', 'horizontal'],
      },
      table: {
        category: 'PROPS',
      },
    },
    imgSrc: {
      description: '圖片來源',
      table: {
        category: 'PROPS',
      },
    },
    buttonName: {
      description: '按鈕名稱',
      table: {
        category: 'PROPS',
      },
    },
    align: {
      description: '對齊方式',
      control: {
        type: 'select',
        options: ['center', 'left', 'right'],
      },
      table: {
        category: 'PROPS',
      },
    },
    title: {
      description: '卡片標題',
      table: {
        category: 'PROPS',
      },
    },
    subtitle: {
      description: '副標題',
      table: {
        category: 'PROPS',
      },
    },
    description: {
      description: '描述',
      table: {
        category: 'PROPS',
      },
    },
  },
  parameters: {
    docs: {
      title: 'Card',
      description: {
        component: '卡片組件的呈現及說明。',
      },
    },
  },
  args: {
    layout: 'vertical',
    imgSrc: 'libs/src/assets/card_bg.png',
    buttonName: 'Button',
    align: 'left',
    title: 'Card Title',
    subtitle: 'Subtitle',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s...',
  },
} as Meta;
type Story = StoryObj<typeof CardSimple>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render: function (args) {
    return (
      <Grid fluid>
        <Row hasGap>
          <Column xs={12} sm={6} md={4}>
            <CardSimple {...args}></CardSimple>
          </Column>
        </Row>
      </Grid>
    );
  },
};

export const Align: Story = {
  name: '按鈕對齊方式',
  args: {},
  render: function (args) {
    return (
      <Grid fluid>
        <Row>
          <Column xs={12} sm={6} md={4}>
            <CardSimple {...args} align="left"></CardSimple>
          </Column>
          <Column xs={12} sm={6} md={4}>
            <CardSimple {...args} align="center"></CardSimple>
          </Column>
          <Column xs={12} sm={6} md={4}>
            <CardSimple {...args} align="right"></CardSimple>
          </Column>
        </Row>
      </Grid>
    );
  },
};

export const Horizontal: Story = {
  name: '水平佈局',
  args: {},
  render: function (args) {
    return (
      <Grid fluid>
        <Row hasGap>
          <Column xs={12} md={6} lg={3}>
            <CardSimple {...args}></CardSimple>
          </Column>

          <Column xs={12} md={6} lg={3}>
            <CardSimple {...args}></CardSimple>
          </Column>

          <Column xs={12} md={6} lg={3}>
            <CardSimple {...args}></CardSimple>
          </Column>

          <Column xs={12} md={6} lg={3}>
            <CardSimple {...args}></CardSimple>
          </Column>
        </Row>
      </Grid>
    );
  },
};

export const Vertical: Story = {
  name: '垂直佈局',
  args: {},
  render: function (args) {
    return (
      <Grid fluid>
        <Row>
          <Column xs={6}>
            <CardSimple {...args} layout="horizontal"></CardSimple>
          </Column>

          <Column xs={6}>
            <CardSimple {...args} layout="horizontal"></CardSimple>
          </Column>

          <Column xs={6}>
            <CardSimple {...args} layout="horizontal"></CardSimple>
          </Column>

          <Column xs={6}>
            <CardSimple {...args} layout="horizontal"></CardSimple>
          </Column>
        </Row>
      </Grid>
    );
  },
};
