import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Onboarding } from "../pages/Onboarding";
import About from "../pages/About";
import Help from "../pages/Help";
import { AllProjectsPage } from "../pages/AllProjectsPage";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Onboarding />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/:mail" element={<AllProjectsPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
