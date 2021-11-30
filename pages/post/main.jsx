import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Divider, Row, Col, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import PostCard from "./postcard";
import { useRouter } from 'next/router'
import CityContainer from "../city";
const Main = (props) => {
  const router = useRouter();
  const { post: { mainPosts }, user: { me } } = useSelector((state) => state);
  return (
    <>
      <CityContainer />
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
      {
        me &&
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          size="large"
          style={{ position: 'fixed', right: '30px', bottom: '30px' }}
          onClick={() => {
            router.push('/post/addpost')
          }} />
      }
    </>
  );
};

export default Main;