import React from "react";
import "./Product.css";
import image from "../asests/img/image.png";
import axios from "axios";

const Product = () => {

  const handleSubmit = (evt) => {


    evt.preventDefault();
    const formData = new FormData();
    const { productName } = evt.target.elements;
    const { description } = evt.target.elements;
    const { amount } = evt.target.elements;
    const { price } = evt.target.elements;
    // const { imageId } = evt.target.elements;
    formData.append("productName", productName.value);
    formData.append("description", description.value);
    formData.append("amount", amount.value);
    formData.append("price", price.value);
    // formData.append("imageId", imageId.files[0]);

    axios
      .post(
        "https://store-management-backend-app.herokuapp.com/api/v1/product",
        formData
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="product">
      <div className="container">
        <h2 className="product-name">Create a new Product</h2>
        <form onSubmit={handleSubmit} action="" className="product-form">
          <div className="product-title">
            <input
              required
              type="text"
              placeholder="Product name"
              className="product-input"
              name="productName"
            />
            <label
              style={{ display: "flex", flexDirection: "column" }}
              htmlFor="file"
            >
              <p className="product-subname">Description</p>
              <textarea
                required
                className="product-texts"
                placeholder="Description"
                name="description"
              />
            </label>
            <p className="product-subname">Add Images</p>
            <label className="product-label" htmlFor="choose_file">
              <img src={image} alt="" className="product-img" />
              <input
                type="file"
                name="imageId"
                required
                id='choose_file'
                accept="image/*"
                className="product-file"
              />
            </label>
          </div>
          <div className="product-list">
            <input
              placeholder="Price"
              type="number"
              required
              className="product-number"
              name="price"
            />
            <p style={{ marginTop: "25px" }} className="product-subname">
              Select Category
            </p>
            <select className="product-select" name="" id="">
              <option value="First">First</option>
              <option value="Second">Second</option>
              <option value="Third">Third</option>
            </select>
            <input
              style={{ marginTop: "25px" }}
              type="number"
              required
              placeholder="Amount"
              name="amount"
              className="product-number"
            />
            <button className="product-button">Create Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
