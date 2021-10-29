import React, { useState } from "react";
import { CloseSquareOutlined } from "@ant-design/icons";
import { Menu, Button } from "antd";
import styled from "styled-components";

// const ToggleCloseBtn = styled(CloseSquareOutlined)`
//   font-size: 27px;
//   cursor: pointer;
// `;

const ToggleMenu = styled.div`
  width: 100%;
  height: 13vh;
  background: #eee;
  margin: auto;
  padding: 20px 60px;
  display: flex;
`;

function SearchBar() {
  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen);
  };

  return (
    <div>
      <ToggleMenu onClick={() => toggleMenu()}>
        <CloseSquareOutlined style={{ fontSize: "25px" }} />
      </ToggleMenu>
    </div>
  );
}

export default SearchBar;
