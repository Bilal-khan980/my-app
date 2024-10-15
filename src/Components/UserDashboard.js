import React, { useState } from 'react';

function UserDashboard() {
    const [editField, setEditField] = useState(null);
    const [newValue, setNewValue] = useState('');
    const [userDetails, setUserDetails] = useState({
        username: 'Hamna',
        email: 'hamna@example.com',
        address: '123 Main St, Cityville',
        phoneNumber: '123-456-7890'
    });

    const handleEditClick = (field) => {
        setEditField(field);
        setNewValue(userDetails[field]);
    };

    const saveChanges = () => {
        setUserDetails({ ...userDetails, [editField]: newValue });
        setEditField(null);
    };

    const cancelEdit = () => {
        setEditField(null);
        setNewValue('');
    };

    return (
        <div className='home-container' style={{ backgroundColor: "black", height: "100vh", padding: "20px" }}>
            <h1 style={{ color: "yellow", textAlign: "center" }}>Welcome Hamna!</h1>
            <div style={{ paddingTop: "40px", paddingLeft: "40px" }}>
                {/* Username */}
                <div style={{ fontSize: "30px", marginBottom: "20px" }}>
                    <span style={{ color: "yellow" }}>USERNAME :</span>
                    {editField === 'username' ? (
                        <span>
                            <input 
                                type="text" 
                                value={newValue} 
                                onChange={(e) => setNewValue(e.target.value)} 
                                style={{ marginLeft: "20px" }}
                            />
                            <button onClick={saveChanges} style={{ marginLeft: "10px" }}>Save</button>
                            <button onClick={cancelEdit} style={{ marginLeft: "10px" }}>Cancel</button>
                        </span>
                    ) : (
                        <span>
                            <span style={{ color: "white", paddingLeft: "50px" }}>{userDetails.username}</span>
                            <button onClick={() => handleEditClick('username')} style={{ marginLeft: "10px" }}>Edit</button>
                        </span>
                    )}
                </div>

                {/* Email */}
                <div style={{ fontSize: "30px", marginBottom: "20px" }}>
                    <span style={{ color: "yellow" }}>EMAIL :</span>
                    {editField === 'email' ? (
                        <span>
                            <input 
                                type="email" 
                                value={newValue} 
                                onChange={(e) => setNewValue(e.target.value)} 
                                style={{ marginLeft: "20px" }}
                            />
                            <button onClick={saveChanges} style={{ marginLeft: "10px" }}>Save</button>
                            <button onClick={cancelEdit} style={{ marginLeft: "10px" }}>Cancel</button>
                        </span>
                    ) : (
                        <span>
                            <span style={{ color: "white", paddingLeft: "110px" }}>{userDetails.email}</span>
                            <button onClick={() => handleEditClick('email')} style={{ marginLeft: "10px" }}>Edit</button>
                        </span>
                    )}
                </div>

                {/* Address */}
                <div style={{ fontSize: "30px", marginBottom: "20px" }}>
                    <span style={{ color: "yellow" }}>ADDRESS :</span>
                    {editField === 'address' ? (
                        <span>
                            <input 
                                type="text" 
                                value={newValue} 
                                onChange={(e) => setNewValue(e.target.value)} 
                                style={{ marginLeft: "20px" }}
                            />
                            <button onClick={saveChanges} style={{ marginLeft: "10px" }}>Save</button>
                            <button onClick={cancelEdit} style={{ marginLeft: "10px" }}>Cancel</button>
                        </span>
                    ) : (
                        <span>
                            <span style={{ color: "white", paddingLeft: "72px" }}>{userDetails.address}</span>
                            <button onClick={() => handleEditClick('address')} style={{ marginLeft: "10px" }}>Edit</button>
                        </span>
                    )}
                </div>

                {/* Phone Number */}
                <div style={{ fontSize: "30px", marginBottom: "20px" }}>
                    <span style={{ color: "yellow" }}>PHONE # :</span>
                    {editField === 'phoneNumber' ? (
                        <span>
                            <input 
                                type="text" 
                                value={newValue} 
                                onChange={(e) => setNewValue(e.target.value)} 
                                style={{ marginLeft: "20px" }}
                            />
                            <button onClick={saveChanges} style={{ marginLeft: "10px" }}>Save</button>
                            <button onClick={cancelEdit} style={{ marginLeft: "10px" }}>Cancel</button>
                        </span>
                    ) : (
                        <span>
                            <span style={{ color: "white", paddingLeft: "75px" }}>{userDetails.phoneNumber}</span>
                            <button onClick={() => handleEditClick('phoneNumber')} style={{ marginLeft: "10px" }}>Edit</button>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;
