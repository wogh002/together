import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Modal, Button } from "antd";
import { CardForm, CardItem } from "./index";
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import styled from "styled-components";
import { deletePost } from "../../reducers/post";
import { NAME } from '../../util/user';

const ButtonWrap = styled.div`
  text-align: right;
`;

const PostCard = (props) => {
  console.log(props.post.postId);
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const { me } = useSelector(({ user }) => user);
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
  const onClick = () => {
    if (!me) {
      alert('로그인 해주시기 바랍니다');
    }
  }

  return (
    <div>
      <CardForm onClick={onClick}>
        {
          me &&
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
                {localStorage.getItem(NAME)}
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
                  dispatch(deletePost(props.post.id));
                  router.push('/');
                }}>
                </Button>
              </ButtonWrap>
            </div>
          </Modal>
        }
        <CardItem onClick={showModal}>
          <Card
            cover={
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                alt="userProfile"
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
