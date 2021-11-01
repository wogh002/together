import React, { useCallback, useState } from "react";
import { Layout, PageHeader, Button, Select, Radio } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import Main from "../post/main"

export const GhostWrapper = styled.div`
  margin: 0px;
  padding: 5px;
  background-color: #f5f5f5;
`;

const SearchBar = styled.div`
  width: 100%;
  height: 15vh;
  background: lightblue;

export const GhostWrapper = styled.div`
    margin: 0px;
    padding: 5px;
    background-color: #f5f5f5;

`;
const { Header, Footer, Content } = Layout;
const { Option } = Select;

const selectSi = (
  <Select defaultValue="선택" className="select-before" style={{width: '15%'}}>
    <Option value="서울특별시">서울특별시</Option>
    <Option value="경기도">경기도</Option>
  </Select>
);
const selectDo = (
  <Select defaultValue="선택" className="select-before" style={{width: '15%'}}>
    <Option value="구로구">구로구</Option>
    <Option value="광명시">광명시</Option>
  </Select>
);
const selectPosition = (
  <Select defaultValue="선택" className="select-before" style={{width: '15%'}}>
    <Option value="프론트엔드">프론트엔드</Option>
    <Option value="백엔드">백엔드</Option>
  </Select>
);
const selectframework = (
  <Select defaultValue="선택" className="select-before" style={{width: '15%'}}>
    <Option value="리액트">리액트</Option>
    <Option value="스프링부트">스프링부트</Option>
  </Select>
);


const Index = (props) => {
  const [click, setClick] = useState(true);
  const [value, setValue] = React.useState(1);
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const ToggleSearchbar = useCallback(()=>{
    setClick ((prev) => !prev);
  },[])

  return (
    <>
      <div style={{  }}>
const Index = (props) => {
  return (
    <>
      <div style={{ padding: '0px 130px' }}>
        <Layout>
          <GhostWrapper>
            <PageHeader
              className="site-page-header"
              ghost={true}
              title="개발투게더"
              subTitle="프로젝트/스터디 인원 구합니다."
              extra={[
                <Button key="1" type="primary">
                  로그인
                </Button>,
                <Button key="2">회원가입</Button>,
              ]}
            />
          </GhostWrapper>
          <Content style={{ background: "red" }}>
            {
            click
            ? <SearchBar>
              <div style={{ display: "flex", padding:'5px 10px' }}>
                <Button
                  shape="round"
                  style={{ margin: 'auto 0 0 auto', textAlign: "right" }} onClick={ToggleSearchbar}>
                Close
                </Button>
              </div>
              <div style={{ display: "flex", padding:'0px 10px' }}> 
                {selectSi} &nbsp;&nbsp; {selectDo}&nbsp;&nbsp; {selectPosition} &nbsp;&nbsp; {selectframework} 
              <Radio.Group onChange={onChange} value={value} style={{ marginLeft: '20px' }}>
                <Radio value={1}>프로젝트구함</Radio>
                <Radio value={2}>스터디구함</Radio>
              </Radio.Group>
              </div>
            </SearchBar>
            : <div style={{ display: "flex", padding:'5px 10px' }} onClick={ToggleSearchbar}>
                <Button
                  shape="round"
                  style={{ margin: 'auto 0 0 auto', textAlign: "right" }}>
                Open
                </Button>
              </div>
            } 
            <Main />
          </Content>
          <Content style={{ background: 'red' }}>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </>
  );
};
export default Index;
