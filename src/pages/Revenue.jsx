import React from "react";
import '../App.css';

// This component displays today's revenue in a card format
const Revenue = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 my-5">
          <h4 className="text-center">Today's Revenue</h4>
          {/* Card element to display revenue */}
          <div className="card border border-2 rounded-3">
            <div className="card-body">
              {/* Display revenue amount with currency symbol */}
              <p className="d-flex justify-content-center align-items-center display-4 fw-bold">
                <span className="pe-3">&#8377;</span>25220
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
