import React from 'react';
import {MdOutlineDriveFileRenameOutline,MdEmail} from "react-icons/md"
import {BiMessageAlt,BiLogoGmail,BiSolidPhone} from "react-icons/bi"
import "./contact.css"
function Contact() {
    function sendMessage(){
        alert("thank you for message")
    }
    return (  
        <div className='contact'>
            <h1>Contact us</h1>
           < MdOutlineDriveFileRenameOutline className='icc'/> <input placeholder='Your Name'></input><br/><br/>
           < BiLogoGmail className='icc'/> <input placeholder='Your Email'></input><br/><br/>
           < BiMessageAlt  className='icc message-con-ic'/> <input  className='message-con' placeholder='Your Message'></input><br/>
           <button onClick={sendMessage}>Send Now</button>
            <span></span>
            <div className='infor-cont'>
                <h1 className='email'><BiLogoGmail className='ic-inf'/>Gmail:shoplly@gmail.com</h1>
                <h1 className='phone'><BiSolidPhone className='ic-inf'/>Phone:02571889280</h1>
            </div>
        </div>
    );
}

export default Contact;