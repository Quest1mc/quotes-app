import React, { Component } from "react";
import { connect } from "react-redux";
import { createQuote } from "../../actions";
import QuoteForm from "./QuoteForm";

class CreateQuote extends Component {
  onSubmit = formValues => {
    this.props.createQuote(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Quote</h3>
        <QuoteForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createQuote }
)(CreateQuote);
