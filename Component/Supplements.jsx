import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import img2 from "../photo/1s.webp";


import img5 from "../photo/2s.webp";


import img8 from "../photo/3s.webp";
 


import img11 from "../photo/4s.webp";



import Shoes from "../photo/5s.webp";

import img14 from "../photo/6s.webp";



import img17 from "../photo/7s.webp";



import img20 from "../photo/8s.avif";


import img23 from "../photo/9s.webp";


import img28 from "../photo/10s.webp";


import Shoes1 from "../photo/11s.webp";

import img29 from "../photo/12s.webp";

import Shoes2 from "../photo/13s.webp";

import img32 from "../photo/14s.webp";


import img35 from "../photo/15s.webp";


import img38 from "../photo/16s.webp";


import img41 from "../photo/17s.webp";


import img44 from "../photo/18s.webp";



import Shoes3 from "../photo/19s.webp";
import Shoes4 from "../photo/20s.webp";
const ImageGallery = () => {
  const [selectedImages, setSelectedImages] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const handleImageClick = (columnIndex, index) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages[columnIndex] = index;
    setSelectedImages(newSelectedImages);
  };

  const imageSourcesCol1 = [img2];
  const imageSourcesCol2 = [img5];
  const imageSourcesCol3 = [img8];
  const imageSourcesCol4 = [img11];
  const imageSourcesCol5 = [img14];
  const imageSourcesCol6 = [img17];
  const imageSourcesCol7 = [img20];
  const imageSourcesCol8 = [img23];
  const imageSourcesCol9 = [img28];
  const imageSourcesCol10 = [img29];
  const imageSourcesCol11 = [img32];
  const imageSourcesCol12 = [img35];
  const imageSourcesCol13 = [img38];
  const imageSourcesCol14 = [img41];
  const imageSourcesCol15 = [img44];
  return (
    <Container>
      <h1 style={{color: "rgb(9, 175, 225)", background:"white"}}  className="text-uppercase"> <center>Supplements</center></h1>
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
          <h6 style={{marginLeft: "20px"}}>Gold ISO For Gym</h6>
          <p className="men">
            <del>RS. 9000</del> RS. 8800
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
          <h6 style={{marginLeft: "20px"}}>CLA+ Cratinine</h6>
          <p className="men">
            <del>RS. 10000</del> RS. 9900
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
          <h6 style={{marginLeft: "20px"}}>LIPO 6 Black</h6>
          <p className="men">
            <del>RS. 8800</del> RS. 9000
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
          <h6 style={{marginLeft: "20px"}}>Protien Shake</h6>
          <p className="men">
            <del>RS. 3200</del> RS. 2700
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={Shoes}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "70%" }}
          />
            <h6 style={{marginLeft: "20px"}}>Sports PRE Workout</h6>
          <p className="men">
            <del>RS. 7000</del> RS. 6900
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
          <h6 style={{marginLeft: "20px"}}>LIPO 6</h6>
          <p className="men">
            <del>RS. 5500</del> RS. 5300
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
          <h6 style={{marginLeft: "20px"}}> LIPO 6 For Gym</h6>
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
          <h6 style={{marginLeft: "20px"}}>Goli</h6>
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
          <h6 style={{marginLeft: "20px"}}>XTEND Original</h6>
          <p className="men">
            <del>RS. 8000</del> RS. 7500
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={Shoes1}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "70%" }}
          />
            <h6 style={{marginLeft: "20px"}}>L Arganine</h6>
          <p className="men">
            <del>RS. 5500</del> RS. 5400
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
          <h6 style={{marginLeft: "20px"}}>Protien Supplements</h6>
          <p className="men">
            <del>RS. 5800</del> RS. 5700
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
          <h6 style={{marginLeft: "20px"}}>XTEND Bcaa</h6>
          <p className="men">
            <del>RS. 4500</del> RS. 4300
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
          <h6 style={{marginLeft: "20px"}}>Glutamins</h6>
          <p className="men">
            <del>RS. 9500</del> RS. 9300
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
          <h6 style={{marginLeft: "20px"}}>Anaboli Vita</h6>
          <p className="men">
            <del>RS. 9300</del> RS. 9000
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={Shoes2}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "70%" }}
          />
            <h6 style={{marginLeft: "20px"}}>Best Bcaa</h6>
          <p className="men">
            <del>RS. 7500</del> RS. 7300
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
          <h6 style={{marginLeft: "20px"}}> Flex Core </h6>
          <p className="men">
            <del>RS. 5400</del> RS. 5200
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={Shoes3}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "70%" }}
          />
            <h6 style={{marginLeft: "20px"}}>LIPO 6 Hardcore</h6>
          <p className="men">
            <del>RS. 9000</del> RS. 8900
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
          <h6 style={{marginLeft: "20px"}}>L Creatanine</h6>
          <p className="men">
            <del>RS. 9500</del> RS. 6700
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
          <h6 style={{marginLeft: "20px"}}>C4</h6>
          <p className="men">
            <del>RS. 8400</del> RS. 8200
          </p>
        </Col>

        <Col xs={6} md={3}>
          <img
            src={Shoes4}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "70%" }}
          />
            <h6 style={{marginLeft: "20px"}}>Gold Creatanine</h6>
          <p className="men">
            <del>RS. 10000</del> RS. 9800
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageGallery;