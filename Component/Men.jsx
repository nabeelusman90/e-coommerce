import React, { useState } from "react";
import { Row, Col, Container,Button } from "react-bootstrap";
import {  useNavigate,useParams} from 'react-router-dom';

import img2 from "../photos/img1.1m.webp";
import img3 from "../photos/img1.2m.webp";


import img5 from "../photos/img2.1m.webp";
import img6 from "../photos/img2.2m.webp";


import img8 from "../photos/img3.1m.webp";
import img9 from "../photos/img3.2m.webp";


import img11 from "../photos/img5.1.webp";
import img12 from "../photos/img1.1m.webp";


import Shoes from "../photos/img19.1m.webp";

import img14 from "../photos/img6.1m.webp";
import img15 from "../photos/img6.2m.webp";


import img17 from "../photos/img7.1m.webp";
import img18 from "../photos/img7.2m.webp";


import img20 from "../photos/img8.1m.webp";
import img21 from "../photos/img8.2m.webp";


import img23 from "../photos/img9.1m.webp";
import img24 from "../photos/img9.2m.webp";


import img26 from "../photos/img10.1m.webp";
import img27 from "../photos/img10.2m.webp";


import Shoes1 from "../photos/img22.1m.webp";

import img29 from "../photos/img11.1m.webp";
import img30 from "../photos/img11.2m.webp";


import Shoes2 from "../photos/img22.2m.webp";

import img32 from "../photos/img12.1m.webp";
import img33 from "../photos/img12.2m.webp";


import img35 from "../photos/img13.1m.webp";
import img36 from "../photos/img13.2m.webp";


import img38 from "../photos/img14.1m.webp";
import img39 from "../photos/img14.2m.webp";


import img41 from "../photos/img15.1.webp";
import img42 from "../photos/img15.2m.webp";


import img44 from "../photos/img16.1m.webp";
import img45 from "../photos/img16.2m.webp";


import Shoes3 from "../photos/img18.1m.webp";
import Shoes4 from "../photos/img18.2m.webp";
const ImageGallery = () => {
  const [selectedImages, setSelectedImages] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const handleImageClick = (columnIndex, index) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages[columnIndex] = index;
    setSelectedImages(newSelectedImages);
    
    

  };
  

  const imageSourcesCol1 = [img2, img3];
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

  
  const  navigate =  useNavigate()
  

  
  return (
    <Container>
      <h1 style={{color: "rgb(9, 175, 225)", background:"white"}}  className="text-uppercase"> <center>Mens Gym Wear</center></h1>
      <Row>
        <Col xs={6} md={3} className="col">
          <img onClick={()=> navigate('/Singlep')}
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
          <h6 style={{marginLeft: "20px"}}>Gym t-shirt for Mens</h6>
          <p className="men">
            <del>RS. 2500</del> RS. 2000
          </p>

        </Col>

        <Col xs={6} md={3} className="col">
          <img onClick={()=> navigate('/Singlep')}
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
          <h6 style={{marginLeft: "20px"}}>Border t-shirts for Mens</h6>
          <p className="men">
            <del>RS. 2000</del> RS. 1800
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
          <h6 style={{marginLeft: "20px"}}>Full Sleeves t-shirt for Mens</h6>
          <p className="men">
            <del>RS. 2200</del> RS. 1900
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
          <h6 style={{marginLeft: "20px"}}>Full Sleaves Gym shirt</h6>
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
              <h6 style={{marginLeft: "20px"}}>Winter shirt for Mens Styling</h6>
          <p className="men">
            <del>RS. 3500</del> RS. 3200
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
          <h6 style={{marginLeft: "20px"}}>Gym Jackets for Mens</h6>
          <p className="men">
            <del>RS. 2000</del> RS. 1800
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
          <h6 style={{marginLeft: "20px"}}>Skin Fit full Sleeves for Mens</h6>
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
          <h6 style={{marginLeft: "20px"}}>Skin Fit Trousers</h6>
          <p className="men">
            <del>RS. 3000</del> RS. 2950
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
          <h6 style={{marginLeft: "20px"}}>Black Gym Trousers For Men</h6>
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
               <h6 style={{marginLeft: "20px"}}>Mens Summer shirt for Gym</h6>
          <p className="men">
            <del>RS. 2000</del> RS. 1700
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
          <h6 style={{marginLeft: "20px"}}>Red borders Trouser For Men</h6>
          <p className="men">
            <del>RS. 2000</del> RS. 1700
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
          <h6 style={{marginLeft: "20px"}}>Blue Trousers for Men</h6>
          <p className="men">
            <del>RS. 3500</del> RS. 3000
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
          <h6 style={{marginLeft: "20px"}}>Skin Fit Green Trouser</h6>
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
          <h6 style={{marginLeft: "20px"}}>Blue Trousers With White Border</h6>
          <p className="men">
            <del>RS. 3700</del> RS. 3300
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={Shoes2}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "70%" }}
          />
               <h6 style={{marginLeft: "20px"}}>Track Suit For Mens</h6>
          <p className="men">
            <del>RS. 6000</del> RS. 5500
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
          <h6 style={{marginLeft: "20px"}}>Black Shorts For Men </h6>
          <p className="men">
            <del>RS. 3000</del> RS. 2200
          </p>
        </Col>
        <Col xs={6} md={3}>
          <img
            src={Shoes3}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "70%" }}
          />
               <h6 style={{marginLeft: "20px"}}>Gym Kit Bag For Mens</h6>
          <p className="men">
            <del>RS. 10000</del> RS. 9000
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
          <h6 style={{marginLeft: "20px"}}>Green Gym Trouser For Men </h6>
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
          <h6 style={{marginLeft: "20px"}}>Summer t-shirt</h6>
          <p className="men">
            <del>RS. 1400</del> RS. 1200
          </p>
        </Col>
         <Col xs={6} md={3}>
          <img
            src={Shoes4}
            alt="men here"
            className="img-fluid"
            style={{ paddingTop: "10px", height: "70%" }}
          />
               <h6 style={{marginLeft: "20px"}}>Mens Styling Bag</h6>
          <p className="men">
            <del>RS. 6000</del> RS. 5500
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageGallery;
