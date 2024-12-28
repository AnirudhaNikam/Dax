import ui7 from"./ui7.jpg";
import ui8 from "./ui8.jpg"
import "./Apartment.css"

function Apartment(){
    return(<>
 <h1 style={{color:"#f15a24",textSize:"1px",paddingTop:"5%", textAlign:"center"}}>--Apartment--</h1>
 <div className="container">
      <header className="header">
        <h1>Home is where the amenities are</h1>
        <p style={{ fontSize:"1.5rem"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </header>

      <nav className="navigation">
        <ul>
          <li>One room</li>
          <li className="active">Two rooms</li>
          <li>Three rooms</li>
          <li>Four rooms</li>
        </ul>
      </nav>

      <section className="floor-plan">
        <img src={ui7} alt="Two-room floor plan"/>
        <div className="details">
          <h2>From <span className="highlight">64m²</span></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam
            dignissim diam.
          </p>
          <button>Show offer of apartments</button>
          <p>6 vacant apartments</p>
        </div>
      </section>
      <section className="gallery">
        <img
          src={ui8} alt="Living room" />
        <div className="navigation">
          <button>&lt;</button>
          <span>3 / 26</span>
          <button>&gt;</button>
        </div>
      </section>
    </div>
  );





    </>
    );
}
export default Apartment;