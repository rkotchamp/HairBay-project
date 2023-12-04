import LandingPage from "./Pages/Landing Page/LandingPage";
import { slides } from "../src/data/barber-carousel.json";
import { Route, Routes } from "react-router-dom";
import UsersPage from "./Pages/UsersPage/UsersPage";
import { users } from "./data/user-cards.json";
import Profile from "./Pages/Profile Page/Profile";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage data={slides} />} />
        <Route path="/stylists" element={<UsersPage users={users} />} />
        <Route path="/profile" element={<Profile users={users} />} />
      </Routes>
    </>
  );
}

export default App;
