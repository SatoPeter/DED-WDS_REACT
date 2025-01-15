import { Button, Card, Title, LineProgress, Divider, List } from '@src/ui';
import { SvgMoreVert } from '@src/assets';

export interface AreaPowerCardProps {
  areaPower: { name: string; description: string };
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  percentage?: number;
  dataSource: { content: { label: string; value: string } }[];
}

export const AreaPowerCard = ({
  areaPower,
  themeColor,
  percentage = 0,
  dataSource,
}: AreaPowerCardProps) => {
  const getThemeColor = (themeColor: string) => {
    if (themeColor === 'secondary') return 'custom-secondary';
    if (themeColor === 'neutral') return 'custom-neutral';
    if (themeColor === 'info') return 'custom-info';
    if (themeColor === 'success') return 'custom-success';
    if (themeColor === 'warning') return 'custom-warning';
    if (themeColor === 'error') return 'custom-error';
    return 'custom-primary';
  };

  return (
    <Card hasHeaderDivider>
      <div>
        <div className="flex items-center justify-between">
          <Title level={4}>{areaPower.name}</Title>
          <Button
            themeColor="neutral"
            className="border-neutral-200 text-neutral-500"
            variant="ghost"
            prefix={<SvgMoreVert width={18} height={18} />}
            onClick={() => ({})}
          ></Button>
        </div>
        <Divider />
        <LineProgress
          percent={percentage}
          className={getThemeColor(themeColor || 'neutral')}
        />
        {dataSource.map((item, index) => (
          <div
            key={item.content.label}
            className="flex justify-between items-center border-b border-[#E9E9E9] py-2"
          >
            <Title className="text-[13px] text-[#AAAAAA]">
              {item.content.label}
            </Title>
            <Title className="text-[15px]">{item.content.value}</Title>
          </div>
        ))}
        {/* <List dataSource={dataSource} hasDivider /> */}
      </div>
    </Card>
  );
};

export default AreaPowerCard;
