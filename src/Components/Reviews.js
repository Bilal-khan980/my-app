import React, { useState  } from 'react';

function Reviews(props) {
  

    const [review, setReview] = useState('');
    const [message, ] = useState('');
    const [reviews, ] = useState([]);
    const [loading, ] = useState(false);

    

    return (
        <div style={{ paddingLeft: "20px" }}>
            <div style={{ color: "yellow", fontWeight: "bold", fontSize: "30px" }}>REVIEWS</div>
            <form  >
                <input
                    placeholder='Leave a review.....'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    style={{ color: "white", backgroundColor: "black", border: "none", borderBottom: "2px solid yellow" }}
                />
            </form>
            {loading && (
                <div className="alert alert-success mt-3" role="alert" style={{ width: "300px" }}>
                    {message}
                </div>
            )}

            <div style={{ paddingTop: "20px" }}>
                {reviews.map((rev, index) => (
                    <div key={index} style={{ color: "white" }}>

                        {rev.username} : {rev.review}

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;
