import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Google, Facebook, Linkedin, Twitter } from "react-bootstrap-icons";

const Footer = () => {


  return (
    <div className="footer">
      <div
        className="d-flex align-items-center w-100 justify-content-center"
      >
       <Row className="d-flex justify-content-center mt-4">
                <Col xs="auto">
                  <Button variant="outline-secondary">
                    <Google />
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button variant="outline-secondary">
                    <Facebook />
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button variant="outline-secondary">
                    <Linkedin />
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button variant="outline-secondary">
                    <Twitter />
                  </Button>
                </Col>
       </Row>
       
      </div>
      <div className="mt-4">
       <h6 className="text-center footerText">Example@email.com</h6>
       <h6 className="text-center footerText mt-3">Copyright © 2020 Name. All rights reserved.</h6></div>
    </div>
  );
};

export default Footer;
