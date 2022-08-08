import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await axios.post(`/api/user/login`, values);
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to Home");

        // Store token in localStorage - in backend, 'data' is the token, hence 'response.data.data', not 'response.data.token
        localStorage.setItem("token", response.data.data);

        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Welcome Back!</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <Button className="primary-button my-2" htmlType="submit">
            Login
          </Button>
          <Link to="/register" className="anchor mt-2">
            Need to register?
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
