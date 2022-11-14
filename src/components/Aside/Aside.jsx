import React from 'react'
import { Link } from 'react-router-dom'
import './Aside.css'

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
                    <Link  onClick={handleAddClass} to='/' className='aside-link'>Dashboard</Link>  
                </li>
                <li className="aside-item">
                    <Link  onClick={handleAddClass} to='/order' className='aside-link'>Orders</Link>  
                </li>
                <li className="aside-item">
                    <Link  onClick={handleAddClass} to='/' className='aside-link'>Products</Link>  
                </li>
                <li className="aside-item">
                    <Link  onClick={handleAddClass} to='/' className='aside-link'>Creat</Link>  
                </li>
                <li className="aside-item">
                    <Link  onClick={handleAddClass} to='/history' className='aside-link'>History</Link>  
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Aside