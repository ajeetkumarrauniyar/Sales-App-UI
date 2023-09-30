import React from "react";
import "../App.css";

// This component displays the top 5 sales in a responsive table format
const TopSales = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 my-5 table-responsive">
          <h4 className="text-center">Top 5 Sales</h4>
          <table className="table table-dark table-striped table-hover align-middle">
            <thead>
              <tr className="align-middle"> 
                <th scope="col">#</th>
                <th scope="col">Sales ID:</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Sale Amount</th>
              </tr>
            </thead>
            <tbody className="table-group-divider align-middle text-center">
              <tr>
                <th scope="row">1</th>
                <td>MS0001</td>
                <td>RSO 1 LT PCH</td>
                <td>10</td>
                <td>17500</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>MS0002</td>
                <td>KGMO 1 LT PCH</td>
                <td>4</td>
                <td>7720</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopSales;
