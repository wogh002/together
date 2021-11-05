import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Modal, Button } from "antd";
import { CardForm, CardItem } from "./index";
import { LOAD_POSTS_REQUEST } from "../../reducers/post";
import "antd/dist/antd.css";
import Main from "./main";

const PostCard = (props) => {

const { mainPosts } = useSelector(({ post }) => post);
const [visible, setVisible] = useState(false);
const [confirmLoading, setConfirmLoading] = useState(false);
const [modalText, setModalText] = useState("Content of the modal");

const showModal = () => {
  console.log('모달트루!')
  setVisible(true);
};

const handleOk = () => {
  setModalText("The modal will be closed after two seconds");
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
  <div>
    <CardForm>
    <Modal
        title="양송현님의 정보"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null} 
      >
        <div>
          <p>
            <label>상태: </label> {props.post.postState}
          </p>
          <p>
            <label>주특기: </label> {props.post.framework}
          </p>
          <p>
            <label>가능지역: </label> {props.post.postGu}
          </p>
          <p>
            <label>연락처: </label> {props.post.tel}
          </p>
          <p>
            <label>소개: </label> {props.post.postContent}
          </p>
        </div>
      </Modal>
      <CardItem onClick={showModal} >
        <Card 
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Card.Meta title={props.post.framework} />
          <br />
          <p>현재상태: {props.post.postState}</p>
          <p>진행횟수: {props.post.projectExperience}</p>
        </Card>
      </CardItem>
    </CardForm>
  </div>
)}

export default PostCard;