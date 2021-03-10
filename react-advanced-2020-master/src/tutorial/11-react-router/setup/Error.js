import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <div className="container">
        
          <Link to="/">
            <h3>Home</h3>
          </Link>
        
      </div>
    </div>
  );
};

export default Error;
