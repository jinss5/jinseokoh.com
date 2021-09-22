import React from "react";
import "./css/Home.css";
import ProfileImg2 from "../data/profile2.JPG";


function Home () {
    return (
        <div className="home">
            <img className="profile-pic" src={ProfileImg2} alt="profile_image" />
            <div className="content">
                <h2>Jinseok Oh</h2>
                <p>Hello, I am a student at Texas A&M University studying computer science.<br/><br/>
                    My interest is in web development and machine learning.<br/><br/>
                    I have experience working at a start-up company<br/> and am always looking to gain more experience.<br/><br/>
                    I have been called to fulfill my military duty on October, 2021.<br/>
                    And I will be serving in an active ROK army until April, 2023 <br/><br/>
                    Thank you for visiting my website :)
                </p>
            </div>
        </div>
    );
}

export default Home;