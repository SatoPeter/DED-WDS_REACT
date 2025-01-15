import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Button, Title } from '@src/ui';
import { CardSimple } from '@src/ui/section/card-simple';
import { Card } from './card';
import { Column, Grid, Row } from '@src/ui/section/grid';
import { SvgArrowDown } from '@src/assets';

export default {
  title: 'Component/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    hasHeaderDivider: {
      description: '是否有標題分隔線',
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
    cardHeader: {
      description: '卡片標題',
      table: {
        category: 'SLOTS',
      },
    },
    children: {
      description: '卡片內容',
      table: {
        category: 'SLOTS',
      },
    },
    cardFooter: {
      description: '卡片底部',
      table: {
        category: 'SLOTS',
      },
    },
    onClick: {
      action: 'clicked',
      description: '點擊事件',
      table: {
        category: 'EVENTS',
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
    hasHeaderDivider: false,
    className: '',
    cardHeader: '',
    children: '',
    cardFooter: '',
    onClick: action('onClick'),
  },
} as Meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  name: '預設項目',
  args: {
    cardHeader: (
      <Title themeColor="primary" level={2}>
        Header Title
      </Title>
    ),
    cardFooter: (
      <Button
        themeColor="primary"
        variant={'filled'}
        suffix={<SvgArrowDown />}
        onClick={() => ({})}
      >
        Button
      </Button>
    ),
  },
  render: function (args) {
    return (
      <Grid>
        <Row>
          <Column xs={12} md={6} lg={4}>
            <Card {...args}>
              <CardSimple
                hasBorder={false}
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              />
            </Card>
          </Column>
        </Row>
      </Grid>
    );
  },
};

export const Vertical: Story = {
  name: '垂直佈局',
  args: {
    cardHeader: (
      <Title themeColor="primary" level={2}>
        Header Title
      </Title>
    ),
    cardFooter: (
      <Button
        themeColor="primary"
        variant={'filled'}
        suffix={<SvgArrowDown />}
        onClick={() => ({})}
      >
        Button
      </Button>
    ),
  },
  render: function (args) {
    return (
      <Grid>
        <Row>
          <Column xs={12} md={6} lg={3}>
            <Card {...args}>
              <CardSimple
                hasBorder={false}
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              />
            </Card>
          </Column>
          <Column xs={12} md={6} lg={3}>
            <Card {...args}>
              <CardSimple
                hasBorder={false}
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              />
            </Card>
          </Column>
          <Column xs={12} md={6} lg={3}>
            <Card {...args}>
              <CardSimple
                hasBorder={false}
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              />
            </Card>
          </Column>
          <Column xs={12} md={6} lg={3}>
            <Card {...args}>
              <CardSimple
                hasBorder={false}
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              />
            </Card>
          </Column>
        </Row>
      </Grid>
    );
  },
};

export const Horizontal: Story = {
  name: '水平佈局',
  args: {
    cardHeader: (
      <Title themeColor="primary" level={2}>
        Header Title
      </Title>
    ),
    cardFooter: (
      <Button
        themeColor="primary"
        variant={'filled'}
        size={'large'}
        suffix={<SvgArrowDown />}
        onClick={() => ({})}
      >
        Button
      </Button>
    ),
  },
  render: function (args) {
    return (
      <Grid>
        <Row>
          <Column xs={6}>
            <Card {...args}>
              <CardSimple
                hasBorder={false}
                layout="horizontal"
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              />
            </Card>
          </Column>
          <Column xs={6}>
            <Card {...args}>
              <CardSimple
                hasBorder={false}
                layout="horizontal"
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              />
            </Card>
          </Column>
          <Column xs={6}>
            <Card {...args}>
              <CardSimple
                hasBorder={false}
                layout="horizontal"
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              />
            </Card>
          </Column>
          <Column xs={6}>
            <Card {...args}>
              <CardSimple
                hasBorder={false}
                layout="horizontal"
                imgSrc="https://storage.googleapis.com/ded-wds-bucket/card_bg.png"
                align="left"
                title="Card Title"
                subtitle="Subtitle"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."
              />
            </Card>
          </Column>
        </Row>
      </Grid>
    );
  },
};
