import React, { useEffect, useState } from "react";
import './doctor.css'

function Doctors(){

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [showPatients, setShowPatients] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); 

  useEffect(() => {
    fetch('http://13.232.141.212:8081/patients')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() =>{
    fetch('http://13.232.141.212:8081/appointments')
    .then(res => res.json())
    .then(data => setData1(data)) // Corrected: setData1(data) instead of setData1(data1)
    .catch(err => console.log(err));
  }, []); // Added empty dependency array to run this effect only once

  const handleShowPatients = () => {
    setShowPatients(true);
    setShowAppointments(false);
  };

  const handleShowAppointments = () => {
    setShowAppointments(true);
    setShowPatients(false);
  };

  const handleLogout = () => {
    window.location.href = '/login';
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return(
    <div className="doctor">
      <div className="header">
      <button onClick={toggleSidebar} className="sidebar-toggle">
        {sidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
        <h1>Doctors Dashboard</h1>
      
      </div>
      <div className="doctor-container">
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="doctor-sidebar">
          <button onClick={handleShowPatients}>Show Patients</button>
          <button onClick={handleShowAppointments}>Show Appointments</button>
          <button onClick={handleLogout} className="logoutbutton">Logout</button>
        </div>
      )}

      <div className="main-content">
        {showPatients && (
          <div>
            {data.map((d, i) => (
              <div key={i} className="doctor-card">
                <p>ID: {d.id}</p>
                <p>Name: {d.name}</p>
                <p>Age: {d.age}</p>
                <p>Gender: {d.gender}</p>
                <p>Disease: {d.disease}</p>
                <p>Mobile Number: {d.contact}</p>
              </div>
            ))}
          </div>
        )}
        {showAppointments && (
          <div>
            {data1.map((d1, j) => ( // Changed to data1.map
              <div key={j} className="doctor-card">
                <p>Name: {d1.name}</p>
                <p>Age: {d1.age}</p>
                <p>Gender: {d1.gender}</p>
                <p>Date: {d1.date}</p>
                <p>Mobile Number: {d1.contact}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default Doctors;