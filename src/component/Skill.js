import React from 'react'
import '../resourse/css/skill.css'

function Skill() {
  return (
    <div id='Skill'>
      <div className="skill-sec">
        <h3>SUMMERY</h3>
        <h2>Resume</h2>
        <div className="card-sec">
            <p>My Education</p>
            <p>My Experience</p>

            <div className="card">
                <p>2017 - 2018</p>
                <strong>Science</strong>
                <span>Udaypur High School</span>
                <label>I passed SSC in 2018 from Udaypur High School , And i was a science student.</label>
            </div>

            <div className="card">
                <p>2018 - 2021</p>
                <strong>Web Design</strong>
                <span>By Own Effort</span>
                <label>I learned html css and bootstrap from various sources like youtube , google etc.</label>
            </div>

            <div className="card">
                <p>2018 - 2022</p>
                <strong>Computer Science</strong>
                <span>Pabna Polytechnic Institute</span>
                <label>I got admission in pabna polytechnic institute in 2018 . And completed diploma course in 2022.</label>
            </div>

            <div className="card">
                <p>2021 - 2022</p>
                <strong>Web Development</strong>
                <span>European It Solution</span>
                <label>I joined European IT in 2021 , And complete the web development part.</label>
            </div>
            
        </div>

        <div className="progressbar-sec">
          <h4>Skill</h4>

          <p>html</p>
          <div className="progress-bar">
            <div className="progress"><span>85%</span></div>
          </div>

          <p>css</p>
          <div className="progress-bar">
            <div className="progress " style={{width:'80%'}}><span>80%</span></div>
          </div>

          <p>Javascript</p>
          <div className="progress-bar">
            <div className="progress"  style={{width:'70%'}}><span>70%</span></div>
          </div>

          <p>React</p>
          <div className="progress-bar">
            <div className="progress"  style={{width:'60%'}}><span>60%</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill;
