import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import flo from "../photos/f1.webp";
import flo1 from "../photos/f2.webp";
import flo2 from "../photos/f4.webp";
const Abc = () => {
  return (
 <Container>
      <Row>
        <Col xs={12} md={4} style={{ marginBottom: "5px" , marginTop:"25px"}}>
          <NavLink to="/Product/men">
            {" "}
            <img src={flo} alt="flo" className="img-fluid" />
          </NavLink>
        </Col>
        <Col xs={12} md={4} style={{ marginBottom: "5px" , marginTop:"25px" }}>
          <NavLink to="/Product/women">
            {" "}
            <img src={flo1} alt="flo" className="img-fluid" />
          </NavLink>
        </Col>
        <Col xs={12} md={4} style={{ marginBottom: "5px" , marginTop:"25px" }}>
          <NavLink to="/Product/Supplements">
            {" "}
            <img src={flo2} alt="flo" className="img-fluid" />
          </NavLink>
        </Col>
       
       
      </Row>
      </Container>
  );
};

export default Abc;
