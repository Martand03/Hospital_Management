import React from 'react';
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../Assests/hospbackimg2.jpg";
import Footer from '../Components/Footer';

function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="About Us"
                imgHeight="20vh" 
            />
    
            <div className="about-p-tag" style={{ textAlign: 'center', padding: '40px' }}>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', textAlign: 'justify' }}>
                    LifeCare Hospital is dedicated to delivering exceptional healthcare services with compassion and innovation. Our team of devoted professionals ensures personalized care and optimal treatment for every patient. With state-of-the-art facilities and a patient-centric approach, we prioritize your well-being and strive for excellence in healthcare. We believe in fostering a healing environment that promotes recovery and well-being. Our commitment to quality care, integrity, and empathy sets us apart, making us a trusted healthcare partner in your journey to wellness.
                </p>
                <br/>
                <br/>
                <h1>Our Vission</h1>
                <p style={{textAlign:'justify'}}>Our vision at LifeCare Hospital is to be a beacon of excellence in healthcare, setting new standards of compassionate and innovative medical services. We envision a future where every patient receives personalized care, leading to improved health outcomes and enhanced well-being.</p>
            </div>
           <h1>Our Mission</h1>
           <p style={{textAlign:'justify', padding:'0 40px 40px 40px'}}> Our mission is to provide exceptional healthcare services with a patient-centric focus, ensuring that each individual receives optimal treatment and support. We are dedicated to fostering a healing environment that promotes recovery, wellness, and dignity for all patients. Through continuous innovation, education, and collaboration, we strive to be the trusted healthcare partner on your journey to wellness.</p>
           <Footer/>
           </>
    );
}

export default About;
