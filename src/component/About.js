import React from 'react'
import '../resourse/css/about.css'
import pic from '../resourse/image/my-pic.jpg'

function About() {
    return (
        <div id='about'>
            <div className="about-sec">
                <h1>ABOUT ME</h1>
                <h2>Know Me More</h2>
                <div className="main-column">
                    <div className="left-column">
                        <h3>I'm <span style={{color:'#ff6830'}}>Jahid Hasan</span>, a Web Developer</h3>
                        <p>My name is Jahid Hasan . I am a web Designer & Developer . I know about html css and bootstrap . And In 2022 i took a course on React.js at European IT Solutions . I already have many completed the  web design and development prohect , And I am very passionate and dedicated to my work . </p>
                    </div>
                    <div className="right-column">
                        <img 
                        src={pic} 
                        alt="pic"
                        />
                        <div className="info-sec">
                        <strong>Name: <span>Md. Jahid Hasan</span></strong>
                        <strong>Email: <span style={{color:'#ff6830'}}>jahidhasan29976@gmail.com</span></strong>
                        <strong>Age: <span>21</span></strong>
                        <strong>From: <span>Dhaka,Bangladesh</span></strong>
                        </div>
                        <button>Download Cv</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
