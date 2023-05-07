import "./App.css";
import Welcome from "../src/Components/Welcome/Welcome";
import Navbar from "../src/Components/Navbar/Navbar";
import Carousel from "../src/Components/Carousel/Carousel";
import About from "../src/Components/About/About";
import Doctors from "../src/Components/Doctors/Doctors";
import LatestNews from "../src/Components/LatestNews/LatestNews";
import Contact from "../src/Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Navbar />
      <Carousel />
      <About />
      <Doctors />
      <LatestNews />
      <Contact />
    </div>
  );
}

export default App;
