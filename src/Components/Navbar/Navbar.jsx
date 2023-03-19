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
  return (
    
//    
//       <div class="custom-shape-divider-top-1679044496">
//     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
//         <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
//     </svg>
// </div> 
<>
    <Grid container sx={{
      height:'100px',
     
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
      <Grid xs={3} spacing={0} sx={
        {      
         
        display:'inline-flex',
        direction:"row",
        justifyContent:"flex-end",
        alignItems:"center"
        }
      }>
        {
          pages.map((page) => (
                            <Link underline="hover" color={'brown'} sx={{display:'inline-block'}}>
                            <Button
                              key={page}
                              onClick={handleCloseNavMenu}
                              sx={{ my: 2, color: 'black', display: 'inline-block' }}
                            >
                             <span className="textLink">{page}</span>
                            </Button>
                            </Link>
                          ))}
        
      </Grid>
      
      
    </Grid>
</>
  );
}
export default ResponsiveAppBar;