import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lottie from 'lottie-react';
import animationData from '../Animation/Animation - 1719863439089.json';

function Login({ setIsRegister, setIsForgotPassword }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert] = useState(false);



    return (
        <div style={{ backgroundColor: "black", height: "90%", overflow: "hidden" }}>
            <div className="container-fluid d-flex align-items-center justify-content-center" style={{ backgroundColor: "black", height: "100vh" }}>
                <div className="row align-items-center">
                    <div className="col-md-6 d-flex justify-content-center">
                        <Lottie animationData={animationData} style={{ height: '700px', width: "700px" }} />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center" style={{ paddingTop: "100px" }}>
                        <div className="card p-4" style={{ textAlign: "center", width: "500px", height: "700px", backgroundColor: "black", color: "white", border: "none", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                            <h2 className="text-center mb-4" style={{ color: "#fff", fontWeight: "bold", fontSize: "50px" }}>LOGIN</h2>
                            <form >
                                <div className="form-group mb-3">
                                    <p style={{ textAlign: "left", fontWeight: "bold", fontSize: "30px", color: "yellow" }}>EMAIL</p>
                                    <input
                                        style={{ height: "50px" }}
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="abc@gmail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <p style={{ textAlign: "left", fontWeight: "bold", fontSize: "30px", color: "yellow" }}>PASSWORD</p>
                                    <input
                                        style={{ height: "50px" }}
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-warning btn-block">LOGIN</button><br /><br />
                            </form>
                            <br />
                            <button type="button" className="btn btn-warning btn-block" onClick={() => setIsForgotPassword(true)}>Forgot Password?</button>
                            <span style={{ paddingTop: "40px", paddingLeft: "170px" }}>Don't have an account?
                                <span style={{ paddingLeft: "20px" }}><button type="button" className="btn btn-warning btn-block" onClick={() => setIsRegister(true)}>REGISTER</button></span></span>

                            {showAlert && (
                                <div className="alert alert-danger mt-3" role="alert">
                                    Wrong credentials
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
