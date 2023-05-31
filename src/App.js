import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import Header from "./component/header/Header";
import Fotter from "./component/fotter/Fotter";
import Hero from "./component/Ui/Hero";
import Service from "./component/Ui/Service.";
import Portfolio from "./component/Ui/Portfolio";
import Contact from "./component/Ui/Contact";

 

function App() {
  useEffect(()=>{
    Aos.init();
  },[])
      
  return <div >
       
   
      <Header />
      <main>
        <Hero />
        <Service />
        <Portfolio />
        <Contact />
      </main>
      <Fotter />
 
      
  </div>;
}

export default App;
