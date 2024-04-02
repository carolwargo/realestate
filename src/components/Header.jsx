import React from 'react';
import Master from '../assets/images/Master.jpeg';
function Header() {

    return (
        <header>
        <header className="w3-display-container w3-content w3-wide" style={{maxWidth:"1500px"}} id="home">
  <img className="w3-image" src={Master} alt="master-bedroom" width="1500" height="800"/>
  <div className="w3-display-middle w3-margin-top w3-center">
    <h3 className="w3-xlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min"><b>PEASANT</b></span><span className=" w3-text-black">PROPERTIES</span></h3>
 
  </div>
</header>
        </header>
    );
    }



export default Header;