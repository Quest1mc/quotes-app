import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";


class QuoteForm extends Component {
  renderError({ error, touched }){
      if (touched && error ) {
          return (
              <div className="ui error message">
                <div className="header">{error}</div>
              </div>
          );
      }
  }
  
  
  
  
    renderInput =({ input, label, meta })=> {  
        const className = `field ${meta.error && meta.touched ? 'error':''}`;
    return (
        <div className= { className }>
            <label>{label}</label>
            <input {...input} autoComplete = "off" />
            {this.renderError(meta)}
        </div> 
    );
  }

  onSubmit = (formValues)=> {
      this.props.onSubmit(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      <form onSubmit ={this.props.handleSubmit(this.onSubmit)} className= "ui form error">
        <Field name="quote" component={this.renderInput} label="Enter Quote"/>        
        <Field name="author" component={this.renderInput} label="Enter Author"/>
        <button className= "ui button primary">Submit</button>
      </form>
    );
  }
}

const validate= (formValues) =>{
    const errors = {};
 if(!formValues.author) {
errors.title = 'You must enter a author';
 }
 if (!formValues.description){
     errors.description = 'You must give a quote';
 }
 return errors;
};



export default reduxForm({
  form: "quoteForm",
  validate
})(QuoteForm);

// const mapStateToProps =(state)=>{
//   return { formValues : state.auth.isSignedIn };
// }

