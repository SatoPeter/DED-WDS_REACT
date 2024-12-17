import { Meta, StoryObj } from '@storybook/react';
import { Stepper, Button } from '@src/ui';
import { useArgs } from '@storybook/preview-api';

const steps = [
  { title: 'Step 1', desc: 'Description', content: 'Content for Step 1' },
  { title: 'Step 2', desc: 'Description', content: 'Content for Step 2' },
  { title: 'Step 3', desc: 'Description', content: 'Content for Step 3' },
];

export default {
  title: 'Component/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    steps: {
      description: '步驟列表',
    },
    currentStep: {
      description: '當前步驟（從 0 開始）',
      control: {
        type: 'number',
        min: 0,
        max: steps.length - 1,
      },
    },
    direction: {
      description: '方向',
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
    },
    className: {
      description: '客製化樣式',
    },
  },
  args: {
    steps,
    currentStep: 1,
    className: '',
  },
  parameters: {
    docs: {
      title: 'Stepper',
      description: {
        component: '步驟導航組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render: function Render(args) {
    return (
      <Stepper
        {...args}
        steps={args.steps || []}
        currentStep={args.currentStep ?? 0}
      />
    );
  },
};

export const HorizontalDemo: Story = {
  name: '橫向互動模式',
  args: {
    className: '',
  },
  render: function Render(args) {
    const [{ currentStep }, updateArgs] = useArgs();

    return (
      <>
        <Stepper
          {...args}
          steps={args.steps || []}
          currentStep={args.currentStep ?? 0}
          direction="horizontal"
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '8px',
            marginTop: '16px',
          }}
        >
          <Button
            onClick={() => {
              updateArgs({ currentStep: Math.max(0, (currentStep || 0) - 1) });
            }}
            variant="filled"
            isDisabled={currentStep <= 0}
          >
            Previous
          </Button>
          <Button
            onClick={() => {
              updateArgs({
                currentStep: Math.min(
                  (steps?.length || 0) - 1,
                  (currentStep || 0) + 1
                ),
              });
            }}
            variant="filled"
            isDisabled={currentStep >= steps.length - 1}
          >
            Next
          </Button>
        </div>
      </>
    );
  },
};

export const VerticalDemo: Story = {
  name: '直向互動模式',
  args: {},
  render: function Render(args) {
    const [{ currentStep }, updateArgs] = useArgs();

    return (
      <>
        <Stepper
          {...args}
          steps={args.steps || []}
          currentStep={args.currentStep ?? 0}
          direction="vertical"
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '8px',
            marginTop: '16px',
          }}
        >
          <Button
            onClick={() => {
              updateArgs({ currentStep: Math.max(0, (currentStep || 0) - 1) });
            }}
            variant="filled"
            isDisabled={currentStep <= 0}
          >
            Previous
          </Button>
          <Button
            onClick={() => {
              updateArgs({
                currentStep: Math.min(
                  (steps?.length || 0) - 1,
                  (currentStep || 0) + 1
                ),
              });
            }}
            variant="filled"
            isDisabled={currentStep >= steps.length - 1}
          >
            Next
          </Button>
        </div>
      </>
    );
  },
};
