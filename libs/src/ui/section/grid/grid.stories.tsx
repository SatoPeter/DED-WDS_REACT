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
    gap: {
      control: 'number',
      description: '間距',
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
      control: {
        type: 'select',
      },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: '手機尺寸',
      table: {
        category: 'Column',
      },
    },
    sm: {
      control: {
        type: 'select',
      },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: '平板尺寸',
      table: {
        category: 'Column',
      },
    },
    md: {
      control: {
        type: 'select',
      },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: '桌機尺寸',
      table: {
        category: 'Column',
      },
    },
    lg: {
      control: {
        type: 'select',
      },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: '大桌機尺寸',
      table: {
        category: 'Column',
      },
    },
    xl: {
      control: {
        type: 'select',
      },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: '超大桌機尺寸',
      table: {
        category: 'Column',
      },
    },
  },
  parameters: {
    docs: {
      title: 'Grid System',
      description: {
        component: '格線系統組件的呈現及說明。',
      },
    },
  },
  args: {
    fluid: true,
    gap: 0,
    className: '',
    hasGap: false,
    justify: 'flex-start',
    alignItems: 'stretch',
    align: 'center',
  },
} as Meta;
type Story = StoryObj<typeof Grid | typeof Row | typeof Column>;

export const Default: Story = {
  name: '預設項目',
  args: {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 2,
  },
  render(args: any) {
    return (
      <Grid fluid={args.fluid} gap={args.gap} className={args.className}>
        <Row
          hasGap={args.hasGap}
          justify={args.justify}
          alignItems={args.alignItems}
        >
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column1
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column2
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column3
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column4
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column5
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column6
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column7
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column8
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column9
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column10
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column11
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
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
  args: {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
  },
  render(args: any) {
    return (
      <Grid fluid={args.fluid} gap={args.gap} className={args.className}>
        <Row
          hasGap={args.hasGap}
          justify={args.justify}
          alignItems={args.alignItems}
        >
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column1
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column2
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column3
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column4
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column5
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column6
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column7
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column8
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column9
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column10
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column11
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
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
  args: {
    xs: 12,
    sm: 6,
    md: 4,
  },
  render(args: any) {
    return (
      <Grid fluid={args.fluid} gap={args.gap} className={args.className}>
        <Row>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column1
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column2
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column3
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column4
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column5
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column6
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column7
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column8
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column9
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column10
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column11
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
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
  args: {
    xs: 12,
    sm: 6,
  },
  render(args: any) {
    return (
      <Grid fluid={args.fluid} gap={args.gap} className={args.className}>
        <Row>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column1
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column2
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column3
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column4
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column5
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column6
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column7
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column8
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column9
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column10
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column11
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
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
  args: {
    xs: 12,
  },
  render(args: any) {
    return (
      <Grid fluid={args.fluid} gap={args.gap} className={args.className}>
        <Row>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column1
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column2
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column3
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column4
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column5
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column6
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column7
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column8
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column9
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column10
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
            <div
              className="diagonal-background"
              style={{ border: '1px solid #ccc', padding: '8px 16px' }}
            >
              Column11
            </div>
          </Column>
          <Column
            align={args.align}
            xs={args.xs}
            sm={args.sm}
            md={args.md}
            lg={args.lg}
            xl={args.xl}
          >
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
