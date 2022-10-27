import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Raffle from "./components/Raffle";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/raffle" element={<Raffle />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
