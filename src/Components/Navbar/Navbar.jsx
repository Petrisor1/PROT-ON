import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';
import style from './style.css';
import logo from '../../Images/Logo.png';
import poza1 from '../../Images/picture1.png';
import useStyles from './style.js';
import {BsFacebook} from 'react-icons/bs';
import {RiInstagramFill} from 'react-icons/ri';

import { IconContext } from 'react-icons';
const pages = ['Acasa', 'Despre', 'Ingrediente'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const classes=useStyles();
  const icons=['FacebookOutlinedIcon','InstagramIcon'];

  const latime=window.screen.availWidth;
  const inaltime=window.screen.availHeight;
  console.log(`${latime} si inaltime ${inaltime}`);
const valoriFoto=[1,2,3,4,5,6,7,8];
let valoare;
  if(latime <=600)
  { 
    valoare=valoriFoto[2];
  }
  else if(latime>=600)
  {
    valoare=valoriFoto[3];
  }
  return (
    
//    
//       <div class="custom-shape-divider-top-1679044496">
//     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
//         <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
//     </svg>
// </div> 
<>
    <Grid container elevation={0} spacing={0} sx={{
      height:'100px',
      backgroundColor:"#030626",
      border:'solid 2px #030626',
      
    }}>
      <Grid xs={3}></Grid>
      <Grid xs={3}
      sx={{
       
        display:'flex',
        justifyContent: 'flex-start',

        alignContent:'flex-start'
      }}>
        <Link href="#">
               <img src={`${logo}`} alt="masina" className={'logo'} />
        </Link>
      </Grid>
      <Grid container xs={3} spacing={0} sx={
        {      
         
        display:'inline-flex',
        direction:"row",
        justifyContent:"flex-end",
        alignItems:"center",
        overflow:"hidden",
        gap:'20px'
        }
      }>
        {/* {
          icons.map((page) => (
                            <Link underline="hover" color={'brown'} sx={{display:'inline-block'}}>
                             <Button
                              key={page}
                              onClick={handleCloseNavMenu}
                              sx={{ my: 2, color: 'black', display: 'inline-block' }}
                            >
                             <span className="textLink">{page}</span>
                            </Button> 
                            <page/>
                            </Link>
                          ))}
         */}
       
               <BsFacebook fontSize={`${valoare}rem`} color='white'/>
               <RiInstagramFill fontSize={`${valoare}rem`} color='white' />
       
      </Grid>
      
      
    </Grid>
    <div class="headerDivider">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
</>
  );
}
export default ResponsiveAppBar;