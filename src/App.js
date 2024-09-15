import React from "react";
import "./App.css";
import Signin from "./parts/Signin";
import MainPage from "./parts/MainPage";
import Faq from "./parts/Faq";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
