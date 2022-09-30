import React from 'react'
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa"
import "../styles/footer.css";

function Footer() {
  return (
    <>
    <footer>
    <h1 className='footer-title'>Contactanos</h1>
<div className='footer-container'>
    <div className='icon-container'>
        <FaInstagram className='ig'/>
    </div>
    <div className='icon-container'>
        <FaWhatsapp className='wsp'/>
    </div>
    <div className='icon-container'>
        <FaFacebook className='fb'/>
    </div>
</div>
</footer>
</>
  )
}

export default Footer;