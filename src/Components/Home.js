import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import products from '../Components/CarProducts.js'; // Adjust the path if needed


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: products, // Use the imported products array
            error: null
        };
    }

    render() {
        const { products, error } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div className="home-container" style={{ backgroundColor: "black" }}>
            <div className="hero" style={{
                backgroundImage: `url(${require('../Assets/background.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '88vh',
                width: '100%',
                position: 'relative', // Position relative to make overlay work
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
            }}>
                {/* Black overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the opacity for the desired darkness
                    zIndex: 1
                }}></div>
        
                {/* Content inside the hero */}
                <div className="search-box" style={{
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    zIndex: 2 // Ensures content is above the overlay
                }}>
                    <h1>Find Used Cars in Pakistan</h1>
                    <p>With thousands of cars, we have just the right one for you</p>
                    <div className="input-group" style={{ maxWidth: '600px', margin: 'auto' }}>
                        <input type="text" className="form-control" placeholder="Car Make or Model" />
                        <select className="form-select">
                            <option>All Cities</option>
                            <option>Lahore</option>
                            <option>Karachi</option>
                            <option>Islamabad</option>
                        </select>
                        <select className="form-select">
                            <option>Price Range</option>
                            <option>$10,000 - $20,000</option>
                            <option>$20,000 - $30,000</option>
                            <option>$30,000 - $40,000</option>
                        </select>
                        <button className="btn btn-success" style={{ backgroundColor: 'grey' }}>Search</button>
                    </div>
                </div>
            </div>
        
            <section className="featured-products">
                <div className="container-fluid" style={{ paddingTop: "40px", width: "100%" }}>
                    <h2 style={{ color: "yellow" }}>FEATURED PRODUCTS</h2>
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
                                    height: '200px',
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
        
            <br />
            <br />
            <br />
            <Footer />
        </div>
        
        );
    }
}

export default Home;
