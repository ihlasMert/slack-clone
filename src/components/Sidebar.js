import { FiberManualRecord } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>İHLAS HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            İHLAS MERT
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: #3f0f40;
  color: white;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 35px;
  flex: 0.3;
`;

const SidebarHeader = styled.div`
  display: flex;
  border-top: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background: white;
    border-radius: 999;
  }
`;
const SidebarInfo = styled.div`
  flex: 1 >h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
