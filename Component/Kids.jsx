import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import img2 from "../photos/k9.jpg";
import img3 from "../photos/k10.jpg";
import img4 from "../photos/k11.jpg";

import img5 from "../photos/k15.jpg";
import img6 from "../photos/k13.jpg";


import img8 from "../photos/k16.jpg";
import img9 from "../photos/k17.jpg";


import img11 from "../photos/k20.jpg";
import img12 from "../photos/k21.jpg";
import img13 from "../photos/k22.jpg";

import Shoes from "../photo/kid.png";

import img14 from "../photos/k23.jpg";
import img15 from "../photos/k24.jpg";
import img16 from "../photos/k25.jpg";

import img17 from "../photos/k26.jpg";
import img18 from "../photos/k27.jpg";
import img19 from "../photos/k28.jpg";

import img20 from "../photos/k31.jpg";
import img21 from "../photos/k32.jpg";
import img22 from "../photos/k33.jpg";

import img23 from "../photos/k34.jpg";
import img24 from "../photos/k36.jpg";


import img26 from "../photos/k37.jpg";
import img27 from "../photos/k38.jpg";
import img28 from "../photos/k39.jpg";

import Shoes1 from "../photos/kid1.jpg";

import img29 from "../photos/k41.jpg";
import img30 from "../photos/k40.jpg";


import Shoes2 from "../photos/flo1.jpg";

import img32 from "../photos/k43.jpg";
import img33 from "../photos/k42.jpg";
import img34 from "../photos/k44.jpg";

import img35 from "../photos/K3.jpg";
import img36 from "../photos/K4.jpg";
import img37 from "../photos/K6.jpg";

import img38 from "../photos/K1.jpg";
import img39 from "../photos/K7.jpg";
import img40 from "../photos/K8.jpg";

import img41 from "../photos/k31.jpg";
import img42 from "../photos/k10.jpg";


import img44 from "../photos/k35.jpg";
import img45 from "../photos/k32.jpg";


import Shoes3 from "../photos/K2.jpg";
import Shoes4 from "../photos/K5.jpg";
const ImageGallery = () => {
  const [selectedImages, setSelectedImages] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const handleImageClick = (columnIndex, index) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages[columnIndex] = index;
    setSelectedImages(newSelectedImages);
  };

  const imageSourcesCol1 = [img2, img3, img4];
  const imageSourcesCol2 = [img5, img6];
  const imageSourcesCol3 = [img8, img9];
  const imageSourcesCol4 = [img11, img12, img13];
  const imageSourcesCol5 = [img14, img15, img16];
  const imageSourcesCol6 = [img17, img18, img19];
  const imageSourcesCol7 = [img20, img21,img22];
  const imageSourcesCol8 = [img23, img24];
  const imageSourcesCol9 = [img26, img27, img28];
  const imageSourcesCol10 = [img29, img30];
  const imageSourcesCol11 = [img32, img33, img34];
  const imageSourcesCol12 = [img35, img36, img37];
  const imageSourcesCol13 = [img38, img39, img40];
  const imageSourcesCol14 = [img41, img42];
  const imageSourcesCol15 = [img44, img45];
  // const imageSourcesCol16 = [img47, img48, img49];
  return (
    <Container>
      <h1 style={{color: " crimson", background:"white"}}  className="text-uppercase"> <center>Special Discount Sale on Kids products</center></h1>
      <Row>
        <Col xs={6} md={3} className="col">
          <img
            src={imageSourcesCol1[selectedImages[0]]}
            alt={`Image ${selectedImages[0] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol1.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[0] ? "thumbnail selected" : "thumbnail"
              }
              onClick={() => handleImageClick(0, index)}
            />
          ))}
          <br />
          <h6 style={{marginLeft: "20px"}}>Froks for Girls</h6>
          <p className="men">
            <del>RS. 3000</del> RS. 2500
          </p>
        </Col>

        <Col xs={6} md={3} className="col">
          <img
            src={imageSourcesCol2[selectedImages[1]]}
            alt={`Image ${selectedImages[1] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol2.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[1] ? "thumbnail selected" : "thumbnail"
              }
              onClick={() => handleImageClick(1, index)}
            />
          ))}
          <br />
          <h6 style={{marginLeft: "20px"}}>Little girl's Dress</h6>
          <p className="men">
            <del>RS. 1100</del> RS. 900
          </p>
        </Col>

        <Col xs={6} md={3}>
          <img
            src={imageSourcesCol3[selectedImages[2]]}
            alt={`Image ${selectedImages[2] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol3.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[2] ? "thumbnail selected" : "thumbnail"
              }
              onClick={() => handleImageClick(2, index)}
            />
          ))}
          <br />
          <h6 style={{marginLeft: "20px"}}>2 Piece suit for girls</h6>
          <p className="men">
            <del>RS. 2500</del> RS. 2200
          </p>
        </Col>

        <Col xs={6} md={3}>
          <img
            src={imageSourcesCol4[selectedImages[3]]}
            alt={`Image ${selectedImages[3] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol4.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[3] ? "thumbnail selected" : "thumbnail"
              }
              onClick={() => handleImageClick(3, index)}
            />
          ))}
          <br />
          <h6 style={{marginLeft: "20px"}}>Baby Jacket froks</h6>
          <p className="men">
            <del>RS. 3200</del> RS. 2700
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={Shoes}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "80%" }}
          />
        </Col>

        <Col xs={6} md={3}>
          <img
            src={imageSourcesCol5[selectedImages[4]]}
            alt={`Image ${selectedImages[4] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol5.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[4] ? "thumbnail selected" : "thumbnail"
              }
              onClick={() => handleImageClick(4, index)}
            />
          ))}
          <br />
          <h6 style={{marginLeft: "20px"}}>Little Girl Jacket froks</h6>
          <p className="men">
            <del>RS. 1900</del> RS. 1700
          </p>
        </Col>

        <Col xs={6} md={3}>
          <img
            src={imageSourcesCol6[selectedImages[5]]}
            alt={`Image ${selectedImages[5] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol6.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[5] ? "thumbnail selected" : "thumbnail"
              }
              onClick={() => handleImageClick(5, index)}
            />
          ))}
          <br />
          <h6 style={{marginLeft: "20px"}}> printed froks with Jacket</h6>
          <p className="men">
            <del>RS. 4000</del> RS. 3600
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={imageSourcesCol7[selectedImages[6]]}
            alt={`Image ${selectedImages[6] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol7.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[6] ? "thumbnail selected" : "thumbnail"
              }
              onClick={() => handleImageClick(6, index)}
            />
          ))}
          <br />
          <h6 style={{marginLeft: "20px"}}>Casual dresess for wearing</h6>
          <p className="men">
            <del>RS. 5100</del> RS. 4900
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={imageSourcesCol8[selectedImages[7]]}
            alt={`Image ${selectedImages[7] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol8.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[7] ? "thumbnail selected" : "thumbnail"
              }
              onClick={() => handleImageClick(7, index)}
            />
          ))}
          <br />
          <h6 style={{marginLeft: "20px"}}>Baby Girls Luxury design</h6>
          <p className="men">
            <del>RS. 3800</del> RS. 3300
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={Shoes1}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "80%" }}
          />
        </Col>

        <Col xs={6} md={3}>
          <img
            src={imageSourcesCol9[selectedImages[8]]}
            alt={`Image ${selectedImages[8] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol9.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[8] ? "thumbnail selected" : "thumbnail"
              }
              onClick={() => handleImageClick(8, index)}
            />
          ))}
          <br />
          <h6 style={{marginLeft: "20px"}}>Baby boy for Casual wearing</h6>
          <p className="men">
            <del>RS. 6000</del> RS. 5700
          </p>
        </Col>

        <Col xs={6} md={3}>
          <img
            src={imageSourcesCol10[selectedImages[9]]}
            alt={`Image ${selectedImages[9] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol10.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[9] ? "thumbnail selected" : "thumbnail"
              }
              onClick={() => handleImageClick(9, index)}
            />
          ))}
          <br />
          <h6 style={{marginLeft: "20px"}}>Party Wearing suit</h6>
          <p className="men">
            <del>RS. 4500</del> RS. 3900
          </p>
        </Col>

        <Col xs={6} md={3}>
          <img
            src={imageSourcesCol11[selectedImages[10]]}
            alt={`Image ${selectedImages[10] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol11.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[10]
                  ? "thumbnail selected"
                  : "thumbnail"
              }
              onClick={() => handleImageClick(10, index)}
            />
          ))}
          <br />
          <h6 style={{marginLeft: "20px"}}> Pack of 3 dresess Available</h6>
          <p className="men">
            <del>RS. 2100</del> RS. 1800
          </p>
        </Col>

        <Col xs={6} md={3}>
          <img
            src={imageSourcesCol12[selectedImages[11]]}
            alt={`Image ${selectedImages[11] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol12.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[11]
                  ? "thumbnail selected"
                  : "thumbnail"
              }
              onClick={() => handleImageClick(11, index)}
            />
          ))}
          <br />
          <h6 style={{marginLeft: "20px"}}>3 piece sout for party</h6>
          <p className="men">
            <del>RS. 3700</del> RS. 3300
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={Shoes2}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "80%" }}
          />
        </Col>
        <Col xs={6} md={3}>
          <img
            src={imageSourcesCol13[selectedImages[12]]}
            alt={`Image ${selectedImages[12] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol13.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[12]
                  ? "thumbnail selected"
                  : "thumbnail"
              }
              onClick={() => handleImageClick(12, index)}
            />
          ))}
          <br />
          <h6 style={{marginLeft: "20px"}}>Home Wearing Suit </h6>
          <p className="men">
            <del>RS. 3400</del> RS. 3000
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={Shoes3}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "80%" }}
          />
        </Col>

        <Col xs={6} md={3}>
          <img
            src={imageSourcesCol14[selectedImages[13]]}
            alt={`Image ${selectedImages[13] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol14.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[13]
                  ? "thumbnail selected"
                  : "thumbnail"
              }
              onClick={() => handleImageClick(13, index)}
            />
          ))}
          <br />
          <h6 style={{marginLeft: "20px"}}>Printed long Frok</h6>
          <p className="men">
            <del>RS. 3200</del> RS. 2900
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={imageSourcesCol15[selectedImages[14]]}
            alt={`Image ${selectedImages[14] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol15.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[14]
                  ? "thumbnail selected"
                  : "thumbnail"
              }
              onClick={() => handleImageClick(14, index)}
            />
          ))}
          <br />
          <h6 style={{marginLeft: "20px"}}>Luxury printed frok</h6>
          <p className="men">
            <del>RS. 1500</del> RS. 1200
          </p>
        </Col>
        {/* <Col xs={6} md={3}>
          <img
            src={imageSourcesCol6[selectedImages[15]]}
            alt={`Image ${selectedImages[15] + 1}`}
            className="thumbnail-container"
          />

          {imageSourcesCol16.map((imageSource, index) => (
            <img
              key={index}
              src={imageSource}
              alt={`Thumbnail ${index + 1}`}
              className={
                index === selectedImages[15] ? "thumbnail selected" : "thumbnail"
              }
              onClick={() => handleImageClick(15, index)}
            />
          ))}
          <br />
          <strong>Ladies wear Khusa</strong>
          <p className="men">
            <del>RS. 1100</del> RS. 900
          </p>
        </Col> */}

        <Col xs={6} md={3}>
          <img
            src={Shoes4}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "80%" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ImageGallery;
