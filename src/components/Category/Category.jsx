import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <h2 className="category-name">Product</h2>
        <div className="order-title">
          <input type="date" className="order-date" />
        </div>
        <div className="category-shop">Basket</div>
      </div>
    </div>
  );
};

export default Category;
