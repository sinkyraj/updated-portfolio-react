
import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
  return (
    <>
    {/* <h1>This is the Home page</h1> */}
      <div className="aboutApp">

        <div className="container">
          <div className="card">
            <div className="card-header">
              <h3>
                About Me
                </h3>
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <div className="row">
                  <div className="col-md-3">
                    <img id="pic" src="https://sinkyraj.github.io/myPortfolio/Assets/Image/MyPortfolioPhoto.JPG" alt="profile pic" width="100%" height="auto%" />
                  </div>

                  <div className="col-md-8">

                    <p>My name is Shweta Sharma. I am an aspiring developer currently registered with UCI Coding Bootcamp. I anticipate completing the program April 26th 2020.</p>
                    <p>My background is the completion of BSC degree from VKSU university, major in science. I have about 5 years of experience in programming and I have worked in companies like... Savedaily.com, 5 Arch funding corp and Advisys corp.
                    I was responsible for handling day to day user requirement like Adhoc reporting, on demanding reporting for all the department, taking care of user requirement regarding frontend and backened including database. </p>
          

                    <p>My next work will be fullstack javascript developer. I enjoyed learning Html, Css, Javascript, MySQL, MongoDB, Express, node.js and React.</p>
                    <p>During my free time I like to cook, sing karaoke songs and read books.</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default Home