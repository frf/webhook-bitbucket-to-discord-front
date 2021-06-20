import React, { memo } from 'react';
import './styles.css';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useSnackbar } from 'notistack';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';

const FormRegister: React.FC<{}> = memo(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  async function handleLogin(values: any) {
      try {
        const response = await api.post('/auth/register', values);

        localStorage.setItem('@App:access_token', response.data.access_token);
        localStorage.setItem('@App:refresh_token', response.data.refresh_token);

        enqueueSnackbar('Login realizado com sucesso', { 
            variant: 'success',
        });

        return <Redirect to='/webhooks' />
      } catch {
        enqueueSnackbar('Error login', { 
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
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
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

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
        </Form.Item>
      </Form>
  );
});

export default FormRegister;
