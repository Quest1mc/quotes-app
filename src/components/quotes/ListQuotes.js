import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchQuotes } from "../../actions";

class ListQuotes extends React.Component {
  componentDidMount() {
    this.props.fetchQuotes();
  }

  renderAdmin(quote) {
    if (quote.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to ={`/quotes/edit/${quote.id}`} className="ui button primary">Edit</Link>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }
  renderList() {
    return this.props.quotes.map(quote => {
      return (
        <div className="item" key={quote.id}>
          {this.renderAdmin(quote)}
          <i className="large middle aligned icon pen square" />
          <div className="content">
            {quote.quote}
            <div className="description">{quote.author}</div>
          </div>
        </div>
      );
    });
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style = {{ textAlign : 'right'}}>
          <Link to="/quotes/new" className="ui button primary">
            Create Quotes
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Quotes</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // currentUserId: state.auth.userId,
    quotes: Object.values(state.quotes),
    // isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchQuotes }
)(ListQuotes);
