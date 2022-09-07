import { Form, Row, Col, Input } from "antd";
import React from "react";
import Layout from "../components/Layout";

function ApplyDoctor() {
  return (
    <Layout>
      <h1 className="page-title">Apply as a Doctor</h1>

      <Form layout="vertical">
        <Row>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="First Name"
              name="firstName"
              rules={[{ required: true }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
          </Col>

          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Last Name"
              name="lastName"
              rules={[{ required: true }]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </Col>

          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Phone Number"
              name="phoneNumber"
              rules={[{ required: true }]}
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
          </Col>

          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Website"
              name="website"
              rules={[{ required: false }]}
            >
              <Input placeholder="www.yourwebsitehere.com" />
            </Form.Item>
          </Col>

          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              required
              label="Business Address"
              name="address"
              rules={[{ required: true }]}
            >
              <Input placeholder="Business Address" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
}

export default ApplyDoctor;
