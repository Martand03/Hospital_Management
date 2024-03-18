import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Login from './login';
import Signup from './signup';
import Doctors from './doctor';
import Patient from './patient';
function App() {
  return (
    <div className="App">
     <Router>
        <Routes> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path='/patients' element={<Patient/>} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
