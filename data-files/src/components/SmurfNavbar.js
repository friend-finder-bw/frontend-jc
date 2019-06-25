import React from 'react';
import {Route, Link} from 'react-router-dom';

const Navbar = props => {
  return (
    <div className=''>
     <Link to='/'><button className='headerBtn'>Become A Smurf</button></Link>
     <Link to='/smurfs'><button className='headerBtn'>See The Smurfs</button></Link>
    </div>
  );
};

export default Navbar;

/* Clear */