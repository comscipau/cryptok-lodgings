import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Raffle from "./components/Raffle";

import { getFactoryContract } from "./connection";
import Modal from "./fragments/Modal";

function App() {
  useEffect(() => {
    getFactoryContract();
  }, []);
  const [iscon, updateCon] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <BrowserRouter>
      <div className="overflow-hidden">
        <Navbar up={updateCon} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/raffle" element={<Raffle up={updateCon} />} />
        </Routes>
        <Footer />
        <div className="flex justify-center">
          <button
            className="text-white border-[3px] border-gold p-2 m-4 rounded-lg"
            onClick={() => setShowModal(true)}
          >
            Open Modal
          </button>
        </div>
        <Modal visible={showModal} onClose={closeModal} />
      </div>
    </BrowserRouter>
  );
}

export default App;
