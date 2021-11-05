import React, { useCallback, useState,useEffect } from 'react';
import { Input } from 'antd';
import { useRouter } from "next/router";
import { UserOutlined } from '@ant-design/icons';
import { Form, BlueBtn, Message } from '../signup/index';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_REQUEST } from '../../reducers/user';
const Index = () => {   
    const dispatch = useDispatch();
    const router = useRouter();
    const { logInDone, logInError } = useSelector(({ user }) => user);
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: LOGIN_REQUEST,
            data: {
                userId,
                userPw
            }
        })
    }, [dispatch, userId, userPw]);

    const onChangeId = ({ target }) => {
        setUserId(target.value);
    }
    const onChangePassword = ({ target }) => {
        setUserPw(target.value);
    }
    // logInDone && 메인으로 이동
    useEffect(() => {
        logInDone && router.push("/");
    }, [logInDone,router]);
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
                        onChange={onChangeId}
                        maxLength={15}
                        placeholder="Enter your ID"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                    <Input
                        required
                        type="password"
                        value={userPw}
                        onChange={onChangePassword}
                        maxLength={15}
                        placeholder="Enter your Password"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                    <Message>아이디 또는 비밀번호를 잘못 입력 하셨습니다.</Message>
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