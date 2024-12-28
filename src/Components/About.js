import React from "react";
import "./About.css";
import ui4 from"./ui4.jpg";
import ui5 from "./ui5.jpg";
import ui6 from "./ui6.jpg"
function About(){
    return (
      <>
         <h1 style={{textAlign:"center",color:"#f15a24",textSize:"1px",paddingTop:"5%"}}>--About DAX--</h1>
    <div className="App">
      <header className="header">
        <h1>DAX is a modern residential <br></br>complex in your city</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim diam quis enim lobortis.</h3>
      </header>

      <main className="content">
        <section className="section">
          <img src={ui4} alt="Residential Building 1" className="image" />
          <div className="text-content">
            <h1>Location, Community, Quality Living. It Starts Here!</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            <div className="cta">
              <button>Take a look at VR</button>
            </div>
          </div>
        </section>
        
        <section className="section">
          <img src={ui5} alt="Residential Building 2" className="image" style={{marginLeft:'75%',width:"1400px",height:"500px"}}/>
        </section>

        <section className="testimonial">
          <img src={ui6} alt="Philip Demarco" className="profile-pic" />
          
        </section>
        <div>
            <h3 style={{color:"#f15a24",align:"center"}}>
              "Quis lectus nulla at volutpat diam. Sed nisi lacus sed viverra tellus in hac. Enim nunc faucibus a pellentesque sit.Commondo nulla facilisi nillam vehicula ipsun a arcu cursus.Risus Ultricies tristique nulla aliquet enim tortor."
            </h3>
            <h1>
              <strong>Philip Demarco</strong>
              <br />
              Lead architect and partner
            </h1>
          </div>
      </main>

     
    </div>
  
    <main style={{ textAlign: 'center', padding: '50px', backgroundImage: `url(${ui5})`, backgroundSize: 'cover', backgroundPosition: 'center', height:'50vh ',marginTop:"40px",marginBottom:"40px"}}>
      <h1 style={{textAlign: 'center', color:"#fff",fontFamily:"revert"}}>Discover the true defination of laxury</h1>  </main>


      </>
    );
  }
export default About;