import React from 'react';
import {  Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to= "/" className = "item">
                Quotes App
            </Link>
            <div className="right menu">
            <Link to= "/" className = "item">
                All Quotes
                </Link>
            </div>
            
           
        </div>
    );
};

export default Header;