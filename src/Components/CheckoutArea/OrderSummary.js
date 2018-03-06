import React, { Component } from "react";
import pluralize from "pluralize";

class OrderSummary extends Component {
  render() {
    const duration = `${this.props.duration} ${pluralize(
      "day",
      parseInt(this.props.duration)
    )}`;

    // Initial Total Calculation
    const initialTotal = this.props.duration * this.props.price;

    // Discount Calculation
    const discount = Math.floor(initialTotal / 100 * this.props.discount);

    //  Subtotal (with discount)
    const subTotal = initialTotal - discount;

    // Calculate Tax
    const tax = Math.floor(subTotal / 100 * this.props.tax);

    // Total
    const total = subTotal + tax;

    return (
      <div className="OrderSummary">
        <div className="Title">Order Summary</div>
        <table>
          <tbody>
            <tr>
              <td>
                {this.props.price} x {duration}
              </td>
              <td>{initialTotal} GBP</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>{discount} GBP</td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>{subTotal} GBP</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>{tax} GBP</td>
            </tr>
          </tbody>
        </table>
        <div className="Total">
          <div className="TotalLabel">Total</div>
          <div className="Amount">
            {total} <small>GBP</small>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderSummary;
