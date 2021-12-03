import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../../reducers/post";
import { Form, Button, Select, Radio, Input, Space, DatePicker } from "antd";
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
const EditPost = (props) => {
  // 2.post[id] 인 상태에서 새로고침하면 error
  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;
  const { mainPosts } = useSelector(({ post }) => post);
  // next.js 
  // useEffect(() => {
  //   dispatch(detailPost(id));
  // }, [dispatch, id]);

  // const [{framework,id,imagePath,mainField}] = mainPosts.filter(item => item.id === Number(id));
  const postContents = mainPosts.filter((item) => item.id === Number(id));
  const postContent = postContents[0];


  const [date, setDate] = useState(postContent);
  const radioList = ["프로젝트 구함", "스터디 구함"];
  const [radiobox, setRadiobox] = useState("");
  const handleRadio = (e) => {
    console.log(e.target.value);
    setRadiobox(e.target.value);
  };
  {
    console.log(postContent)
  }
  const areaList = ["서울특별시", "경기도"];
  const [area, setArea] = useState(postContent.postCity);
  const handleArea = (e) => {
    console.log(e);
    setArea(e);
  };

  const siguList = ["광명시", "강남구"];
  const [sigu, setSigu] = useState(postContent.postGu);
  const handleSigu = (e) => {
    console.log(e);
    setSigu(e);
  };

  const mainFieldList = ["front", "back"];
  const [mainField, setMainField] = useState(postContent.mainField);
  const handleMainField = (e) => {
    console.log(e);
    setMainField(e);
  };

  const languageList = ["java", "PHP", "javascript", "C#", "기타"];
  const [language, setLanguage] = useState(postContent.lang);
  const handleLanguage = (e) => {
    console.log(e);
    setLanguage(e);
  };

  const frameworkList = ["spring", "springboot", "react", "vue.js", "기타"];
  const [framework, setFramework] = useState(postContent.framework);
  const handleFramework = (e) => {
    console.log(e);
    setFramework(e);
  };

  const experienceList = ["0회", "1회", "2~3회", "4~5회", "5회 이상"];
  const [experience, setExperience] = useState(postContent.projectExperience);
  const handleExperience = (e) => {
    console.log(e);
    setExperience(e);
  };

  const { TextArea } = Input;

  const [intro, setIntro] = useState(postContent.postContent);
  const handleIntro = (e) => {
    console.log(e.target.value);
    setIntro(e.target.value);
  };

  const onSubmitForm = () => {
    const data = {
      id,
      insertDt: date,
      postState: radiobox,
      postCity: area,
      postGu: sigu,
      mainField: mainField,
      lang: language,
      framework: framework,
      projectExperience: experience,
      tel: "",
      imagePath: "",
      postContent: intro,
    };
    dispatch(editPost( data ));
    console.log(data);
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
              value={moment(postContent.insertDt)}
              disabled
            />
          </Space>
        </Form.Item>

        <Form.Item label="모집선택" name="size" style={{ minWidth: 400 }}>
          <Radio.Group
            onChange={handleRadio}
            defaultValue={postContent.postState}
          >
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
          <Select onChange={handleArea} value={area}>
            {areaList.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
          <Select onChange={handleSigu} value={sigu}>
            {siguList.map((item) => (
              <Option key={item} value={item}>
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
          <Button type="primary" htmlType="submit">
            수정하기
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};
export default EditPost;