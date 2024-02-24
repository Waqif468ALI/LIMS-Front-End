import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, colors, Box } from '@mui/material';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ScienceSharpIcon from '@mui/icons-material/ScienceSharp';
import InsertDriveFileSharpIcon from '@mui/icons-material/InsertDriveFileSharp';
import Tooltip from '@mui/material/Tooltip';
import '../UI/Sidebar.css';

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('');

  const handleItemClick = (itemId) => {
    setActiveButton(itemId);
  };

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '100vh', // Set minimum height to make sure the icons stay centered
        minWidth: 40,
        width: 70,
      }}
      className='sideBar'
    >
      <List>
        <ListItem
          id='1'
          className={`DashboardItem ${activeButton === '1' ? 'ActiveClass ICONActive' : ''}`}
          onClick={() => {
            handleItemClick('1');
            handleNavigate('/Home');
          }}
        >
          <Tooltip title="Dashboard" placement="right" arrow>
          <DashboardSharpIcon sx={{ fontSize: 'medium' }} className='ICON' />
          </Tooltip>
          
        </ListItem>
        <ListItem
          id='2'
          className={`${activeButton === '2' ? 'ActiveClass ICONActive' : ''}`}
          sx={`${activeButton === '2' ? colors : '#2fb8f8'}`}
          onClick={() => {
            handleItemClick('2');
            handleNavigate('/Home/PatientList');
          }}
        >
          <Tooltip title="Patient" placement="right" arrow>
            <AccountBoxIcon sx={{ fontSize: 'medium' }} className='ICON' />
          </Tooltip>
        </ListItem>
        <ListItem
          id='3'
          className={`${activeButton === '3' ? 'ActiveClass ' : ''}`}
          onClick={() => {
            handleItemClick('3');
            handleNavigate('/Home/TestEntry');
          }}
          sx={`${activeButton === '3' ? 'ICONActive' : ''}`}
        >
             <Tooltip title="Test" placement="right" arrow>
              <ScienceSharpIcon sx={{ fontSize: 'medium' }} className='ICON' />
             </Tooltip>
        </ListItem>
        <ListItem
          id='4'
          className={`${activeButton === '4' ? 'ActiveClass ' : ''}`}
          onClick={() => {
            handleItemClick('4');
            handleNavigate('/Home/SelectTemplate');
          }}
          sx={`${activeButton === '4' ? 'ICONActive' : ''}`}
        >
             <Tooltip title="Template" placement="right" arrow>
              <InsertDriveFileSharpIcon sx={{ fontSize: 'medium' }} className='ICON' />
             </Tooltip>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
