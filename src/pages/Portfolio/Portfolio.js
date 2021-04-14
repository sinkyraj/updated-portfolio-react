import React from 'react'
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'



const Portfolio = () => {
  return (
    <>
    {/* <h1>This is the Portfolio page</h1> */}
      <div className="portfolioApp">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h3>
                Portfolio
                    </h3>
                    <p> My portfolio information are down below. Also, here are some of my projects and assignments:</p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-1">
                </div>

                <div className="col-md-3">
                  {/* <a href="https://ana199816.github.io/homework-06/">
                    <img src="assets/img/weather1.png"
                      className="card-img-top" alt="img-one" />
                  </a> */}
                  <p className="card-text">Weather Dashboard</p>
                  <p id="repo"><a href="https://sinkyraj.github.io/WeatherDashboard/">https://sinkyraj.github.io/WeatherDashboard/</a></p>
                </div>
                <div className="col-md-1"></div>

                <div className="col-md-3">
                  {/* <a href="https://sinkyraj.github.io/WorkDayScheduler/">
                    <img src="assets/img/work.day.png"
                      className="card-img-top" alt="img-two" />
                  </a> */}
                  <p className="card-text">Day Planner</p>
                  <p id="repo"><a href="https://sinkyraj.github.io/WorkDayScheduler/"
                  >https://sinkyraj.github.io/WorkDayScheduler/</a></p>
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div className="row">
                <div className="col-md-1">

                </div>
                <div className="col-md-3">
                  {/* <a href="https://sinkyraj.github.io/CodeQuiz/">
                    <img src="img/quiz3.png"
                      className="card-img-top" alt="img-one" />
                  </a> */}
                  <p className="card-text">Code Quiz</p>
                  <p id="repo"><a href="https://sinkyraj.github.io/CodeQuiz/"
                  >https://sinkyraj.github.io/CodeQuiz/</a></p>
                </div>
                <div className="col-md-1">

                </div>
                <div className="col-md-3">
                  {/* <a href="https://github.com/Argent-T/Drinky-Bird">
                    <img src="img/screen1.jpg"
                      className="card-img-top" alt="img-one" />
                  </a> */}
                  <p className="card-text">Project-1: Bee Well</p>
                  <p id="repo"><a href="https://ohskie3.github.io/Project-1/"
                  >https://ohskie3.github.io/Project-1/</a></p>
                  <div className="col-md-1"></div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                  {/* <a href="https://ana199816.github.io/Homework-03/">
                    <img src="assets/img/screenshot pasw.PNG"
                      className="card-img-top" alt="img-one" />
                  </a> */}
                  <p className="card-text">Password Generator</p>
                  <p id="repo"><a href="https://sinkyraj.github.io/PasswordGenerator/"
                  >https://sinkyraj.github.io/PasswordGenerator/</a></p>

                </div>

                <div className="col-md-1"></div>

                <div className="col-md-3">
                  {/* <a href="https://asproject2.herokuapp.com/">
                    <img src="assets/img/let's.travel.png"
                      className="card-img-top" alt="img-one" />
                  </a> */}
                  <p className="card-text">Project 2: Stonk Stalks</p>
                  <p id="repo"><a href="https://limitless-fortress-65893.herokuapp.com//"
                  >https://limitless-fortress-65893.herokuapp.com//</a></p>

                </div>
              </div>
              <br></br>
              <br></br>

              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                  {/* <a href="https://ana199816.github.io/Homework-03/">
                    <img src="assets/img/screenshot pasw.PNG"
                      className="card-img-top" alt="img-one" />
                  </a> */}
                  <p className="card-text">Fitness Tracker</p>
                  <p id="repo"><a href="https://still-ocean-27336.herokuapp.com/?id=606d2b6b6b91f40015605a68"
                  >https://still-ocean-27336.herokuapp.com/?id=606d2b6b6b91f40015605a68</a></p>

                </div>

                <div className="col-md-1"></div>

                <div className="col-md-3">
                  {/* <a href="https://asproject2.herokuapp.com/">
                    <img src="assets/img/let's.travel.png"
                      className="card-img-top" alt="img-one" />
                  </a> */}
                  <p className="card-text">Progressive Budget</p>
                  <p id="repo"><a href="https://dry-everglades-28088.herokuapp.com/"
                  >https://dry-everglades-28088.herokuapp.com/</a></p>

                </div>
              </div>
              <br></br>

              
              <div className="gitProfile">
                <p>GitHub Profile: <a href="https://github.com/sinkyraj">
                  https://github.com/sinkyraj</a> </p>
                <p>Linkedin Profile: <a href="https://www.linkedin.com/in/shweta-sharma-8a441a80/"
                >https://www.linkedin.com/in/shweta-sharma-8a441a80/</a></p>
                <p>Email Address: sinkyraj@gmail.com</p>
                <p>Phone Number:(949)-243-6409</p>
                <a href="https://sinkyraj.github.io/Resume/"
                > Resume</a>

              </div>
            </div>

          </div>


        </div>
      </div>
    
    </>
  )
}

export default Portfolio