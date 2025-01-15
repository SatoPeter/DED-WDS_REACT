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

const menuData: ItemProps[] = [
  {
    title: 'Home',
    prefix: <SvgHome width={24} height={24} />,
    path: '/Home',
  },
  {
    title: 'User',
    prefix: <SvgUser width={24} height={24} />,
    path: '/User',
    children: [
      {
        title: 'Profile',
        path: '/settings/profile',
      },
      {
        title: 'Account',
        path: '/settings/account',
      },
    ],
  },
  {
    title: 'Chart',
    prefix: <SvgBarChart width={24} height={24} />,
    path: '/Chart',
    children: [
      {
        title: 'Profile',
        path: '/settings/profile',
      },
      {
        title: 'Account',
        path: '/settings/account',
      },
      {
        title: 'Account',
        path: '/settings/account',
      },
      {
        title: 'Account',
        path: '/settings/account',
      },
    ],
  },
  {
    title: 'Database',
    prefix: <SvgDatabase width={24} height={24} />,
    path: '/dashboard',
  },
  {
    title: 'Favorite',
    prefix: <SvgFavorite width={24} height={24} />,
    path: '/Favorite',
  },
  {
    title: 'Calendar',
    prefix: <SvgCalendar width={24} height={24} />,
    path: '/Calendar',
  },
  {
    title: 'Notification',
    prefix: <SvgNotification width={24} height={24} />,
    path: '/Notification',
  },
  {
    title: 'Language',
    prefix: <SvgLanguage width={24} height={24} />,
    path: '/Language',
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
    logo: <SvgAuo width={90} height={30} />,
    logoLink: 'https://www.auo.com',
    hasLogo: false,
    hasSearch: true,
    dataSource: menuData,
    className: '',
  },
  parameters: {
    docs: {
      title: 'Side Nav',
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
      title: 'Home'
    },
    {
      children: [
        {
          path: '/settings/profile',
          title: 'Profile'
        },
        {
          path: '/settings/account',
          title: 'Account'
        }
      ],
      path: '/User',
      prefix: <SvgUser height={24} width={24}/>,
      title: 'User'
    },
    {
      children: [
        {
          path: '/settings/profile',
          title: 'Profile'
        },
        {
          path: '/settings/account',
          title: 'Account'
        },
        {
          path: '/settings/account',
          title: 'Account'
        },
        {
          path: '/settings/account',
          title: 'Account'
        }
      ],
      path: '/Chart',
      prefix: <SvgBarChart height={24} width={24}/>,
      title: 'Chart'
    },
    {
      path: '/dashboard',
      prefix: <SvgDatabase height={24} width={24}/>,
      title: 'Database'
    },
    {
      path: '/Favorite',
      prefix: <SvgFavorite height={24} width={24}/>,
      title: 'Favorite'
    },
    {
      path: '/Calendar',
      prefix: <SvgCalendar height={24} width={24}/>,
      title: 'Calendar'
    },
    {
      path: '/Notification',
      prefix: <SvgNotification height={24} width={24}/>,
      title: 'Notification'
    },
    {
      path: '/Language',
      prefix: <SvgLanguage height={24} width={24}/>,
      title: 'Language'
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
