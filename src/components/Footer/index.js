import React from "react";
import icon1 from '../../images/github.png'
import icon2 from '../../images/linkedin.png'
import icon3 from '../../images/email.png'


const Footer = (temaEscuro) => {
    
    return (
      <>
        <footer id="footer" className={`d-flex flex-wrap justify-content-between py-0 border-top text-${temaEscuro ? 'light' : 'dark'} bg-${temaEscuro ? 'dark' : 'light'}`}>

      <div className="container-md d-left my-3">
        <a href="https://github.com/HenriqueTebet" alt= "github" className="me-3">
        <img src={icon1} alt="github" className="me-2"/></a> 
   
        <a href="https://www.linkedin.com/in/henrique-tebet-31bb5315b/" alt="linkedin">
        <img src={icon2} alt="linkedin" className="me-3"/></a> 
      
        <a href = "mailto: henrique.empresa53@outlook.com">
        <img src={icon3} alt="email" className="me-3"/></a>
     
        </div>
        <div className="container-md my-1">
        <p className="d-flex">&copy; 2021 - Henrique Tebet</p>
        </div>
  
    </footer>
    </>
    )
    }
   
    export default Footer;