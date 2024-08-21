import './login.less'
import leftImg from '@/assets/images/login/banner-ico.png';
import logoImg from '@/assets/images/login/big-logo.png';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from "react-router-dom";

export default function() {
    const navigate = useNavigate()

  const success = () => {
      message.open({
        type: 'success',
        content: '恭喜你，登录成功！',
      });
  };
    const onFinish = (values) => {
  console.log('Success:', values);
  success()
  setTimeout(() => {
    navigate('/')
  }, 1000)
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
    return <>
        <section className='box'>
            <div className='left'>
                <img src={leftImg} alt="" />
            </div>
            <div className="right">
                <img src={logoImg} alt="" className="top" />
                <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
            </div>
        </section>
    </>
}