import React from 'react';
import { Link } from 'react-router-dom';
 
const NoMatch = () => {
    return(
        <div className="_404">
            <h2>Oops 404!</h2> 
            <span className="_404desk">Page not found :(</span>
            <Link to="/" className="_404home">Back home</Link>
        </div>
    )
}

export default NoMatch;