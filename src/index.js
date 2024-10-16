import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Details from './Components/Details';
import Login from './Components/Login';
import Navigationbar from './Components/Navigationbar';
import Cart from './Components/Cart';
import PostAdds from './Components/PostAdd.js';
import Checkout from './Components/Checkout';
import Order from './Components/Order.js'
import Userorders from './Components/Userorders.js'
import Aboutus from './Components/Aboutus.js'
import Contactus from './Components/Contactus.js'
import UserDashboard from './Components/UserDashboard.js'
import UsedCars from './Components/Used_Cars.js';
import NewCars from './Components/New_Cars.js';

import Bikes from './Components/Bikes.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />


          <Route path="/usedcars" element={<UsedCars />} />
          <Route path="/newcars" element={<NewCars />} />

          <Route path="/bikes" element={<Bikes />} />

          <Route path="/products/:id" element={<Details />} />
          <Route path="/loginpage" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path='/account' element={<Admin />} /> */}
          <Route path='/admindashboard' element={<UserDashboard />} />


          <Route path='/userdashboard' element={<UserDashboard />} />
          <Route path='/postads' element={<PostAdds />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order' element={<Order />} />
          <Route path='/myorders' element={<Userorders />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
