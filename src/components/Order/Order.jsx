import React, { useEffect, useState } from "react";
import "./Order.css";
import deletes from "../asests/img/delete.png";
import edit from "../asests/img/edit.png";
import axios from "axios";
import { paginate } from "../../utils/paginate";
import Pagination from "../Pagination/Pagination";
import Modal from 'react-modal';
import image from "../asests/img/image.png";
import { Link } from "react-router-dom";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width:"30%",
    borderRadius:"10px",
    transform: 'translate(-50%, -50%)',
  },
};

const Order = () => {

  //Open Modal

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

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
    <div className="order">
      <div className="container">
        <h2 className="order-name">Order</h2>
        <div className="order-title">
          <input type="date" className="order-date" />
        </div>
        <div className="order-titles">
          <select className="order-select" name="" id="">
            <option value="All Category">All Category</option>
            <option value="Category A">Category A</option>
            <option value="Category B">Category B</option>
            <option value="Category C">Category C</option>
          </select>
          <Link to="/product" className="order-button">+ Add Product</Link>
        </div>

        <table className="order-table">
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
                  {/* <img src={`https://store-management-backend-app.herokuapp.com/api/v1/product${evt.imageId}`} alt="" />  */}
                  {evt.productName}
                </th>
                <th>2022/12/12</th>
                <th>{evt.amount}</th>
                <th>${evt.price}</th>
                <th>
                  <button
                    onClick={openModal}
                    className="order-edit"
                  >
                    <img src={edit} alt="" className="order-img" />{" "}
                  </button>
                  <button onClick={() => handleDelete(product)} className="order-delete">
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

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="modal-close" onClick={closeModal}>&times;</button>
        <form className="modal-form">
            <label className="order-label" htmlFor="">
                Product Name
                <input className="order-input" type="name" placeholder="Product name"  />
            </label>
            <label className="order-label" htmlFor="">
                Product Price
                <input className="order-input" type="number" placeholder="Product price"  />
            </label>
            <label className="order-label" htmlFor="">
                 Product Amount
                <input className="order-input" type="number" placeholder="Product Amount"  />
            </label>
            <label htmlFor="" className="order-label">
                Description
                <textarea  
                  placeholder="Description"
                  className="order-texts"
                />
            </label>
            <label className="order-files" htmlFor="file">
              <img src={image} alt="" className="order-file-img" />
              <input type="file" id="file" required className="order-file" />
            </label>
            <button className="order-submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default Order;
