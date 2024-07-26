import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div>
      <Link to='/' className='header'>
        State
      </Link>
      <Link to='/counter-reducer' className='header'>
        Reducer
      </Link>
      <Link to='/counter-redux' className='header'>
        Redux
      </Link>
    </div>
  );
};

export default Header;
