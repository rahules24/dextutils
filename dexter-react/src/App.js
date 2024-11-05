import './App.css';
import About from './components/About';
import Dexter from './components/Dexter';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route

function App() {
  return (
    <Routes>  {/* Use Routes directly without Router here */}
      <Route exact path="/" element={<Dexter />} />  {/* Home route */}
      <Route exact path="/about" element={<About />} />  {/* About route */}
    </Routes>
  );
}

export default App;
