import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import "./Category.css";
import { paginate } from "../../utils/paginate";
import { Context } from "../../context/orderFoods";
import Modal from 'react-modal';
import deletes from '../asests/img/delete.png'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width:"90%",
    height:"80%",
    transform: 'translate(-50%, -50%)',
  },
};

const Category = () => {


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


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
          newArr.findIndex((item) => item.id == e.target.dataset.id)
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

  const incrementCount = () => {
    count = count + 1;
    setCount(count);
  }
  const decrementCount = () => {
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
          <button onClick={openModal} className="category-shop">
            <p style={{marginTop:"14px"}}>{orderFoods.length}</p>
            <p style={{marginTop:"14px", marginLeft:"5px"}}>Basket</p>
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
          <tbody >
            {paginateProduct.map((evt) => (
              <tr>
                <th>{evt.id}</th>
                <th style={{display:"flex", alignItems:"center", marginTop:"10px"}}>
                  <img
                    style={{ width: "70px", height: "80px", margin:"0 8px" }}
                    src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${evt.imageId}`}
                    alt=""
                  />
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

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="category-close" onClick={closeModal}>&times;</button>
        <div className="category-page">
          <table className="modal-table">
             <thead>
                 <tr>
                    <th>PHOTO</th>
                    <th>NAME</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                    <th>TOTAL</th>
                 </tr>
             </thead>
             <tbody>
                {
                  orderFoods.map((food) => (
                    <tr className="modal-titles">
                       <td>
                          <img className="modal-img"  
                          src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${food.imageId}`} alt="" />
                       </td>
                       <td> <p className="modal-title">{food.productName}</p></td>
                       <td>
                        <div className="modal-blok">
                            <button className="modal-minus" onClick={(e) => decrementCount()}>
                              -
                            </button>
                            <span className="modal-count">{food.amount}</span>
                            <button className="modal-plus" onClick={(e) => incrementCount()}>
                              +
                            </button>
                          </div>
                       </td>
                       <td>
                          <p className="modal-price">{food.price} $</p>
                       </td>
                       <td>
                          <p className="modal-price">
                            {(food.price * food.amount)} $
                          </p>
                       </td>
                       <td>
                        <button
                            className="modal-btn"
                            onClick={() => {
                              setOrderFoods(
                                orderFoods.filter((ovqat) => ovqat.id !== food.id)
                              );
                            }}
                          > <img src={deletes} alt="" />
                        </button>
                        <button className="modal-check">Check Out</button>
                       </td>
                    </tr>
                  ))
                }
             </tbody>
          </table>
        </div>
      </Modal>
    </div>
  );
};

export default Category;
