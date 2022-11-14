import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside/Aside';
import Chart from './components/Chart/Chart';
import History from './components/History/History';
import Navbar from './components/Navbar/Navbar';
import Order from './components/Order/Order';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="App-page">
            <Aside />
         <div className="App-list">
             <Routes>
                 <Route path='/' element={<Chart />} />
                 <Route path='/order' element={<Order />} />
                 <Route path='/history' element={<History />} />
                 <Route path='/product' element={<Product />} />
             </Routes>
          </div>   
        </div>
    </div>
  );
}

export default App;
