
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <h3 className="ui block header">
      <div className="ui clearing segment">
        <h3 className="ui left floated header">
          <Link to="/">All Issues</Link>
        </h3>
      </div>
    </h3>
  );
};

export default Header;
