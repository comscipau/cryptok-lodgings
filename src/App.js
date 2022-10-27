import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Raffle from "./components/Raffle";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Landing />
      {/* <Raffle /> */}
      <Footer />
    </div>
  );
}

export default App;
