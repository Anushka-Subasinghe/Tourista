import "./App.css";
import Signin from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TripPlanning from "./pages/TripPlanning";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="trip-planning" element={<TripPlanning />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
