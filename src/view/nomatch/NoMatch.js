import React from 'react';
import { Link } from 'react-router-dom';
 

const NoMatch = () => {
    return(
        <div className="container text-center">
            <div className="mt-5">
                <h2 className="_404title">Oops 404!</h2> 
                <span className="_404desc">page not found..</span>
                <Link to="/" className="_404link">Back home</Link>
            </div>
        </div>
    )
}

export default NoMatch;