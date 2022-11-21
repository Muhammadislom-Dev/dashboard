import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import "./Category.css";
import { paginate } from "../../utils/paginate";
import { Context } from "../../context/orderFoods";

const Category = () => {
  const { orderFoods, setOrderFoods } = useContext(Context);
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

  const handleFood = (e) => {
    let newArr = orderFoods.slice();
    newArr.some((element) => element.id == e.target.dataset.id)
      ? (newArr[
          newArr.findIndex((food) => food.id == e.target.dataset.id)
        ].count += 1)
      : newArr.push({
          ...product.find((product) => product.id == e.target.dataset.id),
          count: 1,
        });

    setOrderFoods(newArr);
  };

  console.log(orderFoods);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginateProduct = paginate(product, currentPage, pageSize);

  let [count, setCount] = useState(1);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if (count <= 0) {
      count = 1;
    }
    count = count - 1;
    setCount(count);
  }

  return (
    <div className="category">
      <div className="container">
        <h2 className="category-name">Product</h2>
        <div className="order-title">
          <input type="date" className="order-date" />
        </div>
        <div className="category-shops">
          <button className="category-shop">
            <p>{orderFoods.length}</p>
            <p>Basket</p>
          </button>
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
                    style={{ width: "70px", height: "80px" }}
                    src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${evt.imageId}`}
                    alt=""
                  />{" "}
                  {evt.productName}
                </th>
                <th>2022/12/12</th>
                <th>{evt.amount}</th>
                <th>${evt.price}</th>
                <th>
                  <button
                    onClick={handleFood}
                    data-id={evt.id}
                    className="category-buy"
                  >
                    Buy Now
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
