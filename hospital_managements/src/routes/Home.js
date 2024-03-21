import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import newhome from '../Assests/newhome.png';
import Footer from "../Components/Footer";
function Home(){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero"
        heroImg={newhome}
        title="Your Health, Our Priority"
        text="At LifeCare Hospital, we are committed to providing exceptional healthcare services with compassion and care. Our state-of-the-art facilities and dedicated medical professionals ensure that every patient receives the best possible treatment.
        We believe in the power of healing and are driven by a patient-centric approach. Your well-being is our top priority, and we strive to deliver quality care with integrity and empathy."/>
        <Footer/>
        </>
        
    );
}

export default Home;