import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { HomeHeader } from "../components/HomeHeader";
import { Onboarding } from "../pages/Onboarding";
import About from "../pages/About";
import Help from "../pages/Help";

function App() {
  return (
    <>
      <div>
        <Router>
          <HomeHeader />
          <Routes>
            <Route exact path="/" element={<Onboarding />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/help" element={<Help />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
