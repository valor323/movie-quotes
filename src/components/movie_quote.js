import React from  'react';
import auth from '../hoc/auth';

const movieQuote =  props => {
    return (
        <div className="center">
            <h1>Movie Quotes</h1>
            <h4>And poof he was gone!</h4>
        </div>
    );
}

export default auth(movieQuote);