import React, { Component } from "react";
import ImagePreview from "./Components/ImagePreviewArea/ImagePreview";
import Checkout from "./Components/CheckoutArea/Checkout";
import Transition from 'react-addons-css-transition-group';
import "./App.css";

const Overlay = ({ image }) => {
  return (
    <div className="Overlay" style={{ backgroundImage: "url(" + image + ")" }}>
      something
    </div>
  );
};

const Container = ({ children }) => {
  return <div className="Container">{children}</div>;
};

const Header = ({ onChange }) => {
  return (
    <header>
      <input onChange={onChange} type="range" max="100" min="1" step="1" />
    </header>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      mounted: false,
      people: 1,
      price: 320.0,
      tax: 20,
      duration: 5,
      discount: 5
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      duration: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Transition
          transitionName="overlay"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
        <Overlay image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
        </Transition>
        <Transition
      transitionName="container"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
    <Container>
        <ImagePreview
          price={this.state.price}
          duration={this.state.duration}
          people={this.state.people}
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg"
        />
        <Checkout
          duration={this.state.duration}
          discount={this.state.discount}
          tax={this.state.tax}
          price={this.state.price}
          onSubmit={this.handleSubmit}
        />
      </Container>
    </Transition>
  <Header onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
