import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Login from './login';
import Signup from './signup';
import Doctors from './doctor';
import Patient from './patient';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
function App() {
  return (
    <div className="App">
     <Router>
        <Routes> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path='/patients' element={<Patient/>} />
          <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
