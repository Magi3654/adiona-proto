import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import  Login  from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/Principal" element={<Navigation/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
