import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import "./Category.css";
import { paginate } from "../../utils/paginate";
import deletes from "../asests/img/delete.png";
import edit from "../asests/img/edit.png";

const Category = () => {


  const [product, setProduct] = useState([]);
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(
        "https://store-management-backend-app.herokuapp.com/api/v1/product"
      );
      setProduct(res);
    };
    getPosts();
  }, []);

  

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (post) => {
    setProduct(product.filter((p) => p.id !== post.id));
  };

  const paginateProduct = paginate(product, currentPage, pageSize);

  return (
    <div className="category">
      <div className="container">
        <h2 className="category-name">Product</h2>
        <div className="order-title">
          <input type="date" className="order-date" />
        </div>
        <div className="category-shops">
          <span className="category-shop">Basket</span>
        </div>

        <table className="category-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paginateProduct.map((evt) => (
              <tr>
                <th>{evt.id}</th>
                <th>
                  {" "}
                  <img
                    src={`https://store-management-backend-app.herokuapp.com/api/v1/product${evt.imageId}`}
                    alt=""
                  />{" "}
                  {evt.productName}
                </th>
                <th>2022/12/12</th>
                <th>{evt.amount}</th>
                <th>${evt.price}</th>
                <th>
                  <button  className="order-edit">
                    <img src={edit} alt="" className="order-img" />{" "}
                  </button>
                  <button
                    onClick={() => handleDelete(product)}
                    className="order-delete"
                  >
                    <img src={deletes} alt="" className="order-img" />{" "}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          items={product.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Category;
