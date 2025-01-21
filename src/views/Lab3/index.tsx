import './style.scss';

import { Layout, Navbar } from '@src/ui';
import { useNavigate } from 'react-router';

const NavbarItems = [
  {
    path: '#products',
    label: 'Products',
    order: 1,
  },
  {
    path: '#solutions',
    label: 'Solutions',
    order: 2,
  },
  {
    path: '#about',
    label: 'About',
    order: 3,
  },
  {
    path: '#technologies',
    label: 'Technologies',
    order: 4,
  },
];

export const Lab3 = () => {
  const { Header, Content } = Layout;
  const navigate = useNavigate();

  return (
    <Layout className="">
      <Header>
        <Navbar
          className=""
          dataSource={NavbarItems}
          logoSrc="https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg"
          onSearch={() => {}}
        />
      </Header>
      <Content>
        <div
          style={{
            alignItems: 'center',
            backgroundColor: '#0958d9',
            color: '#fff',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            width: '100%',
            fontSize: '24px',
          }}
        >
          content
        </div>
      </Content>
    </Layout>
  );
};
