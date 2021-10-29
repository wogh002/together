import React, { useState } from "react";
import { Modal, Card, } from "antd";
import "antd/dist/antd.css";
import { AddBtn, CardForm, CardItem } from "./index";

const postDummyData = [
  {
    Post: {
      postState: "프젝구함",
    },
    projectExperience: "1회",
  },
];


const Main = (props) => {

  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="site-card-wrapper">
        <CardForm>
          <CardItem onClick={showModal}>
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
        
        <Modal
        title="양송현님의 정보"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <p><label>상태: </label>프젝구함</p>
        <p><label>주특기: </label>프론트/리액트</p>
        <p><label>가능지역: </label>서울특별시/송파구</p>
        <p><label>연락처: </label>010-0000-2222</p>
        {/* 이미지추가 */}
        <p><label>소개: </label>프론트엔드 개발자 학생으로 프로젝트하실분 구합니다요</p>
        {/* 첨부파일 */}
        </Modal>     

      </div>
    </>
  );
};

export default Main;
