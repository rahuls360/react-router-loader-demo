import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Homepage</Link>
        </li>
        <li>
          <Link to='/page1'>Page 1</Link>
        </li>
        <li>
          <Link to='/page1/child2'>Page 1 child</Link>
        </li>
        <li>
          <Link to='/page2'>Page 2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
