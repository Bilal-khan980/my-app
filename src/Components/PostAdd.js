import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddCarForm extends Component {
    state = {
        make: '',
        model: '',
        year: '',
        price: '',
        mileage: '',
        imageUrl: '',
        description: '',
        features: ''
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        alert('Car advertisement submitted successfully!');
        this.setState({
            make: '',
            model: '',
            year: '',
            price: '',
            mileage: '',
            imageUrl: '',
            description: '',
            features: ''
        });
    };

    render() {
        const { make, model, year, price, mileage, imageUrl, description, features } = this.state;

        return (
            <div style={{ backgroundColor: 'black', color: 'yellow', height: '100%' }}>
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <div className="card p-4" style={{ width: "500px", backgroundColor: "black", color: "white", border: "none", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                        <h2 className="text-center mb-4" style={{ color: "#fff", fontWeight: "bold", fontSize: "50px" }}>Post An Ad</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label htmlFor="make" className="form-label" style={{ color: 'yellow' }}>Car Make</label>
                                    <input type="text" className="form-control" name="make" value={make} onChange={this.handleChange} required />
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="model" className="form-label" style={{ color: 'yellow' }}>Car Model</label>
                                    <input type="text" className="form-control" name="model" value={model} onChange={this.handleChange} required />
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="year" className="form-label" style={{ color: 'yellow' }}>Year</label>
                                    <input type="number" className="form-control" name="year" value={year} onChange={this.handleChange} required />
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="price" className="form-label" style={{ color: 'yellow' }}>Price ($)</label>
                                    <input type="number" className="form-control" name="price" value={price} onChange={this.handleChange} required />
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="mileage" className="form-label" style={{ color: 'yellow' }}>Mileage (in miles)</label>
                                    <input type="number" className="form-control" name="mileage" value={mileage} onChange={this.handleChange} required />
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="imageUrl" className="form-label" style={{ color: 'yellow' }}>Image URL</label>
                                    <input type="text" className="form-control" name="imageUrl" value={imageUrl} onChange={this.handleChange} required />
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="description" className="form-label" style={{ color: 'yellow' }}>Description</label>
                                    <textarea className="form-control" name="description" value={description} onChange={this.handleChange} rows="4" required></textarea>
                                </div>
                                <div className="col-12 mb-3">
                                    <label htmlFor="features" className="form-label" style={{ color: 'yellow' }}>Features (comma-separated)</label>
                                    <input type="text" className="form-control" name="features" value={features} onChange={this.handleChange} required />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-warning btn-block">Post Advertisement</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddCarForm;
