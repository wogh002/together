import React, { useCallback, useState } from "react";
import { Layout, PageHeader, Button, Select, Radio } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import Main from "../post/main"
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

const Index = () => {
  const { zone } = useSelector(({ zone }) => zone);
  const dispatch = useDispatch();
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
    // city 바뀔 때 마다 dispatch API 서버요청
    switch (e) {
      case zone[0].city: setGu(zone[0].gu);
        break;
      case zone[1].city: setGu(zone[1].gu);
        break;
      case zone[2].city: setGu(zone[2].gu);
        break;
      case zone[3].city: setGu(zone[3].gu);
        break;
      case zone[4].city: setGu(zone[4].gu);
        break;
      case zone[5].city: setGu(zone[5].gu);
        break;
      case zone[6].city: setGu(zone[6].gu);
        break;
      case zone[7].city: setGu(zone[7].gu);
        break;
      case zone[8].city: setGu(zone[8].gu);
        break;
      case zone[9].city: setGu(zone[9].gu);
        break;
      case zone[10].city: setGu(zone[10].gu);
        break;
      case zone[11].city: setGu(zone[11].gu);
        break;
      case zone[12].city: setGu(zone[12].gu);
        break;
      case zone[13].city: setGu(zone[13].gu);
        break;
      case zone[14].city: setGu(zone[14].gu);
        break;
      case zone[15].city: setGu(zone[15].gu);
        break;
      case zone[16].city: setGu(zone[16].gu);
        break;
    }
  }, [zone]);
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

                    <Select defaultValue={guName} className="select-before" style={{ width: '15%' }}>
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
            <Main />
          </Content>
        </Layout>
      </div>
    </>
  );
};
export default Index;