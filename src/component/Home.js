import React from 'react'
import '../resourse/css/home.css'

function Home() {
  return (
    <div id='home'>
      <div className="home-sec">
        <div className="text-sec">
          <p>Wellcome</p>
          <div className="text-animation">
            <h2>I'm a Web</h2>
            <ul className="dynamic-txt">
            <li id='txt1'><span data-text='Developer...'>Developer...</span></li>
            <li><span data-text='Designer....'>Designer....</span></li>
            </ul>
          </div>

          <label>From Dhaka, Bangladesh.</label>
          <a href="#contact"><button>Hire Me</button></a>
        </div>
      </div>

    </div>
  )
}

export default Home
