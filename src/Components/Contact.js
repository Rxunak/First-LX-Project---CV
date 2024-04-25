import React, { Component } from "react";
import axios from "axios";
import "../Styles/Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`information has been submitted`);
  };

  render() {
    return (
      <div className="main-div">
        <div className="twoDiv">
          <div className="divOne">
            <div>
              <h1 className="lt">Let's talk</h1>
              <p className="cP">
                Have some big idea or brand to develope <br />
                and need help? please le tme know i will <br />
                you.
              </p>
            </div>

            <div>
              <h2 className="cH2">Email</h2>
              <p className="cP">raunak@gmail.com</p>
            </div>

            <div>
              <h2 className="cH2">Contact Number</h2>
              <p className="cP">07828378978</p>
            </div>

            <div>
              <h2 className="cH2">Socials</h2>
              <p className="cP">Instagram </p>
              <p className="cP">Facebook</p>
              <p className="cP">Twitter</p>
            </div>
          </div>

          <div className="divTwo" onSubmit={this.handleSubmit}>
            <form className="cForm">
              <div className="test">
                <label className="cLb">Name</label>
                <br />
                <input
                  className="cIn"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleUsernameChange}
                  required
                />
              </div>

              <div className="test">
                <label className="cLb">Email</label>
                <br />
                <input
                  className="cIn"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  required
                />
              </div>

              <div className="test">
                <label className="cLb">Message</label>
                <textarea
                  className="cText"
                  value={this.state.message}
                  onChange={this.handleMessageChange}
                  required
                />
              </div>

              <button className="cButton">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
