import { Meta, StoryObj } from '@storybook/react';
import { Toast, Button, Title } from '@src/ui';
import { StoryContext } from 'storybook/internal/types';
import { getCombinedClassName } from '@src/utils/string';
import {
  SvgClose,
  SvgInfoCircle,
  SvgSuccessCircle,
  SvgWarningTri,
  SvgErrorCircle,
  SvgQuestionCircle,
  SvgDisableCircle,
} from '@src/assets';
import { useToast } from '@src/hooks';
import { ac } from 'react-router/dist/development/route-data-aSUFWnQ6';

export default {
  title: 'Component/Toast',
  component: Toast,
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
    title: {
      description: '標題',
      table: {
        category: 'PROPS',
      },
    },
    content: {
      description: '內容',
      table: {
        category: 'PROPS',
      },
    },
    action: {
      description: '操作',
      table: {
        category: 'PROPS',
      },
    },
    prefix: {
      description: '前綴',
      options: [
        'SvgInfoCircle',
        'SvgSuccessCircle',
        'SvgWarningTri',
        'SvgErrorCircle',
      ],
      mapping: {
        SvgInfoCircle: <SvgInfoCircle />,
        SvgSuccessCircle: <SvgSuccessCircle />,
        SvgWarningTri: <SvgWarningTri />,
        SvgErrorCircle: <SvgErrorCircle />,
      },
      table: {
        category: 'PROPS',
      },
    },
    duration: {
      description: '持續時間',
      control: {
        type: 'range',
        step: 100,
        min: 0,
        max: 5000,
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
    onClose: {
      description: '關閉事件',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    themeColor: 'success',
    onClose: () => window.alert('close'),
    title: 'Notification Title ',
    content: 'Content',
    action: <div onClick={() => window.alert('action')}>Action</div>,
    prefix: <SvgSuccessCircle width={18} height={18} />,
    duration: 500,
    className: '',
  },
  parameters: {
    docs: {
      title: 'Toast',
      description: {
        component: '通知訊息組件的呈現及說明。',
      },
      source: {
        transform(code: string, storyContext: StoryContext) {
          const { args } = storyContext;

          return `
<Toast themeColor=${args.themeColor} title=${args.title} content=${args.content} prefix=${args.prefix} />
`;
        },
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  name: '預設項目',
  args: {
    action: <div onClick={() => window.alert('action')}>Action</div>,
  },
  render(args) {
    const {
      themeColor,
      title,
      content,
      action,
      prefix,
      onClose = () => ({}),
      className,
    } = args;
    return (
      <div
        className={`ded-toast 
        ${getCombinedClassName('ded-toast', `border-${themeColor}`)} 
        ${className}`}
      >
        <Button
          variant="text"
          onClick={onClose}
          themeColor="neutral"
          className="ded-close-button"
        >
          <SvgClose width={18} height={18} onClick={onClose} />
        </Button>

        <div className={`ded-toast-header`}>
          <div
            className={`ded-toast-header-message 
          ${getCombinedClassName(
            'ded-toast-header-message',
            themeColor || 'primary'
          )}
        `}
          >
            {prefix}
            <Title level={5} themeColor={themeColor}>
              {title}
            </Title>
          </div>
          {action && <div className="ded-toast-header-action">{action}</div>}
        </div>
        <p className="ded-description">{content}</p>
      </div>
    );
  },
};

export const Type: Story = {
  name: '通知訊息類型',
  args: {
    action: <div onClick={() => window.alert('action')}>Action</div>,
  },
  render(args) {
    const {
      title,
      content,
      action,
      prefix,
      onClose = () => ({}),
      className,
    } = args;
    return (
      <>
        <div
          className={`ded-toast 
        ${getCombinedClassName('ded-toast', `border-success`)} 
        ${className}`}
        >
          <Button
            variant="text"
            onClick={onClose}
            themeColor="neutral"
            className="ded-close-button"
          >
            <SvgClose width={18} height={18} onClick={onClose} />
          </Button>
          <div className={`ded-toast-header`}>
            <div className="ded-toast-header-message ded-toast-header-message-success">
              <SvgSuccessCircle width={18} height={18} />
              <Title level={5} themeColor="success">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div
          className={`ded-toast 
            ${getCombinedClassName('ded-toast', `border-warning`)}  
            ${className}`}
        >
          <Button
            variant="text"
            onClick={onClose}
            themeColor="neutral"
            className="ded-close-button"
          >
            <SvgClose width={18} height={18} onClick={onClose} />
          </Button>
          <div className={`ded-toast-header`}>
            <div className="ded-toast-header-message ded-toast-header-message-warning">
              <SvgWarningTri width={18} height={18} />
              <Title level={5} themeColor="warning">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div
          className={`ded-toast
            ${getCombinedClassName('ded-toast', `border-error`)}  
            ${className}`}
        >
          <Button
            variant="text"
            onClick={onClose}
            themeColor="neutral"
            className="ded-close-button"
          >
            <SvgClose width={18} height={18} onClick={onClose} />
          </Button>
          <div className={`ded-toast-header`}>
            <div className="ded-toast-header-message ded-toast-header-message-error">
              <SvgErrorCircle width={18} height={18} />
              <Title level={5} themeColor="error">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div
          className={`ded-toast
            ${getCombinedClassName('ded-toast', `border-info`)}
            ${className}`}
        >
          <Button
            variant="text"
            onClick={onClose}
            themeColor="neutral"
            className="ded-close-button"
          >
            <SvgClose width={18} height={18} onClick={onClose} />
          </Button>
          <div className={`ded-toast-header`}>
            <div className="ded-toast-header-message ded-toast-header-message-info">
              <SvgInfoCircle width={18} height={18} />
              <Title level={5} themeColor="info">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>

          <p className="ded-description">{content}</p>
        </div>

        <div
          className={`ded-toast
            ${getCombinedClassName('ded-toast', `border-neutral`)}
            ${className}`}
        >
          <Button
            variant="text"
            onClick={onClose}
            themeColor="neutral"
            className="ded-close-button"
          >
            <SvgClose width={18} height={18} onClick={onClose} />
          </Button>
          <div className={`ded-toast-header`}>
            <div className="ded-toast-header-message ded-toast-header-message-neutral">
              <SvgDisableCircle width={18} height={18} />
              <Title level={5} themeColor="info">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>

          <p className="ded-description">{content}</p>
        </div>
      </>
    );
  },
};

export const Demo: Story = {
  name: '互動模式',
  args: {
    themeColor: 'success',
    onClose: () => window.alert('close'),
    title: 'Notification title ',
    content: 'Content',
    action: <div onClick={() => window.alert('action')}>Action</div>,
    prefix: <SvgInfoCircle width={18} height={18} />,
    duration: 1000,
    className: '',
  },
  render: function Render(args) {
    const { addToast, ToastContainer } = useToast();

    const handleShowToast = () => {
      addToast({
        themeColor: args?.themeColor || 'success',
        title: args?.title || 'Title',
        content: args?.content || 'Content',
        action: args?.action || <div>Action</div>,
        prefix: args?.prefix || <SvgErrorCircle width={18} height={18} />,
        duration: args?.duration,
      });
    };

    return (
      <>
        <Button onClick={handleShowToast} variant="filled">
          Open Dialog
        </Button>
        <ToastContainer />
      </>
    );
  },
};
