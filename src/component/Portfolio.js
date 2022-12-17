import React from 'react'
import '../resourse/css/portfolio.css'
import jobpic1 from '../resourse/image/job1.png'
import jobpic2 from '../resourse/image/job2.png'
import jobpic3 from '../resourse/image/job3.png'

function Protfolio() {
  return (
    <div id='Portfolio'>
        <div className="portfolio-sec">
            <h1>PORTFOLIO</h1>
            <h2>My Work</h2>

            <div className="work-sec">

              <div className="work-card">
              <img src={jobpic1} alt="" height={300} width={300} />
              <div className="work-text">
                <h4>Use Fake Api</h4>
                <p>use fake api. solve promise and fetch json placeholder data in react js.</p>
                <button><a href="https://jahid140191.github.io/fake-api/">show work</a></button>
              </div>
              </div>

              <div className="work-card">
              <img src={jobpic2} alt="" height={300} width={300} />
              <div className="work-text">
                <h4>Custom Clock</h4>
                <p>Use getIntravel function in react js . and make a custom clock .</p>
                <button><a href="https://jahid140191.github.io/custom-watch/">show work</a></button>
              </div>
              </div>

              <div className="work-card">
              <img src={jobpic3} alt="" height={300} width={300} />
              <div className="work-text">
                <h4>Weather</h4>
                <p>show city weather.click the show work button below to view the work.</p>
                <button><a href="https://jahid140191.github.io/search-weather/">show work</a></button>
              </div>
              </div>


              
            </div>

        </div>
    </div>
  )
}

export default Protfolio
