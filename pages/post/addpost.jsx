import React from "react";
import { Form, Button, Select, Radio } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components"; 
const { Option } = Select;
const FormContainer = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100vh;
    form {
      padding-left: 1rem;
    }
    form > div {
      margin-bottom: 4rem;
    }
    label {
      font-weight: 700;
    }
`
const AddPost = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <FormContainer>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="모집선택" name="size" style={{minWidth:400}}>
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
            style={{ width: "100%" }}
          >
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
          </Select>
          <Select
            placeholder="Please select a country"
            style={{ width: "100%" }}
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
            style={{ width: "100%" }}
          >
            <Option value="프론트엔드">프론트엔드</Option>
            <Option value="백엔드">백엔드</Option>
          </Select>
          <Select
            placeholder="Please select a country"
            style={{ width: "100%" }}
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
            style={{ width: "100%" }}
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
            style={{ width: "100%" }}
          >
            <Option value="0">0번</Option>
            <Option value="3">1~3번</Option>
            <Option value="5">3~5번</Option>
            <Option value="5이상">5번 이상</Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

export default AddPost;
