import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Onboarding } from "../pages/Onboarding";
import About from "../pages/About";
import Help from "../pages/Help";
import { TeamPage } from "../pages/TeamPage";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Onboarding />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/:mail" element={<TeamPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
