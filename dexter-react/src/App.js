import './App.css';
import About from './components/About';
import Dexter from './components/Dexter';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Dexter />} />
        </Routes>
    </Router>
  );
}

export default App;
