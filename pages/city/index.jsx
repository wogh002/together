import React, { useCallback, useEffect, useState } from "react";
import { Layout, Button, Select, Radio } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import { LOAD_POSTS_CITY_REQUEST , LOAD_POSTS_CITY_GU_REQUEST} from '../../reducers/post';
import { useDispatch, useSelector } from 'react-redux';
export const GhostWrapper = styled.div`
  margin: 0px;
  padding: 5px;
  background-color: #f5f5f5;
`;

const SearchBar = styled.div`
  width: 100%;
  height: 15vh;
  background: lightblue;
`
const { Content } = Layout;
const { Option } = Select;

const CityContainer = (props) => {
    const { zone } = useSelector(({ zone }) => zone);
    const dispatch = useDispatch();
    const [cityName, setCityName] = useState("");
    const [guName, setGuName] = useState("Gu");
    // 토글
    const [click, setClick] = useState(true);
    // 프로젝트 구함, 스터디 구함
    const [value, setValue] = useState(1);
    const [gu, setGu] = useState([]);

    const onChange = e => {
        // 프로젝트 구함, 스터디 구함
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const ToggleSearchbar = useCallback(() => {
        setClick((prev) => !prev);
    }, []);

    const onChangeCity = useCallback((e) => {
        setCityName(e);
        dispatch({
            type: LOAD_POSTS_CITY_REQUEST,
            data: {
                city: e,
                page: 0,
                size: 4,
            }
        });
        for (let i = 0; i < zone.length; i++) {
            if (zone[i].city === e) {
                setGu(zone[i].gu);
                return;
            }
        }
    }, [zone, dispatch]);
    const onChangeGu = useCallback((e) => {
        dispatch({
            type: LOAD_POSTS_CITY_GU_REQUEST,
            data: {
                city: cityName,
                gu:e,
                page: 0,
                size: 4,
            }
        });
    }, [cityName,dispatch]);

    return (
        <>
            <div>
                <Layout>
                    <Content>
                        {
                            click ?
                                <SearchBar>
                                    <div style={{ display: "flex", padding: '5px 10px' }}>
                                        <Button
                                            shape="round"
                                            style={{ margin: 'auto 0 0 auto', textAlign: "right" }} onClick={ToggleSearchbar}>
                                            Close
                                        </Button>
                                    </div>
                                    <div style={{ display: "flex", padding: '0px 10px' }}>
                                        <Select defaultValue="City" className="select-before" style={{ width: '15%' }} onChange={onChangeCity}>
                                            {
                                                zone.map((item, index) => (
                                                    <Option key={index} value={item.city} >
                                                        {item.city}
                                                    </Option>
                                                )
                                                )
                                            }
                                        </Select>

                                        <Select defaultValue={guName} className="select-before" style={{ width: '15%' }} onChange={onChangeGu}>
                                            {
                                                gu.map((item, index) => (
                                                    <Option key={index} value={item} >
                                                        {item}
                                                    </Option>
                                                )
                                                )
                                            }
                                        </Select>

                                        <Select defaultValue="Position" className="select-before" style={{ width: '15%' }}>
                                            <Option value="프론트엔드">프론트엔드</Option>
                                            <Option value="백엔드">백엔드</Option>
                                        </Select>

                                        <Select defaultValue="Framework" className="select-before" style={{ width: '15%' }}>
                                            <Option value="리액트">리액트</Option>
                                            <Option value="스프링부트">스프링부트</Option>
                                        </Select>


                                        <Radio.Group onChange={onChange} value={value} style={{ marginLeft: '20px' }}>
                                            <Radio value={1}>프로젝트구함</Radio>
                                            <Radio value={2}>스터디구함</Radio>
                                        </Radio.Group>
                                    </div>
                                </SearchBar>
                                :
                                <div style={{ display: "flex", padding: '5px 10px' }} onClick={ToggleSearchbar}>
                                    <Button
                                        shape="round"
                                        style={{ margin: 'auto 0 0 auto', textAlign: "right" }}>
                                        Open
                                    </Button>
                                </div>
                        }
                    </Content>
                </Layout>
            </div>
        </>
    );
}

export default CityContainer;