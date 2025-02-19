import { Meta, StoryObj } from '@storybook/react';
import Image from './image';
import { Grid, Row, Column } from '@src/ui/section/grid';

export default {
  title: 'Component/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: '圖片來源',
      table: {
        category: 'PROPS',
      },
    },
    alt: {
      description: '圖片替代文字',
      table: {
        category: 'PROPS',
      },
    },
    ratio: {
      description: '圖片比例',
      control: {
        type: 'select',
        options: [11, 43, 54, 169],
      },
      table: {
        category: 'PROPS',
      },
    },
    objectFit: {
      description: '圖片填滿方式',
      control: {
        type: 'select',
        options: ['cover', 'contain', 'fill', 'none'],
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
  },
  parameters: {
    docs: {
      title: 'Image',
      description: {
        component: '圖片組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  name: '預設項目',
  args: {
    src: 'https://picsum.photos/300/200?random=1',
    alt: 'placeholder',
    ratio: '1x1',
    objectFit: 'cover',
    className: '',
  },
  render(args) {
    return (
      <Grid fluid>
        <Row hasGap>
          <Column xs={12} sm={6} md={3}>
            <Image {...args} />
          </Column>
        </Row>
      </Grid>
    );
  },
};

export const Ratio: Story = {
  name: '圖片比例',
  argTypes: {
    ratio: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
  render(args) {
    return (
      <Grid fluid>
        <Row hasGap>
          <Column xs={12} sm={6} md={3}>
            <Image
              {...args}
              src="https://picsum.photos/300/200?random=2"
              ratio="1x1"
            />
            <div style={{ textAlign: 'right' }}>1x1</div>
          </Column>
          <Column xs={12} sm={6} md={3}>
            <Image
              {...args}
              src="https://picsum.photos/300/200?random=2"
              ratio="4x3"
            />
            <div style={{ textAlign: 'right' }}>4x3</div>
          </Column>
          <Column xs={12} sm={6} md={3}>
            <Image
              {...args}
              src="https://picsum.photos/300/200?random=2"
              ratio="5x4"
            />
            <div style={{ textAlign: 'right' }}>5x4</div>
          </Column>
          <Column xs={12} sm={6} md={3}>
            <Image
              {...args}
              src="https://picsum.photos/300/200?random=2"
              ratio="16x9"
            />
            <div style={{ textAlign: 'right' }}>16x9</div>
          </Column>
        </Row>
      </Grid>
    );
  },
};

export const Fit: Story = {
  name: '填滿方式',
  argTypes: {
    objectFit: {
      table: {
        disable: true,
      },
    },
  },
  args: {},
  render(args) {
    return (
      <Grid fluid>
        <Row hasGap>
          <Column xs={12} sm={6} md={3}>
            <Image
              {...args}
              src="https://picsum.photos/300/200?random=3"
              objectFit="none"
            />
            <div style={{ textAlign: 'right' }}>none</div>
          </Column>
          <Column xs={12} sm={6} md={3}>
            <Image
              {...args}
              src="https://picsum.photos/300/200?random=3"
              objectFit="contain"
            />
            <div style={{ textAlign: 'right' }}>contain</div>
          </Column>
          <Column xs={12} sm={6} md={3}>
            <Image
              {...args}
              src="https://picsum.photos/300/200?random=3"
              objectFit="fill"
            />
            <div style={{ textAlign: 'right' }}>fill</div>
          </Column>
          <Column xs={12} sm={6} md={3}>
            <Image
              {...args}
              src="https://picsum.photos/300/200?random=3"
              objectFit="cover"
            />
            <div style={{ textAlign: 'right' }}>cover</div>
          </Column>
        </Row>
      </Grid>
    );
  },
};
