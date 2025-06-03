import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashutosh Verma </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am a MERN STACK Web Developer and a C++ programmer.

            <br />
            I am currently pursuing my 4th year in Computer Science and Engineering (CSE) at NSUT,Dwarka.


            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
