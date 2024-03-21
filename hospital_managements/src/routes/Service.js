import React from 'react';
import Navbar from "../Components/Navbar";
import "./ServiceStyle.css";
import freecheckup from "../Assests/freecheckup.png";
import ambulance from "../Assests/ambulance.png";
import doctor from "../Assests/expertdoctor.png";
import surgery from "../Assests/surgery.png";
import outdoorCheckup from "../Assests/outdoor.png";
import bloodTesting from "../Assests/bloodtest.png";
import Footer from '../Components/Footer';

function Service() {
    return (
        <>
            <Navbar />
            <div className='servicepage'>
                <h1>Our Services</h1>
                <div className='service-boxes'>
                    <div className='service-box'>
                        <img src={freecheckup} alt='Free Check-up' />
                        <h2>Free Check-up</h2>
                        <p>Receive a thorough check-up at no cost to ensure your health and well-being.</p>
                    </div>
                    <div className='service-box'>
                        <img src={ambulance} alt='24/7 Ambulance Service' />
                        <h2>24/7 Ambulance Service</h2>
                        <p>Our ambulance service is available round-the-clock to provide emergency medical assistance.</p>
                    </div>
                    <div className='service-box'>
                        <img src={doctor} alt='Expert Doctors' />
                        <h2>Expert Doctors</h2>
                        <p>Access our team of experienced and skilled doctors for personalized healthcare solutions.</p>
                    </div>
                    <div className='service-box'>
                        <img src={surgery} alt='Surgery and Operation' />
                        <h2>Surgery and Operation</h2>
                        <p>We offer advanced surgical procedures and operations performed by skilled surgeons.</p>
                    </div>
                    <div className='service-box'>
                        <img src={outdoorCheckup} alt='Outdoor Checkup' />
                        <h2>Outdoor Checkup</h2>
                        <p>Experience healthcare in natural surroundings with our outdoor checkup services.</p>
                    </div>
                    <div className='service-box'>
                        <img src={bloodTesting} alt='Blood Testing' />
                        <h2>Blood Testing</h2>
                        <p>Get accurate and timely blood testing services to monitor your health status.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Service;
