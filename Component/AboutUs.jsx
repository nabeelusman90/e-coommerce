import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import ndure from "../photos/nb3.jpg";
import ndure1 from "../photos/b22.jpg";
import ndure2 from "../photos/nb2.jpg";


const AboutUs = () => {
  return (
    <>
      <Container className="bgb">
        <Row style={{ paddingTop: "5%" }}>
          

          <Col md={12}>
            <div className="aboutus">
             
              <h5 style={{ textAlign: "center", fontSize: "45px" }}>
                <strong className="GymWears">Welcome To Gym Wears </strong>
              </h5>
              <strong>Our Products:</strong> Our inventory is as diverse as the needs of our clients. From Gym clothes,all the suplements , proteins, andwears for both men and women, and personal care items, we've got it all. We source our products from trusted manufacturers and local producers, ensuring quality and freshness in every order. <br /><br />
              <strong>Bulk Purchasing Made Easy:</strong> We understand the importance of cost-effective solutions for your business. That's why we offer competitive pricing on bulk purchases, helping you keep your costs low while maintaining high standards for your customers.<br/><br />
              <strong>Efficient Distribution Network: </strong>Our state-of-the-art logistics and distribution network ensures timely and reliable delivery across the country. Whether you're a small independent retailer or a large chain, we have the capabilities to meet your supply needs with precision and punctuality.<br/><br />
              <strong>Our Mission:</strong>Our mission is to empower every person and every organization on the planet to achieve more.” TikTok “ Our mission is to capture and present the world's creativity, knowledge, and moments that matter in everyday life.” Vivint: “Vivint helps families live intelligently in safer, smarter homes.<br /><br />
            </div>
          </Col>
          <Col md={12}>
            <Carousel>
              <Carousel.Item>
                <img
                  src={ndure}
                  alt="this is img"
                  className="img-fluid"
                  style={{ height: "700px" }}
                  
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={ndure1}
                  alt="this is img"
                  className="img-fluid"
                  style={{ height: "700px" }}
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={ndure2}
                  alt="this is img"
                  className="img-fluid"
                  style={{ height: "700px" }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

     
      
    </>
  );
};

export default AboutUs;
