import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <>
    {/* <h1>This is the Contact page</h1> */}
      {/* <div>
        <Card>
         
          <CardBody>
            <CardTitle tag="h5">Contact</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">My Contact Information</CardSubtitle>
            <CardText>Name: Shweta Sharma</CardText>
            <CardText>Email:   Sinkyraj@gmail.con</CardText>
            <CardText>Phone Number: 949-243-6409</CardText>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            
          </CardBody>
        </Card>
      </div> */}

      <div className="contactApp">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h3>Contact</h3>
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">First and last name</span>
                  </div>
                  <input type="text" aria-label="First name" className="form-control" />
                  <input type="text" aria-label="Last name" className="form-control" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Message</span>
                  </div>
                  <textarea name="input" id="input" cols="30" rows="5"></textarea>
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />
              </blockquote>
            </div>

          </div>
        </div>




      </div>
    
    </>
  )
}

export default Contact
