import LandingPage from "./Pages/Landing Page/LandingPage";
import { slides } from "../src/data/barber-carousel.json";
import { Route, Routes } from "react-router-dom";
import UsersPage from "./Pages/UsersPage/UsersPage";
import { users } from "./data/user-cards.json";
import Profile from "./Pages/Profile Page/Profile";
import Calendar from "./Components/Calendar/ParentCalendar/Calendar";
import Confirmation from "../src/Pages/ConfirmationPage/Confirmation";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage data={slides} />} />
        <Route path="/stylists" element={<UsersPage users={users} />} />
        <Route path="/profile/:id" element={<Profile users={users} />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/confirm" element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;
