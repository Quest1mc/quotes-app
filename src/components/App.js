import React from 'react';
import { Router,Route } from 'react-router-dom';
import ListQuotes from './quotes/ListQuotes'
import EditQuote from './quotes/EditQuote'
import ShowQuote from './quotes/ShowQuote'
import CreateQuote from './quotes/CreateQuote'
import DeleteQuote from './quotes/DeleteQuote'
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className = "ui container">
         
           
           <Router history = {history}>
           <div>
           <Header />
           <Route path= "/" exact component = {ListQuotes} />
           <Route path= "/quotes/new" exact component = {CreateQuote} />
           <Route path= "/quotes/edit" exact component = {EditQuote} />
           <Route path= "/quotes/show" exact component = {ShowQuote} />
           
           <Route path= "/quotes/delete" exact component = {DeleteQuote} />
           </div>
           
           </Router>
        </div>
    );
};

export default App;