import React from "react";



const Footer = (temaEscuro) => {
    
    return (
      <>
        <footer id="footer" className={`d-flex flex-wrap justify-content-between py-0 border-top text-${temaEscuro ? 'light' : 'dark'} bg-${temaEscuro ? 'dark' : 'light'}`}>

      <div className="container-md d-left my-3">
        <a href="https://github.com/HenriqueTebet" alt= "github" className="me-3">
        <img alt="git" className="me-2"/></a> 
   
        <a href="https://www.linkedin.com/in/henrique-tebet-31bb5315b/" alt="linkedin">
        <img alt="linkedin" className="me-2"/></a> 
      
        <a href = "mailto: henrique.empresa53@outlook.com">
        <img alt="email" className="me-2"/></a>
     
        </div>
        <div className="container-md my-3">
        <p className="d-flex">&copy; 2021 - Henrique Tebet</p>
        </div>
  
    </footer>
    </>
    )
    }
   
    export default Footer;