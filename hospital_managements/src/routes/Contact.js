import React from 'react';
import Navbar from "../Components/Navbar";
import contactpage from "../Assests/hospbackimg3.jpg";
import "./Contactstyle.css"; // Import the CSS file
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';

function Contact() {
    return (
        <>
            <Navbar />
            <div className="about-page">
                <img src={contactpage} alt="contact" />
                <div className="centered-text">
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Details</h2>
                <p className="text-gray-500">Reach out to us. We are here to answer your questions.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Address</h3>
                        <p>LifeCare Hospital</p>
                        <p>Shivaji Nagar, Pune</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Phone</h3>
                        <p>General Enquiries: +1 (555) 123-4567</p>
                        <p>Emergency: 911</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Email</h3>
                        <p>General Enquiries: info@lifecarehospital.com</p>
                        <p>Appointments: appointments@lifecarehospital.com</p>
                    </div>
                </div>
            </div>
            <ContactForm />
            <Footer/>
        </>
    );
}

export default Contact;
