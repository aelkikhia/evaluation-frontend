import React from 'react';
import { Link } from 'react-router-dom'
import GoogleAuth from "./GoogleAuth";


const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/arraydiff" className="item">Array Diff</Link>
            <Link to="/social" className="item">Social network analysis</Link>
            <div className="right menu">
                <GoogleAuth/>
            </div>
        </div>
    );
};

export default Header;