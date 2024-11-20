import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import Card from './card';
import { Title, Button, LineProgress, List, SliderControl } from '@src/ui';
import {
  LockIcon,
  PlusIcon,
  MinusIcon,
  PowerIcon,
  AirIcon,
  FanIcon,
  LightIcon,
  HumidityIcon,
  TemperatureIcon,
  DoorIcon,
} from '@src/assets';

export default {
  title: 'Component/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    width: {
      description: '卡片寬度',
      table: {
        category: 'PROPS',
      },
    },
    height: {
      description: '卡片高度',
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
      title: '卡片',
      description: {
        component: '卡片的呈現及說明。',
      },
    },
  },
  args: {
    width: '',
    height: '',
    cardHeader: '',
    hasHeaderDivider: false,
    children: '',
    cardFooter: '',
    className: '',
    onClick: action('onClick'),
  },
} as Meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          gap: '16px',
          backgroundColor: '#E9E9E9',
          padding: '16px',
        }}
      >
        <Card
          {...args}
          cardHeader={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Title className="ded-card-title" themeColor="primary">
                空調
              </Title>
              <Button variant="text">
                <div
                  style={{
                    display: 'flex',
                    padding: '8px',
                    borderRadius: '18px',
                    backgroundColor: '#4D4D4D',
                    color: '#ffffff',
                    width: '32px',
                    height: '32px',
                  }}
                >
                  {<PowerIcon />}
                </div>
              </Button>
            </div>
          }
          cardFooter={
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button
                className="ded-card-button ded-card-button-active"
                variant="contained"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <AirIcon fill="#ffffff" width={42} height={42} />
                  <div>冷氣</div>
                </div>
              </Button>
              <Button
                className="ded-card-button"
                variant="contained"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <FanIcon fill="#ffffff" width={42} height={42} />
                  <div>送風</div>
                </div>
              </Button>

              <div className="ded-card-button ded-card-button-empty"></div>

              <Button
                className="ded-card-button ded-card-button-active"
                variant="contained"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  自動
                </div>
              </Button>
              <Button
                className="ded-card-button"
                variant="contained"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  強
                </div>
              </Button>
              <Button
                className="ded-card-button"
                variant="contained"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  中
                </div>
              </Button>
              <Button
                className="ded-card-button"
                variant="contained"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  弱
                </div>
              </Button>
            </div>
          }
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#533bd4',
              gap: '8px',
            }}
          >
            <SliderControl
              initValue={0}
              themeColor="warning"
              unit="℃"
              prefix={<MinusIcon fill="#fff" width={24} height={24} />}
              suffix={<PlusIcon fill="#fff" width={24} height={24} />}
            />
          </div>
        </Card>

        <Card {...args} width="242px" height="auto">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <TemperatureIcon fill="#ffffff" width={80} height={80} />
            <Title className="ded-card-title">溫度 25 ℃</Title>
          </div>
        </Card>

        <Card {...args} width="242px" height="auto">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <HumidityIcon fill="#ffffff" width={66} height={66} />
            <Title className="ded-card-title">濕度 75 ℃</Title>
          </div>
        </Card>

        {[
          {
            label: '電控玻璃',
            status: '霧面',
            prefix: <DoorIcon fill="#ffffff" width={80} height={80} />,
          },
          {
            label: '門鎖',
            status: '已上鎖',
            prefix: <LockIcon fill="#ffffff" width={80} height={80} />,
          },
          {
            label: '照明群組',
            status: '0個開, 3個關',
            prefix: <LightIcon fill="#ffffff" width={80} height={80} />,
          },
        ].map((device) => (
          <Card
            {...args}
            width="242px"
            height="244px"
            cardHeader={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Title className="ded-card-title" themeColor="primary">
                  {device.label}
                </Title>
                <Button variant="text" themeColor="primary">
                  <div
                    style={{
                      display: 'flex',
                      padding: '8px',
                      borderRadius: '18px',
                      backgroundColor: '#ffffff',
                      color: '#4d4d4d',
                      width: '32px',
                      height: '32px',
                    }}
                  >
                    {<PowerIcon />}
                  </div>
                </Button>
              </div>
            }
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#533bd4',
                gap: '8px',
              }}
            >
              {device.prefix}
              <Title className="ded-card-feature">{device.status}</Title>
            </div>
          </Card>
        ))}
      </div>
    );
  },
};
