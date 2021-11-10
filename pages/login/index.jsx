import React, { useCallback, useEffect } from 'react';
import { Input } from 'antd';
import { useRouter } from "next/router";
import { UserOutlined } from '@ant-design/icons';
import { Form, BlueBtn, Message } from '../signup/index';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_REQUEST } from '../../reducers/user';
import useInput from '../../hooks/useInput';
const Index = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { logInDone, logInError, logInMessage } = useSelector(({ user }) => user);
    const [userId, setUserId] = useInput("");
    const [userPw, setUserPw] = useInput("");
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        userId && userPw && dispatch({
            type: LOGIN_REQUEST,
            data: {
                userId,
                userPw
            }
        })
    }, [dispatch, userId, userPw]);

    useEffect(() => {
        logInDone && router.push("/");
    }, [logInDone, router]);
    useEffect(() => {
        logInError && alert(logInError);
    }, [logInError]);

    return (
        <Form onSubmit={onSubmit}>
            <>
                <h1>
                    LogIn
                </h1>
                <div>
                    <Input
                        required
                        type="text"
                        value={userId}
                        onChange={setUserId}
                        maxLength={15}
                        placeholder="Enter your ID"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                    <Input
                        required
                        type="password"
                        value={userPw}
                        onChange={setUserPw}
                        maxLength={15}
                        placeholder="Enter your Password"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                    {logInMessage && logInDone && <Message>{logInMessage}</Message>}
                </div>
            </>
            <div>
                <BlueBtn type="primary" htmlType="submit">
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