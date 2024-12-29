/*import map from "./con.jpg"*/
function Contacts()
{
    return(
        <>
 <div style={{backgroundColor:"grey",paddingTop:"2%"}}>
     <div className="container " style={{marginLeft:"10%",marginRight:"10%"}}>
     <h4 style={{color:"#f15a24",textSize:"0.5rem",paddingTop:"2%"}}>--CONTACTS--</h4>
       <div className="image row row-cols-1 row-cols-md-3 g-3 mt-3 gap-5">
       <div style={{height:"350px",width:"400px",fontSize:"4rem",color:"white"}}>
         <h1>Do you want to visit us?</h1>
       </div>
       <div style={{height:"350px",width:"350px",color:"white"}}>
        <h5>121 King Street,<br></br> Melbourne victoria 3000<br></br>Australia</h5>
        <br></br>
        <h5>Look at the map</h5>
        </div>
        <div style={{height:"350px",width:"350px",color:"white"}}>
        <h5>+61 3 8376 6284 <br></br><p style={{color:"#f15a24"}}>info@dax.com</p></h5>
        <button style={{background:"transparent",color:"white",border:"1px solid white",width:"250px"}}> Send Message</button>
        </div>
       </div>

     <div style={{paddingBottom:"2%"}}>
        <p style={{color:"white",textAlign:"center",fontWeight:"bold",fontSize:"1.5rem",width:"80%",paddingLeft:"20%"}}>For more details, leave your phone number and we will be happy to answer all your questions.</p>
        <input style={{placeholder:"Tel..+1(__)__-_-_",border:"2px solid white",textAlign:"center",type:"number",height:"40px",width:"300px",marginLeft:"30%"}}/>
        <button style={{backgroundColor:"#f15a24",color:"white",width:"150px",height:"40px",border:"none"}}>More Details</button>
     </div>
     <hr style={{color:"black"}}></hr>
     <div className="bottom row row-cols-1 row-cols-md-4 g-3 mt-4 gap-3">
      <div>
         <h1 style={{ margin: 0, fontSize: '24px',color:"white" }}>dax</h1>
         <p style={{ margin: 0, fontSize: '12px', color: 'gray' }}>residential complex</p>
       </div>
        <p style={{color:"white",paddingRight:"5%",width:"40%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus in hac habitasse platea.</p>
       <div>
        <p style={{color:"grey"}}>2022 DAX Residental Complex.All Rights Reserved/Privaci Policy/Cookies</p>
       </div>
      </div>
      </div>

      
  </div>
        </>
    )
}
export default Contacts;