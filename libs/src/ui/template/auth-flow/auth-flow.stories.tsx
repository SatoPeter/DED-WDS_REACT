import { Meta, StoryObj } from '@storybook/react';
import { AuthFLow } from './auth-flow';
import { Grid } from '@src/ui/section/grid/grid';
import { Row } from '@src/ui/section/grid/row';
import { Column } from '@src/ui/section/grid/column';
import { Button } from '@src/ui/element/button';
import { Input } from '@src/ui/element/input';
import { Title } from '@src/ui/element/title';
import { Checkbox } from '@src/ui/element/checkbox';
import loginBgColor from '@src/assets/login-bg-color.png';
import authBgImg from '@src/assets/auth-bg.png';
import {
  SvgAccount,
  SvgLock,
  SvgGoogle,
  SvgFacebook,
  SvgLine,
  SvgMail,
  SvgClock,
} from '@src/assets';

export default {
  title: 'Template/AuthFlow',
  component: AuthFLow,
  tags: ['autodocs'],
  argTypes: {
    form: {
      description: '表單',
      table: {
        category: 'SLOTS',
      },
    },
    externalLinks: {
      description: '外部連結',
      table: {
        category: 'SLOTS',
      },
    },
    signUp: {
      description: '註冊',
      table: {
        category: 'SLOTS',
      },
    },
    bgColorSrc: {
      description: '背景顏色',
      control: {
        type: 'text',
      },
      table: {
        category: 'PROPS',
      },
    },
    bgImgSrc: {
      description: '背景圖片',
      control: {
        type: 'text',
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
    description: {
      description: '描述',
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
  parameters: {
    docs: {
      title: '驗證流程',
      description: {
        component: '驗證流程的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof AuthFLow>;

export const Default: Story = {
  name: '登入',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Welcome Back',
    description: (
      <>
        <p className="text-neutral-600">
          Today is a new day. It's your day. You shape it.
        </p>
        <p className="text-neutral-600">
          Sign in to start managing your projects.
        </p>
      </>
    ),
    form: (
      <div>
        <Grid fluid>
          <Row>
            <Column md={12}>
              <Input
                className="text-primary"
                type="text"
                prefix={<SvgMail />}
                initValue=""
                label="Email"
                placeholder="Email"
              />
            </Column>

            <Column md={12}>
              <Input
                className="text-primary"
                type="password"
                prefix={<SvgLock />}
                initValue=""
                label="Password"
                placeholder="Password"
              />
            </Column>

            <Column md={12} className="flex justify-between items-center">
              <Button
                onClick={() => ({})}
                className="text-neutral-600"
                variant="text"
              >
                Forgot Password?
              </Button>

              <Checkbox
                initValue={[]}
                dataSource={[
                  { label: 'Remember me', value: '1', isDisabled: false },
                ]}
              ></Checkbox>
            </Column>

            <Column md={12}>
              <Button onClick={() => ({})} variant="filled" width="fluid">
                Login
              </Button>
            </Column>
          </Row>
        </Grid>
      </div>
    ),
    externalLinks: (
      <Grid fluid>
        <Row justify="center">
          <Column md={12} className="flex gap-4 justify-center">
            <Button
              className="ded-custom-icon"
              onClick={() => ({})}
              variant="ghost"
              prefix={<SvgGoogle width={30} height={30} />}
            />
            <Button
              className="ded-custom-icon"
              onClick={() => ({})}
              variant="ghost"
              prefix={<SvgFacebook width={30} height={30} />}
            />
            <Button
              className="ded-custom-icon"
              onClick={() => ({})}
              variant="ghost"
              prefix={<SvgLine width={30} height={30} />}
            />
          </Column>
        </Row>
      </Grid>
    ),
    signUp: (
      <Grid fluid>
        <Row>
          <Column md={12} align="center">
            <span className="text-neutral-300">Don't have an account?</span>
            <Button className="text-link" onClick={() => ({})} variant="text">
              Sign up
            </Button>
          </Column>
        </Row>
      </Grid>
    ),
  },
  render(args) {
    return <AuthFLow {...args} />;
  },
};

export const SignUp: Story = {
  name: '註冊',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Sign Up',
    form: (
      <>
        <Grid fluid>
          <Row>
            <Column md={12}>
              <Input
                className="text-primary"
                type="text"
                prefix={<SvgMail />}
                initValue=""
                label="Email"
                placeholder="type email"
              />
            </Column>

            <Column md={12}>
              <Input
                className="text-primary"
                type="password"
                prefix={<SvgLock />}
                initValue=""
                label="Password"
                placeholder="type password"
              />
            </Column>

            <Column md={12}>
              <Input
                className="text-primary"
                type="password"
                prefix={<SvgLock />}
                initValue=""
                label="Password Confirm"
                placeholder="type password"
              />
            </Column>

            <Column md={12}>
              <div className="flex flex-wrap items-center">
                <Checkbox
                  initValue={[]}
                  dataSource={[{ label: '', value: '1', isDisabled: false }]}
                />
                <span className="ml-1 text-neutral-600">
                  I agree to all the
                </span>
                <Button onClick={() => ({})} className="" variant="text">
                  Terms
                </Button>
                <span className="text-neutral-600">and</span>
                <Button onClick={() => ({})} className="" variant="text">
                  Privacy Policies
                </Button>
              </div>
            </Column>
          </Row>
        </Grid>

        <Grid fluid>
          <Row justify="flex-end">
            <Column md={6}>
              <Button onClick={() => ({})} variant="soft" width="fluid">
                Back
              </Button>
            </Column>

            <Column md={6}>
              <Button onClick={() => ({})} variant="filled" width="fluid">
                Sign Up
              </Button>
            </Column>
          </Row>
        </Grid>
      </>
    ),
    externalLinks: (
      <Grid fluid>
        <Row justify="center">
          <Column md={12} className="flex gap-4 justify-center">
            <Button
              className="ded-custom-icon"
              onClick={() => ({})}
              variant="ghost"
              prefix={<SvgGoogle width={30} height={30} />}
            />
            <Button
              className="ded-custom-icon"
              onClick={() => ({})}
              variant="ghost"
              prefix={<SvgFacebook width={30} height={30} />}
            />
            <Button
              className="ded-custom-icon"
              onClick={() => ({})}
              variant="ghost"
              prefix={<SvgLine width={30} height={30} />}
            />
          </Column>
        </Row>
      </Grid>
    ),
    signUp: (
      <Grid fluid>
        <Row>
          <Column md={12} align="center">
            <span className="text-neutral-300">Don't have an account?</span>
            <Button className="text-link" onClick={() => ({})} variant="text">
              Sign up
            </Button>
          </Column>
        </Row>
      </Grid>
    ),
  },
  render(args) {
    return <AuthFLow {...args} />;
  },
};

export const Forgot: Story = {
  name: '忘記密碼',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Forgot Your Password?',
    description: (
      <p className="text-neutral-600">
        Type in your registered email address to reset password
      </p>
    ),
    form: (
      <div className="ded-login-content-form">
        <Grid fluid>
          <Row justify="flex-end">
            <Column md={12}>
              <Input
                className="text-primary"
                type="text"
                prefix={<SvgMail />}
                initValue=""
                label="Email Address"
                placeholder="type email"
                hint={{ description: 'Description', error: '' }}
              />
            </Column>

            <Column sm={12}>
              <Button onClick={() => ({})} width="fluid" variant="filled">
                Submit
              </Button>
            </Column>
          </Row>
        </Grid>
      </div>
    ),
  },
  render(args) {
    return <AuthFLow {...args} />;
  },
};

export const Verify: Story = {
  name: '驗證代碼',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Verify Code',
    description: (
      <p className="text-neutral-600">
        An authentication code has been sent to your email.
      </p>
    ),
    form: (
      <div className="ded-login-content-form">
        <Grid fluid>
          <Row justify="flex-end">
            <Column md={12}>
              <div className="flex items-center justify-center gap-2">
                <Title level={2}>A</Title>
                <Title level={2}>-</Title>
                <Input
                  type="text"
                  hasClear={false}
                  maxLimit={1}
                  initValue=""
                  className="w-[44px] h-[44px] text-center text-primary text-xl"
                  placeholder=""
                />
                <Input
                  type="text"
                  hasClear={false}
                  maxLimit={1}
                  initValue=""
                  className="w-[44px] h-[44px] text-center text-primary text-xl"
                  placeholder=""
                />
                <Input
                  type="text"
                  hasClear={false}
                  maxLimit={1}
                  initValue=""
                  className="w-[44px] h-[44px] text-center text-primary text-xl"
                  placeholder=""
                />
                <Input
                  type="text"
                  hasClear={false}
                  maxLimit={1}
                  initValue=""
                  className="w-[44px] h-[44px] text-center text-primary text-xl"
                  placeholder=""
                />
                <Input
                  type="text"
                  hasClear={false}
                  maxLimit={1}
                  initValue=""
                  className="w-[44px] h-[44px] text-center text-primary text-xl"
                  placeholder=""
                />

                <Input
                  type="text"
                  hasClear={false}
                  maxLimit={1}
                  initValue=""
                  className="w-[44px] h-[44px] text-center text-primary text-xl"
                  placeholder=""
                />
              </div>
            </Column>

            <Column sm={6}>
              <Button
                onClick={() => ({})}
                variant="soft"
                width="fluid"
                prefix={<SvgClock width={18} height={18} />}
              >
                Resend 03:28
              </Button>
            </Column>
            <Column sm={6}>
              <Button onClick={() => ({})} variant="filled" width="fluid">
                Verify
              </Button>
            </Column>
          </Row>
        </Grid>
      </div>
    ),
  },
  render(args) {
    return <AuthFLow {...args} />;
  },
};

export const Password: Story = {
  name: '設定密碼',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Set a Password',
    description: <p>Please set a new password for your account.</p>,
    form: (
      <div className="ded-login-content-form">
        <Grid fluid>
          <Row justify="flex-end">
            <Column md={12}>
              <Input
                className="text-primary"
                type="password"
                prefix={<SvgLock />}
                initValue=""
                label="Password"
                placeholder="type password"
              />
            </Column>

            <Column md={12}>
              <Input
                className="text-primary"
                type="password"
                prefix={<SvgLock />}
                initValue=""
                label="Password Confirm"
                placeholder="type password"
              />
            </Column>

            <Column sm={6}>
              <Button onClick={() => ({})} variant="soft" width="fluid">
                Reset
              </Button>
            </Column>

            <Column sm={6}>
              <Button onClick={() => ({})} variant="filled" width="fluid">
                Confirm
              </Button>
            </Column>
          </Row>
        </Grid>
      </div>
    ),
  },
  render(args) {
    return <AuthFLow {...args} />;
  },
};
