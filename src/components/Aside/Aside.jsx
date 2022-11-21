import React from 'react'
import { Link } from 'react-router-dom'
import './Aside.css'
import  { Orders } from '../../Svgs/Orders'
import { New } from '../../Svgs/New'
import Analitika from '../../Svgs/Analitika'
import { Exam } from '../../Svgs/Exam'
import Home from '../../Svgs/Home'

const Aside = () => {

    const handleAddClass = (evt) => {
        const links = document.querySelectorAll(".aside__link-active");
        links.forEach((link) => {
          link.classList.remove("aside__link-active");
        });
        evt.currentTarget.classList.add("aside__link-active");
      };
      

  return (
    <div className='aside'>
        <div className="container">
            <ul className="aside-list">
                <li className="aside-item">
                    <Link  onClick={handleAddClass} to='/' className='aside-link'><Home /> Dashboard</Link>  
                </li>
                <li className="aside-item">
                    <Link  onClick={handleAddClass} to='/order' className='aside-link'> <Orders /> Orders</Link>  
                </li>
                <li className="aside-item">
                    <Link  onClick={handleAddClass} to='/category' className='aside-link'> <New /> Products</Link>  
                </li>
                <li className="aside-item">
                    <Link  onClick={handleAddClass} to='/product' className='aside-link'> <Analitika /> Creat</Link>  
                </li>
                <li className="aside-item">
                    <Link  onClick={handleAddClass} to='/history' className='aside-link'><Exam /> History</Link>  
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Aside