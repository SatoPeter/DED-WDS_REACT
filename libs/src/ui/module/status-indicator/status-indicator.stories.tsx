import { Meta, StoryObj } from '@storybook/react';
import { StatusIndicator } from './status-indicator';
import {
  SvgInfoCircle,
  SvgSuccessCircle,
  SvgWarningTri,
  SvgErrorCircle,
  SvgQuestionCircle,
  SvgDisableCircle,
} from '@src/assets';

export default {
  title: 'Component/Status-Indicator',
  component: StatusIndicator,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'neutral',
          'info',
          'success',
          'warning',
          'error',
        ],
      },
      table: {
        category: 'PROPS',
      },
    },
    variant: {
      description: '樣式變體',
      control: {
        type: 'select',
        options: ['filled', 'text'],
      },
      table: {
        category: 'PROPS',
      },
    },
    prefix: {
      description: '前綴元素',
      options: [
        'None',
        'SvgInfoCircle',
        'SvgSuccessCircle',
        'SvgWarningCircle',
        'SvgErrorCircle',
        'SvgQuestionCircle',
        'SvgDisableCircle',
      ],
      mapping: {
        None: null,
        SvgInfoCircle: <SvgInfoCircle width={20} height={20} />,
        SvgSuccessCircle: <SvgSuccessCircle width={20} height={20} />,
        SvgWarningCircle: <SvgWarningTri width={20} height={20} />,
        SvgErrorCircle: <SvgErrorCircle width={20} height={20} />,
        SvgQuestionCircle: <SvgQuestionCircle width={20} height={20} />,
        SvgDisableCircle: <SvgDisableCircle width={20} height={20} />,
      },
      control: {
        type: 'select',
      },
      table: {
        category: 'PROPS',
      },
    },
    children: {
      description: '內容',
      table: {
        category: 'PROPS',
      },
    },
    size: {
      description: '尺寸',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
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
  args: {
    themeColor: 'success',
    variant: 'filled',
    children: 'Success',
    prefix: 'None',
    size: 'medium',
    className: '',
  },
  parameters: {
    docs: {
      title: 'StatusIndicator',
      description: {
        component: '狀態指示組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof StatusIndicator>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <StatusIndicator {...args}>{args.children}</StatusIndicator>;
  },
};

export const Theme: Story = {
  name: '主題色彩',
  args: {},
  render(args) {
    return (
      <div
        style={{
          width: '600px',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <StatusIndicator {...args} variant="filled" themeColor="info">
          Information
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="success">
          Success
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="warning">
          Warning
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="error">
          Error
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="neutral">
          Disable
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="info">
          Information{' '}
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="success">
          Success
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="warning">
          Warning
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="error">
          Error
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="neutral">
          Disable
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="filled"
          themeColor="info"
          prefix={<SvgInfoCircle width={20} height={20} />}
        >
          Information
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="filled"
          themeColor="success"
          prefix={<SvgSuccessCircle width={20} height={20} />}
        >
          Success
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="filled"
          themeColor="warning"
          prefix={<SvgWarningTri width={20} height={20} />}
        >
          Warning
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="filled"
          themeColor="error"
          prefix={<SvgErrorCircle width={20} height={20} />}
        >
          Error
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="filled"
          themeColor="neutral"
          prefix={<SvgDisableCircle width={20} height={20} />}
        >
          Disable
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="text"
          themeColor="info"
          prefix={<SvgInfoCircle width={20} height={20} />}
        >
          Information
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="text"
          themeColor="success"
          prefix={<SvgSuccessCircle width={20} height={20} />}
        >
          Success
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="text"
          themeColor="warning"
          prefix={<SvgWarningTri width={20} height={20} />}
        >
          Warning
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="text"
          themeColor="error"
          prefix={<SvgErrorCircle width={20} height={20} />}
        >
          Error
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="text"
          themeColor="neutral"
          prefix={<SvgDisableCircle width={20} height={20} />}
        >
          Disable
        </StatusIndicator>
      </div>
    );
  },
};
