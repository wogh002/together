import React, { useState } from "react";
import { Form, Button, Input, Select, Radio } from "antd";

import "antd/dist/antd.css";

// @ts-ignore
import { CardForm, CardItem } from "./index.ts";

const { Option } = Select;

const AddPost = (props: any) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <div
      style={{
        padding: "20px 40px",
        display: "block",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="모집선택" name="size">
          <Radio.Group>
            <Radio.Button value="프로젝트">프로젝트 모집</Radio.Button>
            <Radio.Button value="스터디">스터디 모집</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="가능지역 선택"
          hasFeedback
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select
            placeholder="Please select a country"
            style={{ width: "45%" }}
          >
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
          <Select
            placeholder="Please select a country"
            style={{ width: "45%" }}
          >
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="주분야/언어"
          hasFeedback
          rules={[{ required: true, message: "선택" }]}
        >
          <Select
            placeholder="Please select a country"
            style={{ width: "45%" }}
          >
            <Option value="프론트엔드">프론트엔드</Option>
            <Option value="백엔드">백엔드</Option>
          </Select>
          <Select
            placeholder="Please select a country"
            style={{ width: "45%" }}
          >
            <Option value="자바">자바</Option>
            <Option value="파이썬">파이썬</Option>
            <Option value="PHP">PHP</Option>
            <Option value="C#">C#</Option>
            <Option value="기타">기타</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="프레임워크/경험횟수"
          hasFeedback
          rules={[{ required: true, message: "선택" }]}
        >
          <Select
            placeholder="Please select a country"
            style={{ width: "45%" }}
          >
            <Option value="spring">spring(boot)</Option>
            <Option value="node">node</Option>
            <Option value="net">.net</Option>
            <Option value="react">react</Option>
            <Option value="vue">vue.js</Option>
            <Option value="angular">angular</Option>
            <Option value="기타">기타</Option>
          </Select>
          <Select
            placeholder="Please select a country"
            style={{ width: "45%" }}
          >
            <Option value="0">0번</Option>
            <Option value="3">1~3번</Option>
            <Option value="5">3~5번</Option>
            <Option value="5이상">5번 이상</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="연락처"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        {/* 이미지 */}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddPost;
