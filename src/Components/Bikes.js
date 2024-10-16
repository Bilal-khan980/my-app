import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom for routing
import Footer from './footer';
import products from '../Components/BikeProducts.js'; // Import the products array


class Used_Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products, // Use the imported products array directly
            error: null
        };
    }

    

    render() {
        const { products } = this.state;

        return (
            <div className="home-container" style={{ backgroundColor: "black", paddingBottom: "30px" }}>
                <h1 style={{ textAlign: "center", fontWeight: "bold", color: "yellow", paddingTop: "40px" }}>BIKES</h1>
                <section className="featured-products">
                <div className="container-fluid" style={{ paddingTop: "40px", width: "100%" }}>
                    {/* <h2 style={{ color: "yellow" }}>FEATURED PRODUCTS</h2> */}
                    <div className="product-list" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '50px',
                        justifyContent: 'center'
                    }}>
                        {products.map(product => (
                            <div className="product-card" key={product.id} style={{
                                width: '400px',
                                backgroundColor: '#1a1a1a',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                textAlign: 'center'
                            }}>
                                <img src={product.imageUrl} alt={product.name} style={{
                                    width: '100%',
                                    height: '300px',
                                    objectFit: 'cover'
                                }} />
                                <div className="product-details" style={{ padding: '15px' }}>
                                    <h3 style={{ color: '#fff' }}>{product.name}</h3>
                                    <p style={{ color: '#ccc' }}>{product.price}</p>
                                    <Link to={`/products/${product.id}`} className="btn btn-secondary" style={{
                                        backgroundColor: 'black',
                                        color: '#fff',
                                        marginTop: '10px'
                                    }}>View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer></Footer>
            </div>
        );
    }}

export default Used_Cars;
