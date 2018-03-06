import React, { Component } from "react";
import { PaymentForm } from "./PaymentFormComponents";
import OrderSummary from "./OrderSummary";

class Checkout extends Component {
  render() {
    return (
      <div className="Checkout">
        <OrderSummary
          duration={this.props.duration}
          discount={this.props.discount}
          tax={this.props.tax}
          price={this.props.price}
        />
        <PaymentForm onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}

export default Checkout;
