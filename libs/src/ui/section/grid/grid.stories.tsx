import { Meta, StoryObj } from '@storybook/react';
import { Grid } from './grid';
import { Row } from './row';
import { Column } from './column';

export default {
  title: 'Component/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    // Grid 参数
    fluid: {
      control: 'boolean',
      defaultValue: true,
      description: '是否使用 100% 宽度',
      table: {
        category: 'Grid',
      },
    },
    className: {
      control: 'text',
      description: '客製化樣式',
      table: {
        category: 'Grid',
      },
    },
    // Row 参数
    hasGap: {
      control: 'boolean',
      defaultValue: true,
      description: '是否有間距',
      table: {
        category: 'Row',
      },
    },
    justify: {
      control: {
        type: 'select',
      },
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: '水平對齊方式',
      table: {
        category: 'Row',
      },
    },
    alignItems: {
      control: {
        type: 'select',
      },
      options: ['stretch', 'center', 'flex-start', 'flex-end', 'baseline'],
      description: '垂直對齊方式',
      table: {
        category: 'Row',
      },
    },
    // Column 参数
    align: {
      control: {
        type: 'select',
      },
      options: ['start', 'center', 'end'],
      description: '對齊方式',
      table: {
        category: 'Column',
      },
    },
    xs: {
      control: 'number',
      description: '手機尺寸',
      table: {
        category: 'Column',
      },
    },
    sm: {
      control: 'number',
      description: '平板尺寸',
      table: {
        category: 'Column',
      },
    },
    md: {
      control: 'number',
      description: '桌機尺寸',
      table: {
        category: 'Column',
      },
    },
    lg: {
      control: 'number',
      description: '大桌機尺寸',
      table: {
        category: 'Column',
      },
    },
    xl: {
      control: 'number',
      description: '超大桌機尺寸',
      table: {
        category: 'Column',
      },
    },
  },
  parameters: {
    docs: {
      title: '格線系統',
      description: {
        component: '格線系統的呈現及說明。',
      },
    },
  },
  args: {
    fluid: true,
    className: '',
    hasGap: false,
    justify: 'flex-start',
    alignItems: 'stretch',
    align: 'center',
  },
} as Meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return (
      <Grid {...args}>
        <Row {...args}>
          <Column {...args} xs={12} sm={6} md={4} lg={3} xl={2}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column1
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3} xl={2}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column2
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3} xl={2}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column3
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3} xl={2}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column4
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3} xl={2}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column5
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3} xl={2}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column6
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3} xl={2}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column7
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3} xl={2}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column8
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3} xl={2}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column9
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3} xl={2}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column10
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3} xl={2}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column11
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3} xl={2}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column12
            </div>
          </Column>
        </Row>
      </Grid>
    );
  },
};

export const FourColumn: Story = {
  name: '格線系統-4欄',
  args: {},
  render(args) {
    return (
      <Grid {...args}>
        <Row {...args}>
          <Column {...args} xs={12} sm={6} md={4} lg={3}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column1
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column2
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column3
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column4
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column5
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column6
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column7
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column8
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column9
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column10
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column11
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4} lg={3}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column12
            </div>
          </Column>
        </Row>
      </Grid>
    );
  },
};

export const ThreeColumn: Story = {
  name: '格線系統-3欄',
  args: {},
  render(args) {
    return (
      <Grid {...args}>
        <Row>
          <Column {...args} xs={12} sm={6} md={4}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column1
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column2
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column3
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column4
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column5
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column6
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column7
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column8
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column9
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column10
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column11
            </div>
          </Column>
          <Column {...args} xs={12} sm={6} md={4}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column12
            </div>
          </Column>
        </Row>
      </Grid>
    );
  },
};

export const TwoColumn: Story = {
  name: '格線系統-2欄',
  args: {},
  render(args) {
    return (
      <Grid {...args}>
        <Row>
          <Column {...args} xs={12} sm={6}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column1
            </div>
          </Column>
          <Column {...args} xs={12} sm={6}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column2
            </div>
          </Column>
          <Column {...args} xs={12} sm={6}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column3
            </div>
          </Column>
          <Column {...args} xs={12} sm={6}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column4
            </div>
          </Column>
          <Column {...args} xs={12} sm={6}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column5
            </div>
          </Column>
          <Column {...args} xs={12} sm={6}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column6
            </div>
          </Column>
          <Column {...args} xs={12} sm={6}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column7
            </div>
          </Column>
          <Column {...args} xs={12} sm={6}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column8
            </div>
          </Column>
          <Column {...args} xs={12} sm={6}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column9
            </div>
          </Column>
          <Column {...args} xs={12} sm={6}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column10
            </div>
          </Column>
          <Column {...args} xs={12} sm={6}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column11
            </div>
          </Column>
          <Column {...args} xs={12} sm={6}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column12
            </div>
          </Column>
        </Row>
      </Grid>
    );
  },
};

export const OneColumn: Story = {
  name: '格線系統-1欄',
  args: {},
  render(args) {
    return (
      <Grid {...args}>
        <Row>
          <Column {...args} xs={12}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column1
            </div>
          </Column>
          <Column {...args} xs={12}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column2
            </div>
          </Column>
          <Column {...args} xs={12}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column3
            </div>
          </Column>
          <Column {...args} xs={12}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column4
            </div>
          </Column>
          <Column {...args} xs={12}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column5
            </div>
          </Column>
          <Column {...args} xs={12}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column6
            </div>
          </Column>
          <Column {...args} xs={12}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column7
            </div>
          </Column>
          <Column {...args} xs={12}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column8
            </div>
          </Column>
          <Column {...args} xs={12}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column9
            </div>
          </Column>
          <Column {...args} xs={12}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column10
            </div>
          </Column>
          <Column {...args} xs={12}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column11
            </div>
          </Column>
          <Column {...args} xs={12}>
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column12
            </div>
          </Column>
        </Row>
      </Grid>
    );
  },
};
