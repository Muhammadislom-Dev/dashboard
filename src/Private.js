import React from "react";
import { Route, Routes } from "react-router-dom";
import Aside from "./components/Aside/Aside";
import Category from "./components/Category/Category";
import Chart from "./components/Chart/Chart";
import History from "./components/History/History";
import Navbar from "./components/Navbar/Navbar";
import Order from "./components/Order/Order";
import Product from "./components/Product/Product";
import './App.css'

const Private = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="App-page">
        <Aside />
        <div className="App-list">
          <Routes>
            <Route path="/" element={<Chart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/category" element={<Category />} />
            <Route path="/history" element={<History />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Private;
