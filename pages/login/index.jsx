import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Form, BlueBtn, Message } from '../signup/index';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../reducers/user';
const Index = () => {
    const dispatch = useDispatch();
    const { logInLoading, logInDone, logInError } = useSelector(({ user }) => user);
    const onClick = () => {
        dispatch({
            type: LOGIN_REQUEST,
            data: {
                id: 'ekekekekekekek',
                password: '1234567',
            }
        })
    }
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
                <BlueBtn type="primary" onClick={onClick}>
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