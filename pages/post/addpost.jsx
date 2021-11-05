import React, { useState, useCallback, useEffect  } from "react";
import { useSelector, useDispatch} from "react-redux";
import { ADD_POST_REQUEST } from "../../reducers/post";
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
`;
const AddPost = () => {
  const dispatch = useDispatch();

  const radioList = ["프로젝트 구함", "스터디 구함"];
  const [Radiobox, setRadiobox] = useState("");
  const handleRadio = (e) => {
    console.log(e.target.value);
    setRadiobox(e.target.value);
  };

  const areaList = ["서울특별시", "경기도"];
  const [Area, setArea] = useState("가능 지역 선택");
  const handleArea = (e) => {
    console.log(e);
    setArea(e);
  };

  const siguList = ["광명시", "강남구"];
  const [Sigu, setSigu] = useState("가능 지역 선택");
  const handleSigu = (e) => {
    console.log(e);
    setSigu(e);
  };

  const mainFieldList = ["프론트엔드", "백엔드"];
  const [MainField, setMainField] = useState("주분야 선택");
  const handleMainField = (e) => {
    console.log(e);
    setMainField(e);
  };

  const language = ["spring", "springboot", "react", "vue.js"];
  const [Language, setLanguage] = useState("언어 선택");
  const handleLanguage = (e) => {
    console.log(e);
    setLanguage(e);
  };

  const framework = ["spring", "springboot", "react", "vue.js"];
  const [Framework, setFramework] = useState("프레임워크 선택");
  const handleFramework = (e) => {
    console.log(e);
    setFramework(e);
  };

  const experience = ["0회", "1회", "2~3회", "4~5회", "5회 이상"];
  const [Experience, setExperience] = useState("프로젝트 경험");
  const handleExperience = (e) => {
    console.log(e);
    setExperience(e);
  };

  // 구조분해할당 es6
  const { addPostLoading, addPostDone } = useSelector(({ post }) => post);

  useEffect(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);

  const onSubmitForm = useCallback(() => {
    console.log({
      data: {
        postState: Radiobox,
        postCity: Area,
        postGu: Sigu,
        mainField: MainField,
        lang: Language,
        framework: Framework,
        projectExperience: Experience
      }
    })
    // dispatch({
    //   type: ADD_POST_REQUEST,
    //   data: {
    //     postState: Radiobox,
    //     postCity: Area,
    //     postGu: Sigu,
    //     mainField: MainField,
    //     lang: Language,
    //     framework: Framework,
    //     projectExperience: Experience
    //   }
    // });
  }, [Radiobox,Area,Sigu,MainField,Language,Framework,Experience]);

  function TextInput(e, setState){
    setState(e.target.value);
  }

  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };
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
        <Form.Item label="모집선택" name="size" style={{ minWidth: 400 }}>
          <Radio.Group value={Radiobox} onChange={handleRadio}>
            {
              radioList.map((item) => (
                <Radio.Button key={item} value={item}>{item}</Radio.Button>
              ))
            }
          </Radio.Group>
        </Form.Item>
        
        <Form.Item
          label="가능지역 선택"
          hasFeedback
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select
            onChange={handleArea}
            value={Area}
          >
            {
              areaList.map((item) => (
                <Option key={item} value={item}>{item}</Option>
              ))
            }
          </Select>
          <Select
            onChange={handleSigu}
            value={Sigu}
          >
            {
              siguList.map((item) => (
                <Option key={item} value={item}>{item}</Option>
              ))
            }
          </Select>
        </Form.Item>

        <Form.Item
          label="주분야/언어"
          hasFeedback
          rules={[{ required: true, message: "선택" }]}
        >
          <input type="text" onChange={(e) => TextInput(e, setMainField)} />
          <Select
            onChange={handleMainField}
            value={MainField}
          >
            {
              mainFieldList.map((item) => (
                <Option key={item} value={item}>{item}</Option>
              ))
            }
          </Select>
          <Select
            onChange={handleLanguage}
            value={Language}
          >
            {
              language.map((item) => (
                <Option key={item} value={item}>{item}</Option>
              ))
            }
          </Select>
        </Form.Item>

        <Form.Item
          label="프레임워크/경험횟수: "
          hasFeedback
          rules={[{ required: true, message: "선택" }]}
        >
          <Select
            onChange={handleFramework}
            value={Framework}
          >
            {
              framework.map((item) => (
                <Option key={item} value={item}>{item}</Option>
              ))
            }
          </Select>
          <Select
            onChange={handleExperience}
            value={Experience}
          >
            {
              experience.map((item) => (
                <Option key={item} value={item}>{item}</Option>
              ))
            }
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={addPostLoading} >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

export default AddPost;
