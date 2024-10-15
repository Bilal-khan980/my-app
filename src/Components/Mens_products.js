import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom for routing

class Mens_products extends Component {
    state = {
        products: [],
        searchQuery: '',
        error: ''
    };

    componentDidMount() {
        this.fetchProducts();
    }

    render() {

        // Filter products based on search query
        

        return (
            <div className="home-container" style={{ backgroundColor: "black", paddingBottom: "30px" }}>
                <h1 style={{ textAlign: "center", fontWeight: "bold", color: "yellow", paddingTop: "40px" }}>MEN</h1>
                <section className="featured-products">
                    <div className="container-fluid" style={{ paddingTop: "40px", width: "80%" }}>
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                
                                onChange={this.handleSearch}
                                style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
                            />
                        </div>
                        <div className="product-list" style={{ width: "100%" }}>
                           
                                <div className="product-card">
                                    <img src='' alt='' />
                                    <div className="product-details">
                                        <h3>XYZ</h3>
                                        <p>123</p>
                                        <Link to={`/Details`} className="btn btn-secondary" style={{ backgroundColor: "black" }}>View Details</Link>
                                    </div>
                                </div>
                        
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Mens_products;
