import React from 'react';
import { BrowserRouter,Route, Link } from 'react-router-dom';
import ListQuotes from './quotes/ListQuotes'
import EditQuote from './quotes/EditQuote'
import ShowQuote from './quotes/ShowQuote'
import CreateQuote from './quotes/CreateQuote'
import DeleteQuote from './quotes/DeleteQuote'
import Header from './Header';

const App = () => {
    return (
        <div className = "ui container">
         
           <BrowserRouter>
           <div>
           <Header />
           <Route path= "/" exact component = {ListQuotes} />
           <Route path= "/quotes/edit" exact component = {EditQuote} />
           <Route path= "/quotes/show" exact component = {ShowQuote} />
           <Route path= "/quotes/new" exact component = {CreateQuote} />
           <Route path= "/quotes/delete" exact component = {DeleteQuote} />
           </div>
           
           </BrowserRouter>
        </div>
    );
};

export default App;