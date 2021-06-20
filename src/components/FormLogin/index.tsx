import React, { memo } from 'react';
import './styles.css';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useSnackbar } from 'notistack';
import {useAuth} from '../../contexts/auth';
import { Redirect } from 'react-router-dom';

const FormLogin: React.FC<{}> = memo(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { Login } = useAuth();
  async function handleLogin(values: any) {
      try {
        await Login(values);
        enqueueSnackbar('Login realizado com sucesso', { 
            variant: 'success',
        });

        return <Redirect to='/upload' />
      } catch {
        enqueueSnackbar('Falha ao efetuar login', { 
            variant: 'error',
        });
      } finally {
      }
  }
 
  return (
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={handleLogin}
            // onFinishFailed={onFinishFailed}
          >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
          />
        </Form.Item>
        {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item> */}

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>
  );
});

export default FormLogin;
