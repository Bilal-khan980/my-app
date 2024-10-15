import React, {  useState } from 'react';
import Footer from './footer'; // Assuming you have a Footer component
import { Link } from 'react-router-dom'

function Checkout() {
  const [cartItems, ] = useState([]);
  const [error, ] = useState('');


  // Calculate delivery date (5 days from today)
  const getDeliveryDate = () => {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(deliveryDate.getDate() + 5);
    return deliveryDate.toDateString();
  };

  

  if (error) {
    return <div>Error: {error}</div>;
  }


  // Placeholder for when cart items are loading
  if (cartItems.length === 0) {
    return <div>Loading cart items...</div>;
  }

  const calculateTotalBill = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "black", color: "white", minHeight: "100vh", paddingTop: "60px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card" style={{ backgroundColor: "black", color: "white" }}>
              <div className="card-header">
                <h5 className="card-title">Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {cartItems.map(item => (
                    <li key={item._id} className="list-group-item" style={{ backgroundColor: "black", color: "white" }}>
                      <div className="row">
                        <div className="col">{item.name}</div>
                        <div className="col">Quantity: {item.quantity}</div>
                        <div className="col">${item.price * item.quantity}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer" style={{ backgroundColor: "black", color: "white", fontWeight: "bold", paddingBottom: "60px" }}>
                Total Bill: ${calculateTotalBill().toFixed(2)}
              </div>
              <Link to="/order" className="btn btn-primary" style={{ fontSize: "20px", fontWeight: "bold", color: "yellow", backgroundColor: "black", border: "2px solid white" }}>PLACE ORDER</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ backgroundColor: "black", color: "white" }}>
              <div className="card-header">
                <h5 className="card-title">Delivery Details</h5>
              </div>
              <div className="card-body">
                <p>To be delivered by: {getDeliveryDate()}</p>
                <p>Payment Method: Cash on Delivery</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3" style={{ paddingTop: "200px" }}>
          <div className="col-md-12">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
