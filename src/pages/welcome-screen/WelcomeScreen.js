import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div style={{textAlign: 'center' }}>
            <h1 className="ui header center aligned">Welcome Screen</h1>
            <br /> 
            <Link to='/test'>
                <button className="ui massive blue button">Test</button>
            </Link>
        </div>
    );
};