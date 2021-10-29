import React, { ChangeEvent, useState } from "react";
import { Form, Button, Input, Select, Radio } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
const { Option } = Select;
const ImageSection =styled.section`
  margin-bottom: 2rem;
  label {
    cursor: pointer;
    font-weight: 700;
    font-size: 2rem;
    border: none;
    color: white;
    background-color: black;
    opacity: 0.8;
    border-radius: 3.5rem;
    letter-spacing: -0.09rem;
    font-weight: 700;
    padding: 1.5rem;
    transition: all 250ms ease-in-out;
  }
  label:hover {
    opacity: 0.5;
  }
`
const ImageContainer = styled.div`
    margin-bottom: 3rem;
    img {
      margin: 0 auto;
      display: block;
      max-width: 100%;
      height: auto;
      margin-bottom: 3rem;
    }
    button {
        min-width: 6.6rem;
        border: none;
        color: white;
        background-color: black;
        opacity: 0.8;
        border-radius: 3.5rem;
        letter-spacing: -0.09rem;
        width: 20%;
        font-weight: 700;
        font-size: 1.5rem;
        padding: 1.5rem;
        cursor: pointer;
        transition: all 250ms ease-in-out;
    }
    button:hover {
        opacity: 0.5;
    }
`


const AddPost = (props: any) => {
  const [fileImage, setFileImage] = useState("");

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };


  // 파일 저장 
  const saveFileImage = (e: any) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
  // 파일 삭제 
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
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
        <ImageSection>
          <h1>Your Profile</h1>
          <div>
            {
              fileImage &&
              (
                <ImageContainer>
                  <img src={fileImage} alt="user-profile"/>
                  <button onClick={() => deleteFileImage()}>
                    삭제
                  </button>
                </ImageContainer>
              )
            }
            <label htmlFor="input-file">
              Photo Upload ✔
            </label>
            <input
              type="file"
              id="input-file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={saveFileImage}
            />
          </div>
        </ImageSection>


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div >
  );
};

export default AddPost;
