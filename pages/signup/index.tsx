import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// @ts-ignore
import { Form, BlueBtn, Message } from './index.ts';
const Index = () => {
    // TODO: 타입 좁히기
    const onSubmit = (e: any) => {
        e.preventDefault();
    }
    return (
        <Form>
            <>
                <h1>
                    Sign Up
                </h1>
                <div>
                    <Input
                        required
                        type="text"
                        maxLength={15}
                        placeholder="Enter your ID"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                    <button type="button">
                        Check ID
                    </button>
                    <Message color="#D30000">아이디 중복</Message>
                    <Input
                        required
                        type="text"
                        maxLength={15}
                        placeholder="Enter your Nickname"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                    <Input
                        required
                        type="tel"
                        maxLength={15}
                        placeholder="Enter your Tel"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                    <Input
                        required
                        type="password"
                        maxLength={15}
                        placeholder="Enter your Password"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                    <Message color="#4CAF50">비밀번호 불일치 </Message>
                    <Input
                        required
                        type="password"
                        maxLength={15}
                        placeholder="ReEnter your Password"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                </div>
                <div>
                    <BlueBtn type="primary" onSubmit={onSubmit}>
                        가입하기
                    </BlueBtn>
                    <BlueBtn type="primary">
                        취소
                    </BlueBtn>
                </div>
            </>
        </Form>
    )
}

export default Index;