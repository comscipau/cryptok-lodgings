import { useEffect,useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Raffle from "./components/Raffle";

import { getFactoryContract } from "./connection";

function App() {
  useEffect(()=>{
    getFactoryContract();
  },[]);
  const [iscon,updateCon] = useState(false);

  return (
    <BrowserRouter>
      <div className="overflow-hidden">
        <Navbar up={updateCon}/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/raffle" element={<Raffle up={updateCon} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
