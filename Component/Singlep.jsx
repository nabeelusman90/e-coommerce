
import React, { useState } from "react";

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
const Singlep = () => {
    const [selectedImages, setSelectedImages] = useState([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
      ]);
    
      const onClick = (columnIndex, index) => {
        const newSelectedImages = [...selectedImages];
        newSelectedImages[columnIndex] = index;
        setSelectedImages(newSelectedImages);
        
        
    
      };
    
      const imageSourcesCol1 = [img2];
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
    <div>
      <div className="super_container">
  <header className="header" style={{display: 'none'}}>
    <div className="header_main">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
            <div className="header_search">
              <div className="header_search_content">
                <div className="header_search_form_container">
                  <form action="#" className="header_search_form clearfix">
                    <div className="custom_dropdown">
                      <div className="custom_dropdown_list"> <span className="custom_dropdown_placeholder clc">All Categories</span> <i className="fas fa-chevron-down" />
                        <ul className="custom_list clc">
                          <li><a className="clc" href="#">All Categories</a></li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="single_product">
    <div className="container-fluid" style={{backgroundColor: '#fff', padding: 11}}>
      <div className="row">
        <div className="col-lg-2 order-lg-1 order-2">
          <ul className="image_list">
            
          
          </ul>
        </div>
        <div className="col-lg-4 order-lg-2 order-1">
          <div className="image_selected"><img src={imageSourcesCol1[selectedImages[0]]} alt={`Image ${selectedImages[0] + 1}`}></img> </div>
          
        </div>
        
        
        <div className="col-lg-6 order-3">
          <div className="product_description">
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Products</a></li>
                <li className="breadcrumb-item active">Accessories</li>
              </ol>
            </nav>
            <div className="product_name">  <h1>Gym t-shirt for Mens</h1></div>
            <div className="product-rating"><span className="badge badge-success"><i className="fa fa-star" /> 4.5 Star</span> <span className="rating-review">35 Ratings &amp; 45 Reviews</span></div>
            <div> <span className="product_price">₹ 29,000</span> <strike className="product_discount"> <span style={{color: 'black'}}>₹ 2,000<span> </span></span></strike> </div>
            <div> <span className="product_saved">You Saved:</span> <span style={{color: 'black'}}>₹ 2,000<span> </span></span></div>
            <hr className="singleline" />
            <div> <span className="product_info">EMI starts at ₹ 2,000. No Cost EMI Available<span><br /> <span className="product_info"><h1>Descripition:</h1> Start your t-shirt descriptions with absolute clarity. Identify your audience—men, women, unisex, kids, etc. Then, dive into the most important style details. Is this t-shirt ideal for active days? Or maybe it’s more street fashion vibes, adding that extra edge to any outfit. When selling basics like tees, don’t miss the chance to highlight that this is a timeless classic or the perfect addition to every wardrob<span><br /> <span className="product_info">7 Days easy return policy<span><br /> <span className="product_info">7 Days easy return policy<span><br /> <span className="product_info">In Stock: 25 units sold this week<span> </span></span></span></span></span></span></span></span></span></span></div>
            <div>
              <div className="row">
                <div className="col-md-5">
                  <div className="br-dashed">
                    <div className="row">
                      <div className="col-md-3 col-xs-3"> <img src="https://img.icons8.com/color/48/000000/price-tag.png" /> </div>
                      <div className="col-md-9 col-xs-9">
                        <div className="pr-info"> <span className="break-all">Get 5% instant discount + 10X rewards @ RENTOPC</span> </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7"> </div>
              </div>
           
            </div>
            <hr className="singleline" />
            <div className="order_info d-flex flex-row">
              <form action="#">
              </form></div>
            <div className="row">
              <div className="col-xs-6" style={{marginLeft: 13}}>
                <div className="product_quantity"> <span>QTY: </span> <input id="quantity_input" type="text" pattern="[0-9]*" defaultValue={1} />
                  <div className="quantity_buttons">
                    <div id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fas fa-chevron-up" /></div>
                    <div id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fas fa-chevron-down" /></div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6"> <button type="button" className="btn btn-primary shop-button">Add to Cart</button> <button type="button" className="btn btn-success shop-button">Buy Now</button>
                <div className="product_fav"><i className="fas fa-heart" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
     
    
     </div></div></div>

    </div>
  )
}

export default Singlep
