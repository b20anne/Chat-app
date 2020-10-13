import React from 'react';
import "./Contact.css";

const avatarUrl = 'https://randomuser.me/api/portraits/men/63.jpg';
const name = 'Alfredo Wagner';
const statusOnline = 'online';

const Contact = () => (
    <div className="Contact" >
        <img className="avatar" src={avatarUrl} alt="photo"/>
        <div>
            <p className="name"> {name} </p>
            <div className="status"> <span className="status-online" ></span>
            <span className="status-text">{statusOnline}</span>
            </div>
            
            
        </div>
    </div>

);


export default Contact;