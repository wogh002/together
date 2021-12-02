import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Modal, Button } from "antd";
import { CardForm, CardItem } from "./index";
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import styled from "styled-components";
import { deletePost } from "../../reducers/post";
import { NAME } from "../../util/user";
import { currentPost } from "../../reducers/post";

const ButtonWrap = styled.div`
  text-align: right;
`;

const PostCard = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const {
    user: { me },
    post: { detailPost },
  } = useSelector((state) => state);
  const showModal = () => {
    dispatch(currentPost(props.post.postId));
    setVisible(true);
  };
  console.log(me.userId);

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
  const onClickForm = () => {
    if (!me) {
      alert("로그인 해주시기 바랍니다");
    }
  };

  return (
    <div>
      <CardForm onClick={onClickForm}>
        {me && detailPost && (
          <Modal
            title={me.userNickname}
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={null}
          >
            <div>
              <p>
                <label>작성일자: {detailPost.insertDT}</label>
              </p>
              <p>
                <img src={props.post.imagePath} width="470px" height="400px" />
              </p>
              <p>
                <label>상태: </label> {detailPost.postState}
              </p>
              <p>
                <label>주특기: </label> {detailPost.mainField} -{" "}
                {detailPost.framework}
              </p>
              <p>
                <label>가능지역: </label> {detailPost.postCity} /{" "}
                {detailPost.postGu}
              </p>
              <p>
                <label>이름(닉네임): </label> {me.userNickname}
              </p>
              <p>
                <label>연락처: </label> {me.userTel}
              </p>
              <p>
                <label>프잭경험횟수: </label> {detailPost.projectExperience}
              </p>
              <p>
                <label>소개: </label> {detailPost.postContent}
              </p>
              <p>
                <a href={detailPost.filePath} download>
                  Click to download {me.userNickname} portfolio
                </a>
              </p>

              <ButtonWrap>
                {/* 현재 접속된 아이디와 게시글에 등록된 id가 같으면? */}

                <Button
                  margin="0 10px 0 0"
                  padding="0"
                  onClick={() => {
                    router.push(`/post/${props.post.id}`);
                  }}
                >
                  수정
                </Button>
                <Button
                  padding="0"
                  onClick={() => {
                    dispatch(deletePost(props.post.id));
                    router.push("/");
                  }}
                >
                  삭제
                </Button>
              </ButtonWrap>
            </div>
          </Modal>
        )}
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
