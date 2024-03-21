import "./FooterStyle.css"

const Footer=()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>LifeCare Hospital</h1>
                    <p>Your Health, Our Priority</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>About</h4>
                    <a href="/">About Geisinger</a>
                    <a href="/">News & Media</a>
                    <a href="/">Careers</a>
                    <a href="/">Security Alerts</a>
                </div>
                <div>
                    <h4>Connect</h4>
                    <a href="/">Contact us</a>
                    <a href="/">Health & Wellness</a>
                    <a href="/">PA Health Magazine</a>
                    <a href="/">Health Net</a>
                </div>
                <div>
                    <h4>Explore</h4>
                    <a href="/">Patient Care</a>
                    <a href="/">Education</a>
                    <a href="/">Reserach</a>
                    <a href="/">FAQ's</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;