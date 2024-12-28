function Reviews()
{
    return(
        <>
    <div className="main " style={{marginLeft:"10%",marginRight:"10%",paddingBottom:"5%"}}>
        <h2 style={{color:"#f15a24",textSize:"0.5rem",paddingTop:"5%",textAlign:"center"}}>--REVIWES--</h2>
            <div style={{width:"80%",paddingLeft:"35%",paddingTop:"2%",color:"grey"}}>
              <h1>What our happy coustomers say about DAX</h1>
            </div>
            <p style={{marginLeft:"20%",marginRight:"10%",marginTop:"10%",width:"60%",color:"#f15a24",fontSize:"1.5rem",fontWeight:"bold" }}>"Quis lectus nulla at volutpat daim. Sed nisi lacus sed viverra 
                tellus in hac .Enim nunc faucibus a pellentesque sit. Commodo
                nulla facilisi nullam vehicula ipsum a arcu cursus.Risus
                    ultricies tristique nulla aliquet enim tortor."
            </p>
            <h2  style={{width:"80%",paddingLeft:"39%",paddingTop:"2%",color:"#5b5c5b"}}>Philip Demarco</h2>
            <h6  style={{width:"80%",paddingLeft:"40%",paddingTop:"0%",color:"grey"}}>Lead architect and partner</h6>
            <hr style={{marginTop:"5%"}} ></hr>

            <div className="bottom-data row row-cols-1 row-cols-md-4 g-4">
                <h1 style={{color:"grey"}}>dax</h1>
                <h1 style={{color:"grey"}}>Tower</h1>
                <h1>Premium Park</h1>
                <h1 style={{color:"grey"}}>Kvartal</h1>

            </div>

    </div>
         </>
    );
}
export default Reviews;