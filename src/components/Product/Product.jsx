import React from "react";
import "./Product.css";
import image from "../asests/img/image.png";

const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <h2 className="product-name">Create a new Product</h2>
        <form action="" className="product-form">
          <div className="product-title">
            <input
              required
              type="text"
              placeholder="Product name"
              className="product-input"
            />
            <label style={{display:"flex",flexDirection:"column"}} htmlFor="file">
                <p className="product-subname">Description</p>
              <textarea
                required
                className="product-texts"
                placeholder="Description"
              />
            </label>
                <p className="product-subname">Add Images</p>
            <label className="product-label" htmlFor="file">
              <img src={image} alt="" className="product-img" />
              <input type="file" id="file" required className="product-file" />
            </label>
          </div>
          <div className="product-list">
              <input 
              placeholder="Price" type="number" required className="product-number" />
              <p style={{marginTop:"25px"}} className="product-subname">Select Category</p>
              <select 
            //   style={{margin:"15px 0"}}
              className="product-select" name="" id="">
                  <option value="First">First</option>
                  <option value="Second">Second</option>
                  <option value="Third">Third</option>
              </select>
              <input 
              style={{marginTop:"25px"}}
              type="number" required placeholder="Amount" className="product-number" />
              <button className="product-button">Create Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
