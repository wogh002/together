import React from 'react';
import {  PageHeader, Button, } from "antd";
import "antd/dist/antd.css";

const Header = (props) => (
    <PageHeader
        className="site-page-header"
        ghost={true}
        title="개발투게더"
        subTitle="프로젝트/스터디 인원 구합니다."
        extra={[
        <Button key="1" type="primary">
            로그인
        </Button>,
        <Button key="2">회원가입</Button>,
        ]}
    />
);

export default Header;