import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Components/footer.js';
import Reviews from './Reviews.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from '../Components/BikeProducts.js';



function Details() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');
    const [checkinstock, setCheckInStock] = useState(false);

    useEffect(() => {
       
        const foundProduct = products.find(product => product.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setCheckInStock(true);
        } else {
            setError('Car not found');
        }
    }, [id]);
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="home-container" style={{ backgroundColor: "black", paddingBottom: "30px" }}>
                <div className="container" style={{ paddingTop: "60px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                <Link to="/" style={{ color: "yellow" }}>
                            <i className="fa-solid fa-arrow-left" style={{ color: "yellow", fontSize: "40px" }}></i>
                        </Link>
                    <div className="product-card" key={product.id} style={{ backgroundColor: "black", padding: "20px", maxWidth: "600px" }}>
                        <img src={product.imageUrl} alt={product.name} style={{ width: "100%", borderRadius: "20px", backgroundColor: "black" }} />
                    </div>
                    <div style={{ padding: "20px", maxWidth: "600px", color: "white" }}>
                        
                        <h1 style={{ color: "yellow", textAlign: "center", fontWeight: "bold", paddingTop: "10px" }}>{product.name}</h1>
                        <p style={{ color: "white", fontSize: "30px", textAlign: "center" }}>{product.price}</p>
                        {/* <div style={{ paddingTop: "20px", width: "100%", display: "flex", justifyContent: "center" }}>
                            {checkinstock ? (
                                <p style={{ color: "white", fontSize: "25px", textAlign: "center" }}>In Stock</p>
                            ) : (
                                <p style={{ color: "red", fontSize: "25px", textAlign: "center" }}>Out of Stock</p>
                            )}
                        </div> */}
                        <div style={{ paddingTop: "20px", width: "100%", display: "flex", justifyContent: "center" }}>
                            <button
                                style={{
                                    width: "200px",
                                    height: "50px",
                                    backgroundColor: checkinstock ? "yellow" : "grey",
                                    color: "black",
                                    fontWeight: "bold",
                                    border: "none",
                                    borderRadius: "10px",
                                    cursor: checkinstock ? "pointer" : "not-allowed"
                                }}
                                disabled={!checkinstock}
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
                <Reviews id={product.id}></Reviews>
                <Footer />
            </div>
        </>
    );
}
export default Details;
