import React, { useCallback } from 'react';
import { PageHeader, Button, } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { LOGOUT_REQUEST } from '../../reducers/user';
import "antd/dist/antd.css";
const Header = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { me } = useSelector(({ user }) => user);
    const onClickSignup = useCallback(() => {
        router.push({
            pathname: '/signup',
        });
    }, [router]);
    const onClickLogin = useCallback(() => {
        router.push({
            pathname: '/login',
        });
    }, [router]);
    const onLogOut = useCallback(() => {
        dispatch({
            type: LOGOUT_REQUEST,
        })
    }, [dispatch]);
    return (
        <PageHeader
            className="site-page-header"
            ghost={true}
            title="개발투게더"
            subTitle="프로젝트/스터디 인원 구합니다."
            extra={[
                me ? <Button key="1" type="primary" onClick={onLogOut}>
                    로그아웃
                </Button>
                    :
                    <Button key="2" type="primary" onClick={onClickLogin}>
                        로그인
                    </Button>,
                !me &&
                <Button key="3" onClick={onClickSignup}>회원가입</Button>,
            ]}
        />
    )
}



export default Header;