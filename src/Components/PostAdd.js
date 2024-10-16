import React, { Component } from 'react';

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
        // Here you would typically send this data to the backend
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
            <div style={{ backgroundColor: 'black', color: 'yellow', padding: '40px', height : '100vh' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Post An Ad</h2>
                <form onSubmit={this.handleSubmit} style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="make" style={{ display: 'block', marginBottom: '5px', color: 'white' }}>Car Make</label>
                                <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid yellow' }} name="make" value={make} onChange={this.handleChange} />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="model" style={{ display: 'block', marginBottom: '5px', color: 'white' }}>Car Model</label>
                                <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid yellow' }} name="model" value={model} onChange={this.handleChange} />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="year" style={{ display: 'block', marginBottom: '5px', color: 'white' }}>Year</label>
                                <input type="number" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid yellow' }} name="year" value={year} onChange={this.handleChange} />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="price" style={{ display: 'block', marginBottom: '5px', color: 'white' }}>Price ($)</label>
                                <input type="number" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid yellow' }} name="price" value={price} onChange={this.handleChange} />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="mileage" style={{ display: 'block', marginBottom: '5px', color: 'white' }}>Mileage (in miles)</label>
                                <input type="number" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid yellow' }} name="mileage" value={mileage} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="imageUrl" style={{ display: 'block', marginBottom: '5px', color: 'white' }}>Image URL</label>
                                <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid yellow' }} name="imageUrl" value={imageUrl} onChange={this.handleChange} />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="description" style={{ display: 'block', marginBottom: '5px', color: 'white' }}>Description</label>
                                <textarea style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid yellow' }} name="description" value={description} onChange={this.handleChange} rows="4"></textarea>
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="features" style={{ display: 'block', marginBottom: '5px', color: 'white' }}>Features (comma-separated)</label>
                                <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid yellow' }} name="features" value={features} onChange={this.handleChange} />
                            </div>
                            {/* Center the button within its container */}
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <button type="submit" style={{ width: '50%', backgroundColor: 'yellow', border: 'none', borderRadius: '4px', color: 'black', fontSize: '16px', padding: '10px' }}>Post Advertisement</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddCarForm;
