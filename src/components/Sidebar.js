import React from "react";
import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import AppsIcon from "@mui/icons-material/Apps";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import InboxIcon from "@mui/icons-material/Inbox";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import EmergencyRecordingIcon from "@mui/icons-material/EmergencyRecording";
import AddIcon from "@mui/icons-material/Add";

import SideBarOption from "./SideBarOption";

const Sidebar = () => {

  return (
    <SideBarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Hillary FAM</h2>
          <h3>
            <EmergencyRecordingIcon />
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SideBarOption Icon={InsertCommentIcon} title="Threads" />
      <SideBarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SideBarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SideBarOption Icon={PeopleAltIcon} title="People and user groups" />
      <SideBarOption Icon={AppsIcon} title="Apps" />
      <SideBarOption Icon={FileCopyIcon} title="file browser" />
      <SideBarOption Icon={ExpandLessIcon} title="Show less" />
      <SideBarOption Icon={AccessAlarmIcon} title="Channels" />
      <hr />
      <SideBarOption Icon={AddIcon} addChannelOption title="Channels" />
      <hr />
    </SideBarContainer>
  );
};

export default Sidebar;

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 50px;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  border-bottom: 10px;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-weight: 400;
    font-size: 13px;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
