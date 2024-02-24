import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../UI/Navbar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import SignUp from './SignUp';
import DynamicModal  from '../modals/DynamicModal';
import SearchIcon from '@mui/icons-material/Search';
import { GloabalSearchPatient } from '../Services/PatientServicces';
import SpinnerModal from '../Spinner/SpinnerModal';
import { Paper ,Button, Card, Divider} from '@mui/material';
//Nave NUI

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputdata,setInputData] = useState()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleChange = (e) =>{
        const value =  e.target.value
        setInputData(value)
  }
const hnadleSearchPatient =async () =>{
  setIsLoading(true)
  try{
    const LabID = sessionStorage.getItem('LabID')
    const result = await GloabalSearchPatient(LabID,inputdata)
    console.log(result)
    if(result.length){
      const id =   result?.[0]?.patientID
      navigate(`/Home/PatientProfile/${id}`)
    }
    else{
      console.log("sdfsf")
    }

  }
  catch(error){
    console.log("error while searching patient",error)
  }
  finally{
    setIsLoading(false)
  }
   
    
}


  const HandleLogOut = () =>{
    sessionStorage.clear();
    navigate("/")
    window.location.reload();
  }
  const Hanldenavigate = () =>{
    navigate('/Home/PatientRegistration')
  }
  const HanldenavigatetoTest = () =>{
    navigate('/Home/TestEntry')
  }
  const HanldenavigatetoPatient = () =>{
    navigate('/Home/PatientList')
  }
   //modal open and close 
   const [modalIsOpen, setModalIsOpen] = useState(false);

   const openModal = () => {
     setModalIsOpen(true);
   };
 
   const closeModal = () => {
     setModalIsOpen(false);
   };
   //modal 
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={HandleLogOut}>Log Out</MenuItem>
      <MenuItem onClick={openModal}>Add User</MenuItem>

    </Menu>
  );
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
    {isLoading && <SpinnerModal  isLoading={isLoading} />}
    <Paper  sx={{ flexGrow: 1 ,boxShadow:'none'}}>
      <AppBar position="static" sx={{background:' #FFF',boxshadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{  display: { xs: 'none', md: 'flex' ,justifyContent:'space-evenly'}, border:'1px solid #7A869A',borderRadius:'5px',padding:'5px',width:500,paddingLeft:'25px',marginLeft:'18rem'}}>
            <input onKeyDown={(e) => { if (e.key === "Enter") hnadleSearchPatient() }} onChange={handleChange} placeholder='Search Patient' className='searchInput'>
            </input>
            <SearchIcon sx={{color:"#2fb8f8" }} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Divider></Divider>
        <Card sx={{minHeight:"10px",boxShadow:'none',padding:'10px'}}>
          <Box className="">
            <Button style={{padding:'5px',}} sx={{ border:'1px solid #2fb8f8', color:'#2fb8f8'}} onClick={Hanldenavigate} >Add Patient</Button>
            <Button style={{padding:'5px',}} sx={{  border:'1px solid #2fb8f8', color:'#2fb8f8' }} onClick={HanldenavigatetoTest} >Test</Button>
            <Button style={{padding:'5px',}} sx={{  border:'1px solid #2fb8f8', color:'#2fb8f8' }} onClick={HanldenavigatetoPatient} >Patient</Button>

          </Box>
         </Card>
      </AppBar>
      
      {renderMobileMenu}
      {renderMenu}
            <DynamicModal  show={modalIsOpen} onHide={closeModal}   title='User Registration'>
                 <SignUp />
            </DynamicModal>
    </Paper>
    </>
  );
};

export default Navbar;
