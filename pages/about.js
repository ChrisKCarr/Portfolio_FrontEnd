import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

import { Row, Col } from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <BaseLayout title="Chris Carr - Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To my About Page</h4>
                <p className="subsubTitle fadein">
                  Feel free to read a short description about me.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>
                  My name is Chris Carr and I am an experienced software
                  engineer and freelance developer.{" "}
                </p>
                <p>
                  I have several years of experience working in the IT field
                  working on a wide range of technologies and projects, from
                  JavaScript and Python development to creating mobile and web
                  applications in React and Django.
                </p>
                <p>
                  Throughout my career, I have acquired advanced technical
                  knowledge and the ability to explain programming concepts to
                  non-technical audiences. Having worked in governmental,
                  corporate, and freelance positions, both in office and
                  remotely, I have developed excellent communication and self
                  organization skills, being able to work with minimal super
                  vision and completing tasks on my own or in a team
                  environment.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
