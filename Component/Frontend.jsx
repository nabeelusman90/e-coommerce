import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../photos/round11.webp";
import logo2 from "../photos/round22.webp";
const Frontend = () => {
  return (
    <Container>
      <p
        className="para"
        style={{ marginTop: "10px", fontFamily: "Poppins, sans-serif" }}
      >
        <center>
        From now on, thanks to our Gym Clothing, you can remain stylish even while you're working out. Discover your favourite workout clothes for men and women among our many styles: you can choose from a range of training and running trousers and T-shirts, gym clothing, sports bras and much more. The dream of any athlete is to train in complete comfort, without having to compromise on the pleasure of feeling at ease. If being stylish is a must, even at the gym, look no further than Diadora's fitness clothing, which can maximize your performance, ensuring a perfect look throughout your workout.
        </center>
      </p>
      
      <Row>
        <Col md={6} xs={12} style={{ paddingTop: "3%" }}>
          <NavLink to="/Product/men">
            {" "}
            <img src={logo} alt="logo" className="img-fluid" />
          </NavLink>
        </Col>

        <Col md={6} xs={12} style={{ paddingTop: "3%" }}>
          <NavLink to="/Product/men">
            {" "}
            <img src={logo2} alt="logo" className="img-fluid" />
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default Frontend;
