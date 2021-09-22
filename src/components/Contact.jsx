import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./css/Contact.css";

function Contact () {
    return (
        <div className="contact">
            <h2>Get in touch</h2>
            <p>
                US) 512-577-6341<br/>
                KR) 010-6428-8816<br/>
                jinss1145@gmail.com
            </p>
            <SocialIcon url="https://www.instagram.com/jinseok0h/" bgColor="#ffffff" fgColor="#000000"/>
            <SocialIcon url="https://www.linkedin.com/in/jinseok-oh-6920501b2/" bgColor="#ffffff" fgColor="#000000"/>
            <SocialIcon url="https://github.com/jinss5" bgColor="#ffffff" fgColor="#000000"/>
        </div>
    );
}

export default Contact;