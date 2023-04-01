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
import { Link, duration } from '@mui/material';
import style from './style.css';
import logo from '../../Images/Logo.png';
import poza1 from '../../Images/picture1.png';
import useStyles from './style.js';
import {BsFacebook} from 'react-icons/bs';
import {RiInstagramFill} from 'react-icons/ri';
import {AnimatePresence,motion} from 'framer-motion/dist/framer-motion';
import { IconContext } from 'react-icons';
const pages = ['Acasa', 'Despre', 'Ingrediente'];
const social=['Twitter','Reddit','Instagram','Facebook'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
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
    valoare=valoriFoto[1];
  }
  else if(latime>=600)
  {
    valoare=valoriFoto[2];
  }
const primaryColor='rgba(28, 27, 29, 1)';

  return (
    <motion.div    >
     <AppBar  position="static" elevation="0" sx={{backgroundColor:`${primaryColor}`}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              margin:'0',
            }}
          >
             <motion.a
            
              animate={{                 
                rotate: 360,
              }} 
              transition={{duration:1}}
             >
               <img 
                
                src={`${logo}`} alt="logo_ptot-on" className={'logo'} />
              </motion.a>
          </Typography>
            
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
               {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} 
            </Menu>
          </Box> */}
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 0,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '0rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center',
              marginTop:'10px',
            }}
          >
            <motion.a animate={{
              
              rotate:360}}
              transition={{duration:1}}
               >
               <img src={`${logo}`} alt="logo_ptot-on" className={'logo'} />
            </motion.a >
            
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end' }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end',gap:'10px' }}>
          <motion.a  animate={{                 
                rotate: 360,
              }} 
              transition={{duration:1}}>
          <BsFacebook fontSize={`${valoare}rem`} color='white'/>
          </motion.a>
          <motion.a  animate={{                 
                rotate: 360,
              }} 
              transition={{duration:1}}>
          <RiInstagramFill fontSize={`${valoare}rem`} color='white' />
          </motion.a>
          </Box>
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
    {/* <div>
      <div>
        <Link >
               <img src={`${logo}`} alt="logo_ptot-on" className={'logo'} />
        </Link>
      </div>
      <div>

               <BsFacebook fontSize={`${valoare}rem`} color='white'/>
               <RiInstagramFill fontSize={`${valoare}rem`} color='white' />
       
      </div>
    </div>
    */}
    <div class="headerDivider">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div> 
</motion.div>
  );
}
export default Navbar;