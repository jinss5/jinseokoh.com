import React from "react";
import "./css/Home.css";
import ProfileImg2 from "../data/profile2.JPG";


function Home () {
    return (
        <div className="home">
            <img className="profile-pic" src={ProfileImg2} alt="profile_image" />
            <div className="content">
                <h2>Jin Seok Oh</h2>
                <p>Hello, I am a student at Texas A&M University studying computer science.<br/><br/>
                    I am excited to join this class because it explores the profound impact of computers on media design<br/> 
                    and the evolving relationships between creators and consumers of interactive content.<br/><br/>
                    As someone deeply interested in the intersection of technology and creativity, <br/>
                    I want to better understand how media design shapes and is shaped by the content it conveys.<br/><br/>
                    This course aligns with my passion for leveraging technology to create meaningful experiences.
                </p>
            </div>
        </div>
    );
}

export default Home;