import Hero from "./components/Hero";
import HowToPlay from "./components/HowToPlay";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <HowToPlay/>
    </div>
  );
}

export default App;
