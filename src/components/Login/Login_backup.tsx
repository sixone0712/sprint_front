import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Button, Checkbox, Form, Input } from 'antd';

const LoginBackup = () => {
  return (
    <div css={style}>
      <div className="signin__wrapper">
        <div className="signin__content">
          <div className="signin__top">
            <div className="name">Sign In</div>
          </div>
          <Form name="sign" initialValues={{ remember: true }} onFinish={() => {}}>
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" size="large" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            <Form.Item className="sign__remember">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="signup">
        <div className="signup__welcome">Welcome to Login</div>
        <div className="signup__account">Don't have an account?</div>
        <Button className="signup__button">Sing Up</Button>
      </div>
    </div>
  );
};

export default LoginBackup;

const style = css`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(-135deg, #c850c0, #4158d0);

  display: flex;

  .signin__wrapper {
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .signin__content {
      min-width: 30rem;
    }

    .signin__top {
      display: flex;
      .name {
        font-size: 1.5rem;
      }
      margin-bottom: 2rem;
    }

    .sign__remember {
      margin-top: 5rem;
      .ant-form-item-control-input-content {
        display: flex;

        justify-content: space-between;
      }
    }
  }

  .signup {
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
    /* width: 50%; */
    background-color: aliceblue;

    .signup__welcome {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    .signup__account {
      margin-bottom: 1rem;
    }
  }
`;
