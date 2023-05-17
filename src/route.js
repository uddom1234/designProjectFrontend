import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Highscore from "./pages/Highscore";
import Archers from "./pages/Archers";
import Ends from "./pages/Ends";
import Competitions from "./pages/Competitions";
import Rounds from "./pages/Rounds";

export default function RouteApp() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archers" element={<Archers />} />
            <Route path="/highscores" element={<Highscore />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/ends" element={<Ends />} />
            <Route path="/rounds" element={<Rounds />} />

        </Routes>
      </Router>
    </>
  );
}
