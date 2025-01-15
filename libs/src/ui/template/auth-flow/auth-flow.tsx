import React, { ReactNode } from 'react';
import { Layout } from '@src/ui/section/layout';
import { Grid } from '@src/ui/section/grid/grid';
import { Title } from '@src/ui/element/title';
import { Divider } from '@src/ui/element/divider';

/**
 * @interface LoginProps
 * @description 定義登入元件的屬性。
 *
 * @property {string} [bgColorSrc] - 背景顏色的來源。
 * @property {string} [bgImgSrc] - 背景圖片的來源。
 * @property {string} title - 登入表單的標題。
 * @property {string} [description] - 登入表單的描述。
 * @property {ReactNode} form - 登入表單的 React 元素。
 * @property {ReactNode} externalLinks - 外部連結的 React 元素。
 * @property {ReactNode} signUp - 註冊連結的 React 元素。
 * @property {string} [className] - 自訂的 CSS 類別名稱。
 */
interface LoginProps {
  bgColorSrc?: string;
  bgImgSrc?: string;
  title: string;
  description?: ReactNode;
  form: ReactNode;
  externalLinks: ReactNode;
  signUp: ReactNode;
  className?: string;
}

export const AuthFLow: React.FC<LoginProps> = ({
  bgColorSrc = '',
  bgImgSrc = '',
  title = '',
  description = '',
  form = null,
  externalLinks = null,
  signUp = null,
  className = '',
}: LoginProps) => {
  const { Content } = Layout;
  const { Row, Column } = Grid;

  return (
    <Layout className={`h-screen ${className}`}>
      <Content>
        <Grid fluid={false}>
          <Row hasGap={false}>
            <Column md={12} lg={5}>
              <div
                style={{
                  backgroundImage: `url(${bgImgSrc})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                className="ded-login-bg"
              />
            </Column>

            <Column md={12} lg={7}>
              <div className="ded-login-content">
                {/* 標題描述 */}
                <Grid fluid>
                  <Row>
                    <Column md={12}>
                      <Title level={1}>{title}</Title>
                    </Column>
                  </Row>
                  {description && (
                    <Row>
                      <Column md={12}>
                        <p className="text-neutral-700">{description}</p>
                      </Column>
                    </Row>
                  )}
                </Grid>

                {/* 登入表單 */}
                {form && form}

                {/* 分隔線 */}
                {externalLinks && <Divider>Or</Divider>}

                {/* 第三方登入 */}
                {externalLinks && externalLinks}

                {/* 註冊連結 */}
                {signUp && signUp}
              </div>
            </Column>
          </Row>
        </Grid>
      </Content>
    </Layout>
  );
};
export default AuthFLow;
