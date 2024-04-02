import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import LocationView from "../assets/images/LocationView.png";
import PinkDoor from "../assets/images/RealEstate/BeachHouses/PinkDoor.png";
import StoneRoad from "../assets/images/RealEstate/BeachHouses/StoneRoad.png";
import YellowHouse from "../assets/images/RealEstate/BeachHouses/YellowHouse.png";
import BikeHouse from "../assets/images/RealEstate/BeachHouses/BikeHouse.png";
import BigBlack from '../assets/images/RealEstate/BigBlack.png';
import OnLake from '../assets/images/RealEstate/OnLake.png'; 
import Triangle from '../assets/images/RealEstate/Triangle.png';
import WhiteTan from '../assets/images/RealEstate/WhiteTan.png';
import BlueShed from '../assets/images/RealEstate/BlueShed.png';
import BarShed from '../assets/images/RealEstate/BarShed.png';
import WhiteOffice from '../assets/images/RealEstate/WhiteOffice.png';
import LakeShed from '../assets/images/RealEstate/LakeShed.png';
import WhiteFarm from '../assets/images/RealEstate/WhiteFarm.png';
import WoodFront from '../assets/images/RealEstate/WoodFront.png';
import DoubleFarm from '../assets/images/RealEstate/DoubleFarm.png';
import SunsetFarm from '../assets/images/RealEstate/SunsetFarm.png'; 
import Blonde from '../assets/images/RealEstate/Blonde.png';
import Manager from '../assets/images/RealEstate/Manager.png';
import Designer from '../assets/images/RealEstate/Designer.png';
import GirlDesk from '../assets/images/RealEstate/GirlDesk.png';

function HomePage() {

    const styles = {
        chatWidget: {
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#f9f9f9',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '10px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          zIndex: '9999',
        },
        chatWidgetContent: {
          display: 'flex',
          alignItems: 'center',
        },
        chatWidgetText: {
          marginRight: '10px',
        },
        chatWidgetIcon: {
          color: '#007bff',
        },
      };
    return (
        <div className="home" id="home">
 
 {/*Start Page Content */}
 <div className="w3-content w3-padding" style={{maxWidth:"1564px"}}>
       {/*Start Live Chat */}
     <div className="chat-widget" style={styles.chatWidget}>
      <div className="chat-widget-content" style={styles.chatWidgetContent}>
        <span className="chat-widget-text" style={styles.chatWidgetText}>Live Chat</span>
        <i className="fas fa-comments chat-widget-icon" style={styles.chatWidgetIcon}></i>
      </div>
    </div>
    {/*End Live Chat */}
    
 {/**Start page container */}
 <div className="w3-container w3-padding-16" id="properties">

    <div className="w3-padding-32">
    <h3 className=" w3-border-light-grey text-center"><b>PEASEANT</b>
    <span className='fw-light'> |PROPERTIES</span></h3>
  <p className="text-center w3-margin-bottom">...properties that transcend the ordinary, 
  offering exclusivity, seclusion, and a touch of magic.</p>
    <div className="row">
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
            <b>BEACH</b><span className='text-secondary'>|SHANTIES</span></div>
        <img src={YellowHouse} alt="House" style={{width:"100%"}} 
        className='w3-opacity w3-hover-opacity-off'/>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
            <b>TRAPPER</b><span className='text-secondary'>|CABINS</span></div>
        <img src={Triangle} alt="House" style={{width:"100%"}} 
        className='w3-opacity w3-hover-opacity-off'/>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
            <b>BARN</b><span className='text-secondary'>|BUILDS</span></div>
        <img src={WhiteFarm}alt="House" style={{width:"100%"}} 
        className='w3-opacity w3-hover-opacity-off'/>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">
            <b>WE</b><span className='text-secondary'>|SHED</span></div>
        <img src={LakeShed} alt="House" style={{width:"100%"}} 
        className='w3-opacity w3-hover-opacity-off'/>
      </div>
    </div>  
    </div>
    </div>
    </div> 
{/**end featured Container*/}


{/**Start Projects Container */}
{/**Start BEACH Builds */}
<div id="beach"> 
    <div className="card shadow">
    <div className="w3-row-padding">
    <div className="w3-display-container w3-padding">
    <h4><b>BEACH</b><span className="fw-light">|CHANTIES</span></h4>
        <p style={{fontSize: "12px"}}>Rustic getaways fit for royalty.</p> 
        </div>
    <div className="w3-display-container w3-padding">
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Row Home</div>
        <img src={YellowHouse} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
        <img src={BikeHouse} alt="House" style={{width:"100%"}}/>
      </div>
    </div>

    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Summer House</div>
        <img src={StoneRoad} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
    
  
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Mixed-Development</div>
        <img src={PinkDoor} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
 
  
  <div className="row">
    <div className="col-sm-12 col-md-8 col-lg-8">
    <div className="w3-display-container w3-padding-16">
  
        <p style={{fontSize:'14px'}}>"Welcome to our vibrant coastal village, 
        where the town is painted 
            with the hues of the sea and the sky! Nestled along the sandy shores, 
            our charming village stands like a cheerful sentinel, adorned in a riot 
            of colors that dance with the sunlight. Wander through the winding 
            walkways lined with cobblestone, each a unique treasure trove of 
            seaside whimsy. Awnings flutter in the wind, casting playful shadows on 
            the cobblestone streets below with their beachside charm. <span>            
                <Link to="/" className="link-primary justify-content-end text-decoration-none">
                    learn more...</Link>
   </span></p>
 </div>
    <div className="col-sm-12 col-md-4 col-lg-4">
  <div className="mb-2">
    <Button variant="dark" className="w-100 mb-2">
      <Link className="text-white text-decoration-none"><i className="fas fa-download"></i> Specs</Link>
    </Button>
  </div>
  <div className="mb-2">
    <Button variant="dark" className="w-100 mb-2">
      <Link className="text-white text-decoration-none"><i className="fas fa-calendar-alt"></i> Showing</Link>
    </Button>
  </div>
  <div className="mb-2">
    <Button variant="dark" className="w-100 mb-2">
      <Link className="text-white text-decoration-none"><i className="fas fa-share"></i> Share</Link>
    </Button>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/**End BEACH Builds */}

{/**start Trapper Cabins */}
<div id="trapper"> 
    <hr/>  
    <br/> 

    <div className="card shadow">
    <div className="w3-row-padding">
    <div className="w3-display-container w3-padding">
    <h4><b>TRAPPER</b><span className="fw-light">|CABINS</span></h4>
        <p style={{fontSize: "12px"}}>Rustic getaways fit for royalty.</p> 
        </div>
    <div className="w3-display-container w3-padding">
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Tear-Down</div>
        <img src={BigBlack} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
        <img src={OnLake} alt="House" style={{width:"100%"}}/>
      </div>
    </div>

    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
        <img src={Triangle} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
    
  
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
        <img src={WhiteTan} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
 
    <div className="w3-display-container w3-padding-16">
  <div className="row">
    <div className="col-sm-12 col-md-8 col-lg-8">
    <p style={{fontSize:'14px'}}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab qui exercitationem doloribus totam itaque? Velit soluta ea dolores molestias pariatur reiciendis maxime nostrum. Distinctio possimus sed consequatur reprehenderit repudiandae velit?" 
    <span>   
        <Link to="/" className="link-primary justify-content-end">learn more...</Link></span></p> 
                    </div>
    <div className="col-sm-12 col-md-4 col-lg-4">
  <div className="mb-2">
    <Button variant="dark" className="w-100 mb-2">
      <Link className="text-white text-decoration-none"><i className="fas fa-download"></i> Specs</Link>
    </Button>
  </div>
  <div className="mb-2">
    <Button variant="dark" className="w-100 mb-2">
      <Link className="text-white text-decoration-none"><i className="fas fa-calendar-alt"></i> Showing</Link>
    </Button>
  </div>
  <div className="mb-2">
    <Button variant="dark" className="w-100 mb-2">
      <Link className="text-white text-decoration-none"><i className="fas fa-share"></i> Share</Link>
    </Button>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/**end trapper */}



{/**Start Barn Builds */}
<div id="barns"> 
<hr/>  
    <br/> 
    <div className="card shadow">
    <div className="w3-row-padding">
    <div className="w3-display-container w3-padding">
    <h4><b>BARN</b><span className="fw-light">|BUILDS</span></h4>
        <p style={{fontSize: "12px"}}>Hidden Pearls, Nestled by the Sea.</p>
        </div>
    <div className="w3-display-container w3-padding">
    <div className="w3-col l3 m6 w3-margin-bottom ">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
        <img src={DoubleFarm} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
        <img src={SunsetFarm} alt="House" style={{width:"100%"}}/>
      </div>
    </div>

    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
        <img src={WhiteFarm} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
    
  
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Tear-down</div>
        <img src={WoodFront} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
 
  
    <div className="w3-display-container w3-padding-16">
  <div className="row">
    <div className="col-sm-12 col-md-8 col-lg-8">
    <p style={{fontSize:'14px'}}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab qui exercitationem doloribus totam itaque? Velit soluta ea dolores molestias pariatur reiciendis maxime nostrum. Distinctio possimus sed consequatur reprehenderit repudiandae velit?" 
    <span>   
        <Link to="/" className="link-primary justify-content-end">learn more...</Link></span></p> </div>
    <div className="col-sm-12 col-md-4 col-lg-4">
  <div className="mb-2">
    <Button variant="dark" className="w-100 mb-2">
      <Link className="text-white text-decoration-none"><i className="fas fa-download"></i> Specs</Link>
    </Button>
  </div>
  <div className="mb-2">
    <Button variant="dark" className="w-100 mb-2">
      <Link className="text-white text-decoration-none"><i className="fas fa-calendar-alt"></i> Showing</Link>
    </Button>
  </div>
  <div className="mb-2">
    <Button variant="dark" className="w-100 mb-2">
      <Link className="text-white text-decoration-none"><i className="fas fa-share"></i> Share</Link>
    </Button>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/**End Barn Builds */}


{/**Start SHEDS */}
<div id="sheds"> 
<hr/>  
    <br/> 
    <div className="card shadow">
    <div className="w3-row-padding">
    <div className="w3-display-container w3-padding">
    <h4><b>WE</b><span className="fw-light">|SHEDS</span></h4>
        <p style={{fontSize: "12px"}}>Hidden Pearls, Nestled by the Sea.</p>
 </div>
    <div className="w3-display-container w3-padding">
    <div className="w3-col l3 m6 w3-margin-bottom ">
      <div className="w3-display-container">
      <div className="w3-display-topleft w3-black w3-padding">New-Construction</div>
        <img src={WhiteOffice} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
      <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
        <img src={LakeShed} alt="House" style={{width:"100%"}}/>
      </div>
    </div>

    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">New-Construction</div>
        <img src={BlueShed} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
    
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">New-Construction</div>
        <img src={BarShed} alt="House" style={{width:"100%"}}/>
      </div>
    </div>
 
 
    <div className="w3-display-container w3-padding-16">
  <div className="row">
    <div className="col-sm-12 col-md-8 col-lg-8">
    <p style={{fontSize:'14px'}}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab qui exercitationem doloribus totam itaque? Velit soluta ea dolores molestias pariatur reiciendis maxime nostrum. Distinctio possimus sed consequatur reprehenderit repudiandae velit?" 
    <span>   
        <Link to="/" className="link-primary justify-content-end">learn more...</Link></span></p> 
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4">
  <div className="mb-2">
    <Button variant="dark" className="w-100 mb-2">
      <Link className="text-white text-decoration-none"><i className="fas fa-download"></i> Specs</Link>
    </Button>
  </div>
  <div className="mb-2">
    <Button variant="dark" className="w-100 mb-2">
      <Link className="text-white text-decoration-none"><i className="fas fa-calendar-alt"></i> Showing</Link>
    </Button>
  </div>
  <div className="mb-2">
    <Button variant="dark" className="w-100 mb-2">
      <Link className="text-white text-decoration-none"><i className="fas fa-share"></i> Share</Link>
    </Button>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/**End SHEDS */}
<div>      
</div>
<hr/>
{/**End We Shed */} 
{/**End Projects Section */}










{/***********************************************************************/}
{/**Start About Section*/}
<div className="w3-black">
<div id="about">
    <div className="w3-container">
        <br />
<h2 className=" w3-border-light-grey text-center w3-margin py-3"><b>ABOUT</b><span className='fw-light'> |US</span></h2>

<p>At Peasant Properties, we redefine luxury by specializing in the extraordinary. Within our portfolio are properties that transcend the ordinary, offering exclusivity, seclusion, and a touch of magic. Our curated selection encompasses unique havens tucked away in serene landscapes, ranging from private beaches and secluded islands to luxury cabins. </p>

  
     <div className="row w3-padding-32 w3-grayscale">
     <div className="col-md-4">
    <div className="container">
      <h3><b>OUR</b>VISION.</h3>
      <p style={{fontSize:'14px'}}>Driven by a visionary outlook, our approach to real estate is refreshingly distinct. Unlike conventional definitions of luxury that prioritize size and paid amenities, our vision is centered around the notion of uniqueness. For us, luxury properties are not merely defined by their grandeur, but by their exceptional qualities and unparalleled character. It's this emphasis on individuality and exclusivity that sets their projects apart in a crowded marketplace.</p>
   </div>
    </div>

    <div className="col-md-4">
      <div className="container ">
      <h3><b>OUR</b>PASSION.</h3>
      <p style={{fontSize:'14px'}}>Our passion lies in uncovering hidden gems, each property meticulously chosen for its ability to transport you to a world of unparalleled tranquility and opulence. Whether you seek the solace of a high-end cabin enveloped by nature's embrace, the serenity of a she shed designed for refined relaxation, or the rustic charm of a barn transformed into a luxurious abode, Peasant Properties is your gateway to an extraordinary living experience.</p>
      </div>
    </div>
    
    <div className="col-md-4">
    <div className="container">
    <h3><b>OUR</b>COMMITMENT.</h3>
    <p style={{fontSize:'14px'}}>We pledge and commitment to personalized service and an unwavering dedication to excellence, we strive to make your dream of owning a unique sanctuary a reality. Trust in Peasant Properties to guide you on a journey to discover the extraordinary, where luxury meets seclusion and exclusivity knows no bounds. Welcome to a world where every property tells a story, and your next chapter begins with us.</p>
    </div>
    </div>
    </div>
 </div>
{/**Start About Grid */}
<div className="w3-row-padding w3-grayscale">
<h3 className="w3-padding-16 text-center"><b>OUR</b>TEAM.</h3>

    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src={GirlDesk} alt="John" style={{width:"100%"}}/>
      <h4>Emily Parker</h4>
      <p className="w3-opacity">Marketing Lead</p>
      <p style={{fontSize:'12px'}}>Emily started as an intern 5 years, and has worked her way up to a lead role. She is a natural born storyteller, navigating our ever-evolving landscape with finesse and creativity. Crafting compelling narratives and orchestrating campaigns that resonate with our audience, and motivates her team.</p>
      <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src={Designer} alt="Jane" style={{width:"100%"}}/>
      <h4>Jasmine Rodriguez</h4>
      <p className="w3-opacity">Design Lead</p>
      <p style={{fontSize:'12px'}}>Jasmine, Owner and co-founding partner is a true visionary. An architect and interior designer whose creative flair knows no bounds. With a passion for transforming spaces into captivating works of art, Jasmine brings a unique blend of elegance and innovation to every project she undertakes."</p>
      <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src={Manager} alt="Mike" style={{width:"100%"}}/>
      <h4>Sophia Thompson</h4>
      <p className="w3-opacity">Project Manager</p>
      <p style={{fontSize:'12px'}}>Sophia, Owner and Co-Founding partner orchestrates each phase of a project with precision, ensuring timelines are met and goals exceeded. Sophia's strategic thinking and impeccable attention to detail make her an invaluable asset to any team, driving efficiency and success at every turn.</p>
      <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src={Blonde} alt="Dan" style={{width:"100%"}}/>
      <h4>Isabella Martinez</h4>
      <p className="w3-opacity">Sales</p>
      <p style={{fontSize:'12px'}}>Isabella has been with Peasant Properties from the start and is a force to be reckoned with in the world of sales. Her charismatic leadership and unparalleled expertise empower her team to achieve remarkable results, consistently surpassing expectations and setting new standards of excellence.</p>
      <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
  </div>
  </div>
  </div>
{/**End About Grid */}
{/**End About Section */}
<hr/>
<div className="w3-container w3-padding-32" id="contact">
  <div className="row justify-content-center align-items-center">
    <div className="col-sm-12 col-md-6 col-lg-6" >
<div className="container">
<h3 className="w3-border-light-grey w3-padding-16">Contact Us</h3>
    <p>Let's talk about our next project.</p>
 
<form action="/action_page.php" target="_blank">
      <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name"/>
      <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email"/>
      <input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject"/>
      <input className="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment"/>
      <button className="w3-button w3-black w3-section" type="submit">
        <i className="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </form>
</div>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
  <div className="w3-container">
  <h3 className="w3-border-light-grey w3-padding-8">Come See Us!</h3>
  <p>Where we are located.</p>
    <img src={LocationView} className="w3-image" alt='location-map' style={{width:"100%"}}/>
    <p>Hours of Operation: <br />Monday-Friday: 9:00 AM - 6:00 PM
    <br />Saturday-Sunday: Closed</p>
  </div>
</div>

  </div>
  </div>
  </div>  
   {/*End Page Container */}
   
 {/*End Page Content */}
{/*Start Footer*/}
 <footer className="w3-center w3-padding-16">
  <p>Powered by <a href="https://carolwargo.github.io/react-portfolio" title="sample"  className="w3-hover-text-green"><b>CW</b>HOME</a></p>
</footer>
{/*Start Footer*/}
</div>

    );
};

export default HomePage;