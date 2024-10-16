import React from 'react';

function Aboutus() {
    return (
        <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '3em' }}>ABOUT US</h1>
                <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
                    Welcome to Autoverse, your trusted destination for buying and selling automobiles. We strive to deliver a seamless, transparent, and convenient experience for all automotive enthusiasts and customers.
                </p>
            </div>
            <div style={{ maxWidth: '900px', margin: '20px auto' }}>
                <h2 style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '2em' }}>Our Mission</h2>
                <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
                    At Autoverse, our mission is to simplify the process of buying and selling vehicles. We are committed to connecting buyers with reliable sellers and ensuring that every transaction is secure and hassle-free.
                </p>
            </div>
            <div style={{ maxWidth: '900px', margin: '20px auto' }}>
                <h2 style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '2em' }}>Our Values</h2>
                <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>We stand by the following core values:</p>
                <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    <li style={{ marginBottom: '10px' }}>
                        <strong style={{ color: '#FFD700' }}>Integrity</strong> - We prioritize honesty and transparency in every transaction.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <strong style={{ color: '#FFD700' }}>Quality</strong> - We ensure that every vehicle listed on our platform meets our high standards for reliability and performance.
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <strong style={{ color: '#FFD700' }}>Customer-Centric</strong> - Our customers are at the heart of everything we do. We are here to support you every step of the way.
                    </li>
                </ul>
            </div>
            <div style={{ maxWidth: '900px', margin: '20px auto' }}>
                <h2 style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '2em' }}>Contact Us</h2>
                <p style={{ fontSize: '1.2em', lineHeight: '1.6' }}>
                    If you have any questions or would like to learn more about our services, feel free to reach out to us at <a href="mailto:support@autoverse.com" style={{ color: '#FFD700', fontWeight: 'bold' }}>support@autoverse.com</a>.
                </p>
            </div>
        </div>
    );
}
export default Aboutus;
