import Benifits from "./Components/Benifits";
import About from "./Components/About";
import Apartment from "./Components/Apartment";
import Timeline from "./Components/Timeline";
import{Routes,Route}from'react-router-dom';
import Developers from "./Components/Developers";
import Reviews from "./Components/Reviews";
import Contacts from "./Components/Contacts";
import Home from "./Components/Home";

function App() {
  return (
    <>
    <Home/>
    <About/>
    <Timeline/>
    <Apartment/>
    <Benifits/>
    <Developers/>
    <Reviews/>
    <Contacts/>
<Routes>
<Route  path="/About" element={<About/>}/>
<Route  path="/Timeline" element={<Timeline/>}/>
<Route  path="/Apartment" element={<Apartment/>}/>
<Route  path="/Benifits" element={<Benifits/>}/>
<Route  path="/Developers" element={<Developers/>}/>
<Route  path="/Reviews" element={<Reviews/>}/>
<Route  path="/Contacts" element={<Contacts/>}/>
</Routes>  
    </>
  
  );
}

export default App;
