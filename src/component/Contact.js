import React from 'react'
import '../resourse/css/contact.css'

function Contact() {
    return (
        <div id='contact'>
            <div className="contact-sec">
                <h1>CONTACT</h1>
                <h2>Get in Touch</h2>
                <div className="contact-main-column">
                    <div className="contact-left-column">
                        <h5>ADDRESS</h5>

                        <p>4th Floor, Plot No.22,<br />
                        145 Murphy Canyon Rd. <br />
                        San Diego CA 2028</p> 
                        <br />

                        <p><span>phone:- </span> 444 434 444</p>

                        <p><span>Telephone:- </span> 555 545 555</p>

                        <p><span>Email:- </span> chat@simone.com</p>
                    </div>
                    <div className="contact-right-column">
                        <p>Send us a note</p>
                        <div className="input-sec">
                            <input type="text" placeholder='Name' />
                            <input type="text" placeholder='Email' style={{marginLeft:'20px'}}/>
                        </div>
                        <textarea placeholder='Tell us more about your need'></textarea>
                        <button>Send Massege</button>
                    </div>
                </div>
            </div>
            <div className="footer-sec">
                <p>Copyright © 2022 <label style={{color:'#ff6830'}}>Simone</label>. All Rights Reserved.</p>
                <span>Terms & Policy</span>
                <p>Disclaimer</p>
            </div>

        </div>
    )
}

export default Contact;
