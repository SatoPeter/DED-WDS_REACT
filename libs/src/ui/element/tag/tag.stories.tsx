import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import Tag from './tag';
import {
  AccountIcon,
  SearchIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from '@src/assets';

export default {
  title: 'Design System/Element/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    isDisabled: {
      description: '是否禁用',
    },
    icon: {
      description: '圖式',
      options: ['None', 'Account', 'Search', 'Visibility', 'VisibilityOff'],
      mapping: {
        None: null,
        Account: <AccountIcon />,
        Search: <SearchIcon />,
        Visibility: <VisibilityIcon />,
        VisibilityOff: <VisibilityOffIcon />,
      },
    },
    closable: {
      description: '是否可關閉',
    },
    closeIcon: {
      description: '關閉圖式',
    },
    className: {
      description: '客製化樣式',
    },
    onClick: {
      description: '點擊事件',
    },
  },
  parameters: {
    docs: {
      title: '搜尋',
      description: {
        component: '標籤的呈現及說明。',
      },
    },
  },
} as Meta;
/* 設定組件類型 */
type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  name: '搜尋輸入框',
  args: {
    closable: true,
    isDisabled: false,
    className: '',
    onClose: action('onClick'),
  },
  render(args) {
    const forMap = [111, 222, 333, 444, 555];
    return (
      <div style={{ display: 'flex', gap: '8px' }}>
        {forMap.map((item) => (
          <Tag {...args}>{item}</Tag>
        ))}
      </div>
    );
  },
};
