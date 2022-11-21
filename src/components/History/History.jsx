import React, { useEffect, useState } from "react";
import "./History.css";
import history from "../asests/img/history.png";
import axios from "axios";

const History = () => {
  const [historys, setHistory] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(
        "https://store-management-backend-app.herokuapp.com/api/v1/sale/history"
      );
      setHistory(res);
    };
    getPosts();
  }, []);

  

  return (
    <div className="history">
      <div className="container">
        <h2 className="history-name">History</h2>
        <div className="order-title">
          <input type="date" className="order-date" />
        </div>
        <div className="history-page">
          {historys?.map((evt) => (
            <div className="history-list">
              <div className="history-item">
                <div className="history-items">
                  <img src={history} alt="" className="history-img" />
                </div>
                <div className="history-titles">
                  <p className="history-date">{evt.createdAt}</p>
                  <p className="history-date">2022-05-13</p>
                </div>
              </div>

              <table className="history-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                {evt.productList?.map((pro,i)=>(
                  <tr>
                    <th>{pro?.product?.id}</th>
                    <th>
                      {pro?.product?.productName}
                    </th>
                    <th>{pro?.product?.amount}</th>
                    <th>$ {pro?.product?.amount * pro?.product?.price} </th>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
