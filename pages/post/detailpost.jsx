import React, { useState } from "react";
import { Modal, Button } from 'antd';
import styled from "styled-components";
import "antd/dist/antd.css";

const DetailPost = (props) => {

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
    console.log('Clicked cancel button');
    setVisible(false);
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
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
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
  );
};

export default DetailPost;
