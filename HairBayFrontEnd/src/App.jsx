import LandingPage from "./Pages/Landing Page/LandingPage";
import SearchBar from "./Components/search Bar/SearchBar";
import Button from "./Components/Button/Button";
import { slides } from "../src/data/barber-carousel.json";
import "./App.css";

function App() {
  return (
    <>
      <LandingPage data={slides} />
    </>
  );
}

export default App;
