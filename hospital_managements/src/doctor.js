// import React, { useEffect, useState } from "react";

// function Doctors(){
    
//   const [data,setData] = useState([])
//   useEffect(()=>{
//     fetch('http://localhost:8081/doctors')
//     .then(res => res.json())
//     .then(data => setData(data))
//     .catch(err => console.log(err));
//   }, [])


//   return(
//     <div>
//       <table>
//         <thead>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Designation</th>
//           <th>Experience</th>
//           <th>Mobile Number</th>
//         </thead>
//         <tbody>
//           {data.map((d,i) => (
//             <tr key={i}>
//               <td>{d.id}</td>
//               <td>{d.name}</td>
//               <td>{d.designation}</td>
//               <td>{d.experience}</td>
//               <td>{d.mobilenumber}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Doctors;


import React, { useEffect, useState } from "react";
import './doctor.css'

function Doctors(){

  const [data, setData] = useState([]);
  const [showPatients, setShowPatients] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8081/doctors')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  const handleShowPatients = () => {
    setShowPatients(true);
    setShowAppointments(false);
  };

  const handleShowAppointments = () => {
    setShowAppointments(true);
    setShowPatients(false);
  };

  const handleLogout = () => {
    window.location.href = '/';
  };

  return(
    <div className="container">
      <div className="sidebar">
        <button onClick={handleShowPatients}>Show Patients</button>
        <button onClick={handleShowAppointments}>Show Appointments</button>
        <button onClick={handleLogout} className="logoutbutton">Logout</button>
      </div>
      <div className="main-content">
        {showPatients && (
          <div>
            {data.map((d, i) => (
              <div key={i} className="card">
                <p>ID: {d.id}</p>
                <p>Name: {d.name}</p>
                <p>Designation: {d.designation}</p>
                <p>Experience: {d.experience}</p>
                <p>Mobile Number: {d.mobilenumber}</p>
              </div>
            ))}
          </div>
        )}
        {showAppointments && (
          <div>
            {/* Render appointments as cards */}
            {/* Add your appointment card rendering logic here */}
          </div>
        )}
      </div>
    </div>
  )
}

export default Doctors;
