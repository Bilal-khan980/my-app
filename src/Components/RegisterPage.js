import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showAlert] = useState(false);

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "#1a1a1a", minHeight: "100vh", overflow: "hidden" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <div className="card p-5" style={{ backgroundColor: "#282828", color: "white", border: "none", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)" }}>
                            <h2 className="text-center mb-4" style={{ fontWeight: "bold", fontSize: "36px", color: "#ffcc00" }}>Register</h2>
                            <form>
                                <div className="form-group mb-4">
                                    <label htmlFor="username" className="form-label" style={{ fontWeight: "bold", color: "#ffcc00" }}>Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        style={{ height: "45px", borderRadius: "5px" }}
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="email" className="form-label" style={{ fontWeight: "bold", color: "#ffcc00" }}>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="abc@gmail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        style={{ height: "45px", borderRadius: "5px" }}
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="password" className="form-label" style={{ fontWeight: "bold", color: "#ffcc00" }}>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        style={{ height: "45px", borderRadius: "5px" }}
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="address" className="form-label" style={{ fontWeight: "bold", color: "#ffcc00" }}>Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        placeholder="Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                        style={{ height: "45px", borderRadius: "5px" }}
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="phoneNumber" className="form-label" style={{ fontWeight: "bold", color: "#ffcc00" }}>Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phoneNumber"
                                        placeholder="Phone Number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                        style={{ height: "45px", borderRadius: "5px" }}
                                    />
                                </div>
                                <button type="submit" className="btn btn-warning w-100 mb-3" style={{ borderRadius: "5px" }}>Register</button>
                                <div className="text-center">
                                    <span>Already have an account? </span>
                                    <button type="button" className="btn btn-link text-warning p-0" >Login</button>
                                </div>
                            </form>
                            {showAlert && (
                                <div className="alert alert-danger mt-3" role="alert" style={{ backgroundColor: "black" }}>
                                    Email Already in use.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
