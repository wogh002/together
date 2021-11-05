import React, { useState, useEffect, useHistory } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Divider, Row, Col, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { LOAD_POSTS_REQUEST } from "../../reducers/post";
import PostCard from "./postcard";
import Head from "next/head";

const Main = (props) => {
  const dispatch = useDispatch();

  const { mainPosts } = useSelector(({ post }) => post);
  console.log(mainPosts);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  return (
    <>
      <Head>
        <html lang="ko" />
      </Head>

      <Divider orientation="left">소개합니다</Divider>
      <Row gutter={8}>
        {
          mainPosts && mainPosts.map((item) => {  
            return <Col span={6} order={4} xs={24} md={6} key={item.postId} >
              <PostCard post={item} />
              </Col>
          })
        }
      </Row>
        <Button type="primary" shape="circle" icon={<PlusOutlined />} />
    </>
  );
};

export default Main;