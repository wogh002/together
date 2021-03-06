import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FileUpload from "../../components/upload-file/fileUpload";
import { Form, Button, Select, Radio, Input, DatePicker, Space } from "antd";
import {ADD_POST_REQUEST} from '../../reducers/post';

import "antd/dist/antd.css";
import styled from "styled-components";
import { useRouter } from "next/router";
import moment from "moment";

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
`;
const AddPost = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [uploadFile, setUploadFile] = useState(null);
  const {
    post: { addPostLoading },
    zone: { zone },
  } = useSelector((state) => state);
  // 날짜 시간을 위한 ant design선언
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const today = new Date();

  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const hours = ("0" + today.getHours()).slice(-2);
  const minutes = ("0" + today.getMinutes()).slice(-2);
  const seconds = ("0" + today.getSeconds()).slice(-2);
  const dateString =
    year +
    "-" +
    month +
    "-" +
    day +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  const [date, setDate] = useState(dateString);
  const [File, setFile] = useState(null);

  const radioList = ["project", "study"];
  const [radiobox, setRadiobox] = useState("");
  const handleRadio = (e) => {
    console.log(e.target.value);
    setRadiobox(e.target.value);
  };
  const [currentGu, setCurrentGu] = useState("구 선택");
  const [currentSi, setCurrentSi] = useState("시 선택");

  const [guArr, setGuArr] = useState([]);
  const handleArea = (e) => {
    for (let i = 0; i < zone.length; i++) {
      if (zone[i].city === e) {
        setGuArr(zone[i].gu);
        setCurrentSi(e);
        return;
      }
    }
  };
  const handleGu = (e) => {
    setCurrentGu(e);
  };

  const mainFieldList = ["front", "back"];
  const [mainField, setMainField] = useState("주분야 선택");
  const handleMainField = (e) => {
    console.log(e);
    setMainField(e);
  };

  const languageList = ["java", "php", "js", "c#", "etc"];
  const [language, setLanguage] = useState("언어 선택");
  const handleLanguage = (e) => {
    console.log(e);
    setLanguage(e);
  };

  const frameworkList = ["spring", "springBoot", "react", "vue", "etc"];
  const [framework, setFramework] = useState("프레임워크 선택");
  const handleFramework = (e) => {
    console.log(e);
    setFramework(e);
  };

  const experienceList = ["0회", "1회", "2~3회", "4~5회", "5회 이상"];
  const [experience, setExperience] = useState("프로젝트 경험");
  const handleExperience = (e) => {
    console.log(e);
    setExperience(e);
  };

  const { TextArea } = Input;

  const [intro, setIntro] = useState("");
  const handleIntro = (e) => {
    console.log(e.target.value);
    setIntro(e.target.value);
  };

  useEffect(() => {
    setCurrentGu("구 선택");
  }, [currentSi]);

  const createFormData = () => {
    const formData = new FormData();
    formData.append("postState", radiobox);
    formData.append("postCity", currentSi);
    formData.append("postGu", currentGu);
    formData.append("mainField", mainField);
    formData.append("lang", language);
    formData.append("framework", framework);
    formData.append("projectExperience", experience);
    formData.append("fileUpload", uploadFile);
    formData.append("postContent", intro);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return {
      formData,
      config,
    };
  };

  const onSubmitForm = (e) => {
    const { formData, config } = createFormData();
    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        formData,
        config,
      },
    });
    router.push("/");
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
        onFinish={onSubmitForm}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="작성일자" name="size" style={{ minWidth: 400 }}>
          <Space direction="vertical">
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              value={moment(date)}
              disabled
            />
          </Space>
        </Form.Item>
{/* name="size" */}
        <Form.Item label="모집선택" style={{ minWidth: 400 }}>
          <Radio.Group onChange={handleRadio} value={radiobox}>
            {radioList.map((item) => (
              <Radio.Button key={item} value={item}>
                {item}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="가능지역 선택"
          hasFeedback
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select onChange={handleArea} value={currentSi}>
            {zone.map((item, index) => (
              <Option key={index} value={item.city}>
                {item.city}
              </Option>
            ))}
          </Select>
          <Select onChange={handleGu} value={currentGu}>
            {guArr.map((item, index) => (
              <Option key={index} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="주분야/언어"
          hasFeedback
          rules={[{ required: true, message: "선택" }]}
        >
          <Select onChange={handleMainField} value={mainField}>
            {mainFieldList.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
          <Select onChange={handleLanguage} value={language}>
            {languageList.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="프레임워크/경험횟수: "
          hasFeedback
          rules={[{ required: true, message: "선택" }]}
        >
          <Select onChange={handleFramework} value={framework}>
            {frameworkList.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
          <Select onChange={handleExperience} value={experience}>
            {experienceList.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <FileUpload setUploadFile={setUploadFile} uploadFile={uploadFile}/>

        <Form.Item
          label="자기소개: "
          hasFeedback
          rules={[{ required: true, message: "선택" }]}
        >
          <TextArea
            value={intro}
            onChange={handleIntro}
            placeholder="Controlled autosize"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={addPostLoading}>
            작성
          </Button>
        </Form.Item>
      </Form>

    </FormContainer>
  );
};

export default AddPost;
