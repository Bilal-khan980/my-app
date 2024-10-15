import React, {  useState } from 'react';

function UserOrders() {
    const [orders, ] = useState([]);

   
    return (
        <div className="container-fluid" style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
            <div className="container py-5">
                <h2 className="mb-4" style={{ color: 'yellow', fontWeight: 'bold', textAlign: 'center' }}>ORDERS</h2>
                {orders.map(order => (
                    <div key={order._id} className="card mb-4" style={{ backgroundColor: 'black', border: '4px solid white', borderRadius: '10px' }}>
                        <div className="card-header" style={{ backgroundColor: 'black', color: 'yellow' }}>
                            <h5 className="card-title" style={{ color: 'yellow', fontWeight: 'bold' }}>Order #{order._id}</h5>
                            <p>Order Date: {new Date(order.orderDate).toDateString()}</p>
                            <p>Delivery Date: {(order.orderDate)}</p>
                            <p>Status: {order.status}</p>
                        </div>
                        <div className="card-body" style={{ backgroundColor: 'black', color: 'white' }}>
                            <ul className="list-group list-group-flush">
                                {order.items.map(item => (
                                    <li key={item.productId} className="list-group-item" style={{ backgroundColor: 'black', color: 'white', borderBottom: '1px solid white' }}>
                                        <div className="row">
                                            <div className="col-2">
                                                <img src={item.imageUrl} alt={item.name} className="img-fluid" style={{ maxHeight: '100px' }} />
                                            </div>
                                            <div className="col-4 d-flex align-items-center" style={{ color: 'white', fontWeight: 'bold' }}>
                                                {item.name}
                                            </div>
                                            <div className="col-2 d-flex align-items-center">
                                                Quantity: {item.quantity}
                                            </div>
                                            <div className="col-2 d-flex align-items-center">
                                                ${item.price * item.quantity}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default UserOrders;
