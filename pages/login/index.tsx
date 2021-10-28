import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// @ts-ignore
import { Form, BlueBtn, Message } from '../signup/index.ts';
const Index = () => {
    return (
        <Form>
            <>
                <h1>
                    LogIn
                </h1>
                <div>
                    <Input
                        required
                        type="text"
                        maxLength={15}
                        placeholder="Enter your ID"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                    <Input
                        required
                        type="password"
                        maxLength={15}
                        placeholder="Enter your Password"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                   <Message>아이디 또는 비밀번호를 잘못 입력 하셨습니다.</Message>
                </div>
            </>
            <div>
                <BlueBtn type="primary">
                    로그인
                </BlueBtn>
                <BlueBtn type="primary">
                    취소
                </BlueBtn>
            </div>
        </Form>
    )
}

export default Index;