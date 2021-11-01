import { Layout, PageHeader, Button } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
export const GhostWrapper = styled.div`
    margin: 0px;
    padding: 5px;
    background-color: #f5f5f5;
`;
const { Header, Footer, Content } = Layout;
// {children}
// 공통레이아웃
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
          <Content style={{ background: 'red' }}>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </>
  );
};

export default Index;
