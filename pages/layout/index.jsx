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

const Index = ({ children }) => {
  const { zone } = useSelector(({ zone }) => zone);
  const dispatch = useDispatch();
  console.log(zone);

  const [click, setClick] = useState(true);
  const [value, setValue] = React.useState(1);
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const ToggleSearchbar = useCallback(() => {
    setClick((prev) => !prev);
  }, []);
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
                    <Select defaultValue="City" className="select-before" style={{ width: '15%' }}>
                      {
                        zone.map(item => (
                          <>
                            <Option value={item.city}>
                              {item.city}
                            </Option>
                          </>
                        )
                        )
                      }
                    </Select>

                    <Select defaultValue="Gu" className="select-before" style={{ width: '15%' }}>
                      <Option value="구로구">구로구</Option>
                      <Option value="광명시">광명시</Option>
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