import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Homepage from "./Component/Homepage";
import ContactUs from "./Component/ContactUs";
import AboutUs from "./Component/AboutUs";
import Men from "./Component/Men";
import Women from "./Component/Women";


import Supplements from "./Component/Supplements"
import Singlep from "./Component/Singlep";

function App() {
  return (
    <div>
      <Header className="header"/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Aboutus" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
         <Route path="/Product/men" element={<Men />} />
        <Route path="/Product/women" element={<Women />} />
       <Route path="/Product/Supplements" element={<Supplements/>} />
       <Route path="/Singlep" element={<Singlep/>} />
       
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
