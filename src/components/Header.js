import styled from "@emotion/styled";
import React from "react";
import FaceIcon from "@mui/icons-material/Face";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Header = () => {
  return (
    <HeaderContainer>
      {/* HEADER LEFT  */}
      <HeaderLeft>
        <HeaderAvatar
        //onclick
        />

        <AccessTimeIcon />
      </HeaderLeft>
      {/* HEADER LEFT  */}

      {/* HEADER SEARCH */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search İHLAS" />
      </HeaderSearch>
      {/* HEADER SEARCH */}

      {/* HEADER RİGHT */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
      {/* HEADER RİGHT */}
    </HeaderContainer>
  );
};

export default Header;
const HeaderRight = styled.div`
  flex: 0%.3;
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderSearch = styled.div`
  opacity: 1;
  flex: 0.4;
  border-radius: 6px;
  background: #421f44;
  color: gray;
  border: 1px solid gray;
  > input {
    background-color: transparent !important;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background: #3f0f40;
  padding: 10px 0;
  color: white;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(FaceIcon)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
