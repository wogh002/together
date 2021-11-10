import React, { useState, useCallback, useEffect } from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Form, BlueBtn, Message } from './index';
import ImageUpload from '../../components/upload-img/imageUpload';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import useInput from '../../hooks/useInput';
import {
    SIGN_UP_REQUEST,
    CHECK_ID_REQUEST,
} from '../../reducers/user';
const TEL_REG_EXP = /^[0-9\b -]{0,13}$/;
const NICKNAME_REG_EXP = /^[ㄱ-ㅎ가-힣a-z0-9_-]{0,20}$/;
const Index = () => {
    const router = useRouter();

    const dispatch = useDispatch();
    const {
        signUpDone,
        signUpError,
        checkIdMessage,
    } = useSelector(({ user }) => user);

    const [imageFile, setImageFile] = useState(null);
    const [idReg, setIdReg] = useState(false);
    const [userId, setUserId] = useState("");
    const [userIdCheck, setUserIdCheck] = useState("");
    const [password, setPassword] = useInput("");
    const [passwordCheck, setPasswordCheck] = useInput("");
    const [userTel, setUserTel] = useState("");
    const [userNickname, setUserNickname] = useState("");

    const onChangeId = useCallback(({ target }) => {
        const ID_REG_EXP = /^[a-z]+[a-z0-9]{5,19}$/g;
        setUserId(target.value);
        setUserIdCheck("");
        setIdReg(ID_REG_EXP.test(userId));
    }, [userId]);

    const checkReg = (REG_EXP, value) => {
        REG_EXP === NICKNAME_REG_EXP ?
            REG_EXP.test(value) && setUserNickname(value) :
            REG_EXP.test(value) && setUserTel(value);
    };
    const onChangeTel = useCallback(({ target }) => {
        checkReg(TEL_REG_EXP, target.value);
    }, []);
    const onChangeNickname = useCallback(({ target }) => {
        checkReg(NICKNAME_REG_EXP, target.value);
    }, []);

    const onCheckId = useCallback(() => {
        setUserIdCheck(userId);
        idReg && dispatch({
            type: CHECK_ID_REQUEST,
            data: userId
        });
    }, [dispatch, userId, idReg]);

    useEffect(() => {
        switch (userTel.length) {
            case 10: setUserTel(userTel.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
                break;
            case 13: setUserTel(userTel.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
                break;
        }
    }, [userTel]);

    const createFormData = () => {
        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('userNickname', userNickname);
        formData.append('userTel', userTel);
        formData.append('imageFile', imageFile);
        formData.append('userPw', password);
        formData.append('userPwCheck', passwordCheck);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return ({
            formData,
            config
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { formData, config } = createFormData();
        if (userId === userIdCheck && password === passwordCheck && imageFile) {
            dispatch({
                type: SIGN_UP_REQUEST,
                data: {
                    formData,
                    config
                }
            })
        }
    };

    useEffect(() => {
        signUpError && alert(signUpError);
    }, [signUpError]);
    useEffect(() => {
        signUpDone && router.push("/login");
    }, [signUpDone, router]);

    return (
        <Form onSubmit={onSubmit}>
            <>
                <h1>
                    회원가입
                </h1>
                <ImageUpload setImageFile={setImageFile} />
                <div>
                    <Input
                        required
                        type="text"
                        value={userId}
                        onChange={onChangeId}
                        maxLength={9}
                        placeholder="Enter your ID"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                    <button type="button" onClick={onCheckId}>
                        Check ID
                    </button>
                    {
                        userId === userIdCheck ? userId &&
                            <Message color={checkIdMessage === "ok" ? "#4CAF50" : "#D30000"}>
                                {idReg ? checkIdMessage : "첫문자는 영소문자 -> 글자 수(7~9)"}
                            </Message>
                            :
                            <Message color="#D30000">
                                Check ID 를 눌러주세요
                            </Message>
                    }
                    <Input
                        required
                        type="text"
                        value={userNickname}
                        onChange={onChangeNickname}
                        maxLength={9}
                        placeholder="Enter your Nickname"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                    <Input
                        required
                        type="tel"
                        value={userTel}
                        onChange={onChangeTel}
                        maxLength={13}
                        placeholder="Enter your Tel"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                    <Input
                        required
                        type="password"
                        value={password}
                        onChange={setPassword}
                        maxLength={15}
                        placeholder="Enter your Password"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                    {
                        passwordCheck &&
                        <Message color={passwordCheck === password ? "#4CAF50" : "#D30000"}>
                            {passwordCheck === password ? "ok" : "비밀번호 불일치"}
                        </Message>
                    }
                    <Input
                        required
                        type="password"
                        value={passwordCheck}
                        onChange={setPasswordCheck}
                        maxLength={15}
                        placeholder="ReEnter your Password"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                </div>
                {
                    !imageFile &&
                    <span style={{ color: "#D30000" }}>
                        이미지를 업로드해주세요 (필수)
                    </span>
                }
                <div>
                    <BlueBtn htmlType="submit" type="primary">
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