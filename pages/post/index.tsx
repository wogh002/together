import React from "react";
import { Card, Col, Row } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
// @ts-ignore
import { AddBtn, CardForm, CardItem } from "./index.ts";

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
      <div className="site-card-wrapper">
        <CardForm>
          <CardItem>
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
          </CardItem>
          <CardItem>
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
          </CardItem>
          <CardItem>
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
          </CardItem>
          <CardItem>
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
          </CardItem>
        </CardForm>
        {/* <AddBtn>
          <PlusCircleOutlined />
        </AddBtn> */}
      </div>
    </>
  );
};

export default Index;
