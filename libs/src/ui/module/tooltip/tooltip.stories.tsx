import { Meta, StoryObj } from '@storybook/react';
import { Button, Tooltip } from '@src/ui';

export default {
  title: 'Design System/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '顯示內容',
    },
    content: {
      description: '提示內容',
    },
    showArrow: {
      description: '是否顯示箭頭',
    },
    placement: {
      description: '提示框位置',
      control: {
        type: 'select',
        options: [
          'top-left',
          'top',
          'top-right',
          'right-top',
          'right',
          'right-bottom',
          'bottom-right',
          'bottom',
          'bottom-left',
          'left-bottom',
          'left',
          'left-top',
        ],
      },
    },
    className: {
      description: '客製化樣式',
    },
  },
  parameters: {
    docs: {
      title: '提示工具',
      description: {
        component: '提示工具的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  name: '主要項目',
  args: {
    content: '請設定參數',
    children: '可操作參數',
    placement: 'top',
    className: '',
  },
  render(args) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <Tooltip {...args} showArrow content="提示內容" placement="top-left">
            <Button variant="outlined">送出</Button>
          </Tooltip>
          <Tooltip {...args} showArrow content="提示內容" placement="top">
            <Button variant="outlined">提交</Button>
          </Tooltip>
          <Tooltip {...args} showArrow content="提示內容" placement="top-right">
            <Button variant="outlined">刪除</Button>
          </Tooltip>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <Tooltip {...args} showArrow content="提示內容" placement="left">
            <Button variant="outlined">確認</Button>
          </Tooltip>
          <Tooltip {...args}>
            <Button variant="contained">{args.children || '可操作參數'}</Button>
          </Tooltip>
          <Tooltip {...args} showArrow content="提示內容" placement="right">
            <Button variant="outlined">取消</Button>
          </Tooltip>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <Tooltip
            {...args}
            showArrow
            content="提示內容"
            placement="bottom-left"
          >
            <Button variant="outlined">驗證</Button>
          </Tooltip>
          <Tooltip {...args} showArrow content="提示內容" placement="bottom">
            <Button variant="outlined">關閉</Button>
          </Tooltip>
          <Tooltip
            {...args}
            showArrow
            content="提示內容"
            placement="bottom-right"
          >
            <Button variant="outlined">提示</Button>
          </Tooltip>
        </div>
      </div>
    );
  },
};
