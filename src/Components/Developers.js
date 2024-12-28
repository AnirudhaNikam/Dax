import Develop1 from "./Develop1.jpg"
import Develop2 from "./Develop2.jpg";
import Develop3 from "./Develop3.jpg"
function Developers(){
    return(
        <>
        <div className="main" style={{paddingLeft:"10%",paddingRight:"10%"}}>
        <h1 style={{color:"#f15a24",textSize:"1px",paddingTop:"5%"}}>--Developers--</h1>
            <div className="text row row-cols-1 row-cols-md-2 g-2">
                <h1> Our latest completed project</h1>
                <div>
                    <p style={{width:"50%",fontSize:"1rem"}}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.<br></br> <a href=".."style={{color:"#f15a24"}}>Companyname.com</a></p></div>                
                </div>

                <div className="photo row row-cols-1 row-cols-md-3 g-3 mt-3 gap-4">
                       <div style={{height:"450px",width:"350px",backgroundImage: `url(${Develop1})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <h1 style={{fontSize:"2rem",color:"white",paddingTop:"95%"}}>Tower <br></br>Bussiness Center</h1>
                        </div>
                        <div style={{height:"450px",width:"350px",backgroundImage: `url(${Develop2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <h1 style={{fontSize:"2rem",color:"white",paddingTop:"85%"}}>Kvartal <br></br>Residences</h1>
                            <p style={{fontSize:"1rem",color:"white"}}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>                
                        </div>
                        <div style={{height:"450px",width:"350px",backgroundImage: `url(${Develop3})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <h1 style={{fontSize:"2rem",color:"white",paddingTop:"95%"}}>PremimumPark <br></br>Residences</h1>
                        </div>
                  </div>
           <button style={{color:"white",backgroundColor:"#2e3a40",border:"none"}}>See all projects</button>
        </div>
        </>
    );
}
export default Developers;