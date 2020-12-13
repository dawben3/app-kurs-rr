import React, { Component } from "react";
import "../styles/ContactPgae.css";
import { Prompt } from "react-router-dom";

class ContactPgae extends Component {
  state = {
    value: "",
    isEmpty: false,
  };

  handleChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        isEmpty: true,
      });
    } else {
      this.setState({
        value: e.target.value,
        isEmpty: false,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
      isEmpty: false,

    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wpisz wiadomość..."
          ></textarea>
          <button>Wyślij</button>
        </form>
        <Prompt
          when={this.state.isEmpty}
          message="Masz niewypełniony formularz Czy chcesz opuścić tę stronę?"
        />
      </div>
    );
  }
}

export default ContactPgae;
