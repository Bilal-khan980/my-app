import React from 'react';

function Contactus() {
    return (
        <div style={{ 
            backgroundColor: 'black', 
            color: 'white', 
            minHeight: '100vh', 
            padding: '20px', 
            fontFamily: 'Arial, sans-serif', 
            display: 'flex', 
            flexDirection: 'column', 
            
        }}>
            <div style={{ textAlign: 'center', maxWidth: '900px', justifyContent: 'center', margin: '0 auto' }}>
                <h1 style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '3em' , textAlign : 'center' }}>CONTACT US</h1>
                <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
                    Got questions or need assistance? We’re here to help. Here’s how you can reach us:
                </p>
            </div>
            
            <div style={{ margin: '20px', maxWidth: '900px' }}>
                <h2 style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '2em' }}>Customer Service</h2>
                <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
                    For any customer service inquiries, please email us at 
                    <a href="mailto:support@autoverse.com" style={{ color: '#FFD700', fontWeight: 'bold' }}> support@autoverse.com</a>.
                </p>
            </div>
            
            <div style={{ margin: '20px', maxWidth: '900px' }}>
                <h2 style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '2em' }}>Headquarters</h2>
                <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>You can visit us at:</p>
                <p>
                    <strong style={{ color: '#FFD700' }}>Autoverse Inc.</strong><br />
                    123 Auto Lane<br />
                    Motor City, St #12, XYZ
                </p>
            </div>
            
            <div style={{ margin: '20px', maxWidth: '900px' }}>
                <h2 style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '2em' }}>Business Inquiries</h2>
                <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
                    For business-related inquiries, please contact our business team at 
                    <a href="mailto:business@autoverse.com" style={{ color: '#FFD700', fontWeight: 'bold' }}> business@autoverse.com</a>.
                </p>
            </div>
            
            <div style={{ margin: '20px', maxWidth: '900px' }}>
                <h2 style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '2em' }}>Follow Us</h2>
                <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>Stay updated and follow us on social media:</p>
                <p>
                    <a href="https://www.facebook.com/autoverse" target='_blank' rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#FFD700', marginRight: '30px' }}>Facebook</a>
                    <a href="https://www.instagram.com/autoverse" target='_blank' rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#FFD700', marginRight: '30px' }}>Instagram</a>
                    <a href="https://www.twitter.com/autoverse" target='_blank' rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#FFD700' }}>Twitter</a>
                </p>
            </div>
        </div>
    );
}

export default Contactus;
