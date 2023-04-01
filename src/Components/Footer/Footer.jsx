import React from 'react';
import style from './footer.css';
import logo from '../../Images/Logo.png';
import { Link } from '@mui/material';
const Footer=()=>{
    let date=new Date();
   

    return(
        <>
        <footer className={"footer"}>
  <div className={"footer__inner"}>
    <div className={"footer__logo"}>
      <img src={logo} alt="Proteic Biscuit Logo"/>
    </div>
    
    <div className="contCopyPrivate">
    <span>{`Copyright © ${date.getFullYear()}  PROT-ON. All Rights Reserved.`}</span>
    {/* <Link to='/PrivacyPolicy'> Privacy Policy </Link> */}
    </div>
  </div>
</footer>
        </>
    );
}
export default Footer;