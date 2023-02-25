import React, { useState } from 'react';
import './ratingstyle.css';

export default function Rating() {
  const [rating, setRating] = useState(null);
  const [changepage, setChangepage] = useState(null);
  const btnarr = [1, 2, 3, 4, 5];
  const oncilckhandler = (value) => {
    setRating(value);
  };

  const login = () => {
    setChangepage(1);
  };

  return rating && changepage ? (
    <div className="container2">
      <h1>Thanks For Feedback </h1>
      <h2>You rated us {rating} out of 5</h2>
      <p>
        Your feedback is very important to us. Thankyou for  giving us your valuable time.
      </p>
    </div>
  ) : (
    <div className="container">
      <h1>Please Provide Rating </h1>
      <p>
        Your feedback is very important to us please give your valuable
        feeback that will help us to grow and improve better in the future
      </p>
      <div className="ratingbtn">
        {btnarr.map((value,key) => (
          <button key={key} onClick={() => oncilckhandler(value)} className="btn">
            {value}
          </button>
        ))}
      </div>
      <button onClick={login} disabled={rating === null} className="loginbtn">
        Login
      </button>
    </div>
  );
}
