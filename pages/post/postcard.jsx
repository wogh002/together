import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Modal, Button } from "antd";
import { CardForm, CardItem } from "./index";
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import styled from "styled-components";
import { deletePost } from "../../reducers/post";

const ButtonWrap = styled.div`
  text-align: right;
`;

const PostCard = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("");
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

            <ButtonWrap>
              <Button
                margin="0 10px 0 0"
                padding="0"
                onClick={() => {
                  router.push(`/post/${props.post.id}`);
                }}
              >
                수정
              </Button>
              <Button padding="0" onClick={() => {
                  console.log(props.post.id);
                  dispatch(deletePost(props.post.id));
                  router.push('/');
                }}>삭제</Button>
            </ButtonWrap>
          </div>
        </Modal>
        <CardItem onClick={showModal}>
          <Card
            cover={
              <img
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
  );
};

export default PostCard;
