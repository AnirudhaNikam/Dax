import one from "./two.jpg"
import airCleaningIcon from "./one.jpg"
import waterSupplyIcon from "./Water.jpg"
import powerSupplyIcon from "./5.jpg"
import Heating from "./3.jpg"
import securityIcon from "./6.jpg";
import Building from "./Building.jpg"
function Benifits()
{
    return (
        <>
        <main style={{paddingTop:"1rem"}}>

        <div className="row row-cols-1 row-cols-md-4 g-4 m-5 p-5">
          <div className="row-2">
          <h1 style={{color:"#f15a24",textSize:"1px",paddingTop:"5%"}}>--Benifits--</h1>
          <h1 style={{color:"grey"}}>Apartments tailored to your highest standards</h1>
        </div>
  <div className="col">
    <div className="card h-100">
      <img src={airCleaningIcon} class="card-img-top" alt="..."style={{height:"200px",width:"200px"}}/>
      <div className="card-body">
        <h5 className="card-title">Air Cleaning</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={one} class="card-img-top" alt="Ventilation"style={{height:"200px",width:"200px"}}/>
      <div className="card-body">
        <h5 className="card-title"> Ventilation</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={Heating} class="card-img-top" alt="Heating"style={{height:"200px",width:"200px"}}/>
      <div className="card-body">
        <h5 className="card-title">Heating</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src={waterSupplyIcon} class="card-img-top" alt="..."style={{height:"200px",width:"200px"}}/>
    <div className="card-body">
        <h5 className="card-title">waterSupply</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={powerSupplyIcon} class="card-img-top" alt="Heating"style={{height:"200px",width:"200px"}}/>
      <div className="card-body">
        <h5 className="card-title">powerSupply</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={securityIcon} class="card-img-top" alt="Heating"style={{height:"200px",width:"200px"}}/>
      <div className="card-body">
        <h5 className="card-title">security</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
  </div>
</div>
       <div className="row row-cols-1 row-cols-md-4 g-4 m-5" >
            <div className="stat-item"style={{flex:"1"}}>
                <h2 style={{fontSize:"2rem",color:"#f15a24"}}>264</h2>
                <p>Apartments</p>
            </div>
            <div className="stat-item"style={{Flex:"1"}}>
                <h2  style={{fontSize:"2rem",color:"#f15a24"}}>12-21</h2>
                <p>Floors</p>
            </div>
            <div className="stat-item"style={{flex:"1"}}>
                <h2  style={{fontSize:"2rem",color:"#f15a24"}}>2100m²</h2>
                <p>Common green areas</p>
            </div>
            <div className="stat-item"style={{flex:"1"}}>
                <h2  style={{fontSize:"2rem",color:"#f15a24"}}>979</h2>
                <p>Underground parking spaces</p>
            </div>
        </div>

        <div className="image-section row row-cols-1 row-cols-md-2 g-2">
            <img src={Building} alt="Apartment Complex" style={{width:"50%",height:"50%",paddingLeft:"10%"}}/>
            <div>
            <p style={{marginTop:"5%",fontSize:"2rem",width:"40%",paddingLeft:"2%"}}>Modern conveniences & entertainment, all within your reach</p>
            <p style={{marginTop:"0.5%",fontSize:"1rem",paddingLeft:"2%",width:"50%"}}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
    
        </main>
 

        </>
    );
}
export default Benifits;
