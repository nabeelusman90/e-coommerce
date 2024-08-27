import React, { useState } from 'react';

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

const ProductPage = () => {
  const [newSelectedImages,selectedImages ] = useState();
  const [selectedPrice, setSelectedPrice] = useState();

  const handleSizeChange = () => {
    newSelectedImages(imageSourcesCol1);
 
  }
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

  return (
    <div className="product-page">
      <div className="product-image-container">
        <img src={imageSourcesCol1[selectedImages[0]]} />
        <img src="image2.jpg" alt="Product Image" />
      </div>
      <div className="product-details">
        <h1>Product Name</h1>
        <p>Price: ${selectedPrice}</p>
        <label htmlFor="size-select">Size:</label>
        <select id="size-select"  onChange={handleSizeChange}>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;