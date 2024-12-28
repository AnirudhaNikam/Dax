import ui1 from "./ui1.jpg";
import { Link } from "react-router-dom";
function Home()
{
    return (
        <>
         <div style={{ fontFamily: 'Arial, sans-serif' }}>
     
     <main style={{ textAlign: 'center', padding: '50px', backgroundImage: `url(${ui1})`, backgroundSize: 'cover', backgroundPosition: 'center', height:'100vh '}}>
     <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px'}}>
       <div>
         <h1 style={{ margin: 0, fontSize: '24px' }}>dax</h1>
         <p style={{ margin: 0, fontSize: '12px', color: 'gray' }}>residential complex</p>
       </div>
       <nav style={{ display: 'flex', gap: '20px' }}>
         <Link to="/About" style={{ textDecoration: 'none', color: '#333' }}>ABOUT</Link>
         <Link to="/Timeline" style={{ textDecoration: 'none', color: '#333' }}>TIMELINE</Link>
         <Link to="/Apartment" style={{ textDecoration: 'none', color: '#333' }}>APARTMENTS</Link>
         <Link to="/Benifits" style={{ textDecoration: 'none', color: '#333' }}>BENEFITS</Link>
         <Link to="/Developers" style={{ textDecoration: 'none', color: '#333' }}>DEVELOPER</Link>
         <Link to="/Reviews" style={{ textDecoration: 'none', color: '#333' }}>REVIEWS</Link>
         <Link to="/Contacts" style={{ textDecoration: 'none', color: '#333' }}>CONTACTS</Link>
       </nav>
       <button style={{ backgroundColor: '#f15a24', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Ask a Question</button>
     </header>
    
       <h1 style={{ fontSize: '66px', color: '#333', marginBottom: '20px', marginTop:'120px'}}>A unique fusion<br></br> of convenience<br></br> and luxury</h1>
       <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
         <button style={{ padding: '10px 20px', backgroundColor: 'transparent', color: '#fff', border: '1px solid white', borderRadius: '5px' }}>Explore Dax</button>
         <button style={{ padding: '10px 20px', backgroundColor: '#383838', color: '#fff', border: 'none', borderRadius: '5px' }}>Take a look at VR</button>
       </div>
     </main>
   </div>

 );
        </>
    );
}
export default Home;