import { Meta, StoryContext, StoryObj } from '@storybook/react';
import {
  SvgHome,
  SvgAuo,
  SvgUser,
  SvgLanguage,
  SvgFavorite,
  SvgDatabase,
  SvgCalendar,
  SvgBarChart,
  SvgNotification,
} from '@src/assets';
import { ItemProps } from '@src/hooks/useMenu';
import SideNav from './side-nav';
import { Grid, Row, Column } from '@src/ui/section/grid';
import { has } from 'lodash';

const menuData: ItemProps[] = [
  {
    label: 'Home',
    prefix: <SvgHome width={24} height={24} />,
    path: '/Home',
    order: 1,
  },
  {
    label: 'User',
    prefix: <SvgUser width={24} height={24} />,
    path: '/User',
    order: 2,
    children: [
      {
        label: 'Profile',
        path: '/settings/profile',
        order: 1,
      },
      {
        label: 'Account',
        path: '/settings/account',
        order: 2,
      },
    ],
  },
  {
    label: 'Chart',
    prefix: <SvgBarChart width={24} height={24} />,
    path: '/Chart',
    order: 3,
    children: [
      {
        label: 'Profile',
        path: '/settings/profile',
        order: 1,
      },
      {
        label: 'Account',
        path: '/settings/account',
        order: 2,
      },
      {
        label: 'Account',
        path: '/settings/account',
        order: 3,
      },
      {
        label: 'Account',
        path: '/settings/account',
        order: 4,
      },
    ],
  },
  {
    label: 'Database',
    prefix: <SvgDatabase width={24} height={24} />,
    path: '/dashboard',
    order: 4,
  },
  {
    label: 'Favorite',
    prefix: <SvgFavorite width={24} height={24} />,
    path: '/Favorite',
    order: 5,
  },
  {
    label: 'Calendar',
    prefix: <SvgCalendar width={24} height={24} />,
    path: '/Calendar',
    order: 6,
  },
  {
    label: 'Notification',
    prefix: <SvgNotification width={24} height={24} />,
    path: '/Notification',
    order: 7,
  },
  {
    label: 'Language',
    prefix: <SvgLanguage width={24} height={24} />,
    path: '/Language',
    order: 8,
  },
];

export default {
  title: 'Component/SideNav',
  component: SideNav,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '背景顏色',
      mapping: {
        Blue: '#00467C',
        Yellow: '#F4E069',
        Grape: '#AB86D1',
        Black: '#000000',
      },
      options: ['Blue', 'Yellow', 'Grape', 'Black'],
      control: {
        type: 'select',
      },
      table: {
        category: 'PROPS',
      },
    },
    logo: {
      description: 'Logo 圖示',
      mapping: {
        SvgAuo: <SvgAuo width={90} height={30} />,
      },
      options: ['SvgAuo'],
      control: {
        type: 'select',
      },
      table: {
        category: 'PROPS',
      },
    },
    logoSrc: {
      description: 'Logo 圖片',
      table: {
        category: 'PROPS',
      },
    },
    hasRWD: {
      description: '是否有側邊導覽',
      table: {
        category: 'PROPS',
      },
    },
    logoLink: {
      description: 'Logo 連結',
      table: {
        category: 'PROPS',
      },
    },
    hasLogo: {
      description: '是否有 Logo',
      table: {
        category: 'PROPS',
      },
    },
    hasSearch: {
      description: '是否有搜尋欄',
      table: {
        category: 'PROPS',
      },
    },
    dataSource: {
      description: '資料來源',
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
    themeColor: 'Blue',
    logoSrc: '',
    logo: <SvgAuo width={90} height={30} />,
    logoLink: 'https://www.auo.com',
    hasRWD: false,
    hasLogo: false,
    hasSearch: true,
    dataSource: menuData,
    className: '',
  },
  parameters: {
    docs: {
      label: 'Side Nav',
      description: {
        component: '側邊導覽組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof SideNav>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const { args } = storyContext;
          return `
<SideNav className="" 
dataSource={[
    {
      path: '/Home',
      prefix: <SvgHome height={24} width={24}/>,
      label: 'Home'
    },
    {
      children: [
        {
          path: '/settings/profile',
          label: 'Profile'
        },
        {
          path: '/settings/account',
          label: 'Account'
        }
      ],
      path: '/User',
      prefix: <SvgUser height={24} width={24}/>,
      label: 'User'
    },
    {
      children: [
        {
          path: '/settings/profile',
          label: 'Profile'
        },
        {
          path: '/settings/account',
          label: 'Account'
        },
        {
          path: '/settings/account',
          label: 'Account'
        },
        {
          path: '/settings/account',
          label: 'Account'
        }
      ],
      path: '/Chart',
      prefix: <SvgBarChart height={24} width={24}/>,
      label: 'Chart'
    },
    {
      path: '/dashboard',
      prefix: <SvgDatabase height={24} width={24}/>,
      label: 'Database'
    },
    {
      path: '/Favorite',
      prefix: <SvgFavorite height={24} width={24}/>,
      label: 'Favorite'
    },
    {
      path: '/Calendar',
      prefix: <SvgCalendar height={24} width={24}/>,
      label: 'Calendar'
    },
    {
      path: '/Notification',
      prefix: <SvgNotification height={24} width={24}/>,
      label: 'Notification'
    },
    {
      path: '/Language',
      prefix: <SvgLanguage height={24} width={24}/>,
      label: 'Language'
    }
  ]}
  hasSearch
  logo={<SvgAuo height={30} width={90}/>}
  logoLink="https://www.auo.com"
  themeColor="#00467C"/>
`;
        },
      },
    },
  },
  render(args) {
    return (
      <Grid fluid>
        <Row>
          <Column xs={12} sm={4} md={4}>
            <SideNav {...args} />
          </Column>
        </Row>
      </Grid>
    );
  },
};
