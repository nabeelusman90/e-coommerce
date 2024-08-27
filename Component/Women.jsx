import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import img2 from "../photos/1.1w.webp";
import img3 from "../photos/1.2w.webp";


import img5 from "../photos/2.1w.webp";
import img6 from "../photos/2.2w.webp";

import img8 from "../photos/3.1w.webp";
import img9 from "../photos/3.2w.webp";

import img11 from "../photos/4.1w.webp";
import img12 from "../photos/4.2w.webp";


import Shoes from "../photos/18w.jpg";

import img14 from "../photos/5.1w.webp";
import img15 from "../photos/5.2w.webp";
// import img16 from "../photo/24.png";

import img17 from "../photos/6.1w.webp";
import img18 from "../photos/6.2w.webp";
// import img19 from "../photo/15.png";

import img20 from "../photos/7.1w.webp";
import img21 from "../photos/7.2w.webp";

import img23 from "../photos/8.1w.webp";
import img24 from "../photos/8.2w.webp";

import img26 from "../photos/9.1w.webp";
import img27 from "../photos/9.2w.webp";

import Shoes1 from "../photos/20w.jpg";

import img29 from "../photos/10.1w.webp";
import img30 from "../photos/10.2w.webp";
 

import Shoes2 from "../photos/19w.jpg";

import img32 from "../photos/11.1w.webp";
import img33 from "../photos/11.2w.webp";

import img35 from "../photos/12.1w.webp";
import img36 from "../photos/12.2w.webp";

import img38 from "../photos/13.1w.webp";
import img39 from "../photos/13.2w.webp";

import img41 from "../photos/14.1w.webp";
import img42 from "../photos/14.2w.webp";

import img44 from "../photos/15.1w.webp";
import img45 from "../photos/15.2w.webp";


import Shoes3 from "../photos/16w.webp";
import Shoes4 from "../photos/17w.webp";
const ImageGallery = () => {
  const [selectedImages, setSelectedImages] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const handleImageClick = (columnIndex, index) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages[columnIndex] = index;
    setSelectedImages(newSelectedImages);
  };

  const imageSourcesCol1 = [img2, img3 ];
  const imageSourcesCol2 = [img5, img6];
  const imageSourcesCol3 = [img8, img9];
  const imageSourcesCol4 = [img11, img12];
  const imageSourcesCol5 = [img14, img15];
  const imageSourcesCol6 = [img17, img18];
  const imageSourcesCol7 = [img20, img21];
  const imageSourcesCol8 = [img23, img24];
  const imageSourcesCol9 = [img26, img27];
  const imageSourcesCol10 = [img29, img30];
  const imageSourcesCol11 = [img32, img33];
  const imageSourcesCol12 = [img35, img36];
  const imageSourcesCol13 = [img38, img39];
  const imageSourcesCol14 = [img41, img42];
  const imageSourcesCol15 = [img44, img45];
  // const imageSourcesCol16 = [img47, img48, img49];
  return (
    <Container>
      <h1 style={{color: "rgb(9, 175, 225)", background:"white"}}  className="text-uppercase"> <center>Womens Gym Wear</center></h1>
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
          <h6 style={{marginLeft: "20px"}}>t-shirt for Women</h6>
          <p className="men">
            <del>RS. 2000</del> RS. 1800
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
          <h6 style={{marginLeft: "20px"}}>Gym Track Suit For Women</h6>
          <p className="men">
            <del>RS. 3500</del> RS. 3000
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
          <h6 style={{marginLeft: "20px"}}>Sky Track Suit For Women</h6>
          <p className="men">
            <del>RS. 3500</del> RS. 3000
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
          <h6 style={{marginLeft: "20px"}}>Womens Black Track Suit For Gym</h6>
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
          <h6 style={{marginLeft: "20px"}}>Gym Shoes For Women</h6>
          <p className="men">
            <del>RS. 7000</del> RS. 6800
          </p>
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
          <h6 style={{marginLeft: "20px"}}>Black Gym t-shirt</h6>
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
          <h6 style={{marginLeft: "20px"}}>Red t-shirt For Women</h6>
          <p className="men">
            <del>RS. 2000</del> RS. 1800
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
          <h6 style={{marginLeft: "20px"}}>Brown Gymwear t-shirt</h6>
          <p className="men">
            <del>RS. 2000</del> RS. 1700
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
          <h6 style={{marginLeft: "20px"}}>Sky Blue Gym t-shirt </h6>
          <p className="men">
            <del>RS. 3800</del> RS. 3300
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={Shoes1}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "70%" }}
          />
          <h6 style={{marginLeft: "20px"}}>Black Shoes For Gym</h6>
          <p className="men">
            <del>RS. 10000</del> RS. 9900
          </p>
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
          <h6 style={{marginLeft: "20px"}}> Blue Gym t-shirt For Women</h6>
          <p className="men">
            <del>RS. 2200</del> RS. 1800
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
          <h6 style={{marginLeft: "20px"}}>Black Tracksuit For Women</h6>
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
          <h6 style={{marginLeft: "20px"}}>Fullsleeves White t-shirt</h6>
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
          <h6 style={{marginLeft: "20px"}}>Brown Tracksuit For Gym</h6>
          <p className="men">
            <del>RS. 3900</del> RS. 3300
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={Shoes2}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "70%" }}
          />
          <h6 style={{marginLeft: "20px"}}>Baby Pink Shoes For Women</h6>
          <p className="men">
            <del>RS. 6000</del> RS. 5800
          </p>
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
          <h6 style={{marginLeft: "20px"}}>Grey Tracksuit For Gym</h6>
          <p className="men">
            <del>RS. 3900</del> RS. 3200
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={Shoes3}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "70%" }}
          />
          <h6 style={{marginLeft: "20px"}}>Black Skin Fit Trouser For Women</h6>
          <p className="men">
            <del>RS. 2900</del> RS. 2500
          </p>
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
          <h6 style={{marginLeft: "20px"}}>Blue Gym t-shirt</h6>
          <p className="men">
            <del>RS. 3300</del> RS. 2900
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
          <h6 style={{marginLeft: "20px"}}>Skin Fit Summer Trouser For Women</h6>
          <p className="men">
            <del>RS. 3000</del> RS. 2700
          </p>
        </Col>

        <Col xs={6} md={3}>
          <img
            src={Shoes4}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "70%" }}
          />
          <h6 style={{marginLeft: "20px"}}>Orange Gym Tracksuit For Women</h6>
          <p className="men">
            <del>RS. 3000</del> RS. 2900
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageGallery;
