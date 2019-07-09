import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchQuote , editQuote } from '../../actions';
import QuoteForm from './QuoteForm';

class EditQuote extends React.Component {
    componentDidMount (){
        this.props.fetchQuote(this.props.match.params.id);
    }
 onSubmit = (formValues)=> {
 this.props.editQuote(this.props.match.params.id, formValues)
 };

 render () {
    if (!this.props.quote) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h3>Edit a Quote</h3>
            <QuoteForm initialValues= {_.pick(this.props.quote,'quote','author')} onSubmit={this.onSubmit} />
        </div>
    )
 }
};
const mapStateToProps = (state, ownProps) => {
    return {quote :state.quotes[ownProps.match.params.id] };
};


export default  connect (mapStateToProps, {fetchQuote, editQuote}) (EditQuote);
