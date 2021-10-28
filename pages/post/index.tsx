import React from "react";
import { Card, Col, Row, Select  } from "antd";
import "antd/dist/antd.css";
import { PlusCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";

const AddBtn = styled(PlusCircleOutlined)`
  position: fixed;
  font-size: 50px;
  right: 125px;
  bottom: 50px;
  cursor: pointer;
`;

const postDummyData = [
  {
    Post: {
      postState: "프젝구함",
    },
    projectExperience: "1회",
  },
];

const Index = (props: any) => {
  return (
    <>
      <div className="site-card-wrapper" style={{ padding: "0px 140px" }}>
        <Row gutter={16}>
          <Col span={6} style={{ background: "blue", padding: "40px 20px" }}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Card.Meta title="Frontend/React" />
              <br />
              <p>현재상태 : 프젝구함</p>
              <p>프로젝트 경험 : 1회</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
        <AddBtn>
          <PlusCircleOutlined />
        </AddBtn>
      </div>
    </>
  );
};

export default Index;
