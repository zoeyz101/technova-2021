import React from "react";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Image from "./landing-page-image.svg";

const LandingPage = () => {
    return (
        <>
            <div>
                <div className="description">Overcoming imposter <br></br> syndrome by tracking <br></br> one accomplishWomen+ <br></br> at a time
                    
                </div>
                <Button variant="dark" className="join-now-button">JOIN NOW</Button>

                <img src={Image} className="landing-image" alt="Landing Page Image"/>
            </div>
            
            
        </>
    );
  };
  
  export default LandingPage;
  