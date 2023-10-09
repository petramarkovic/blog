import '../../styles/index.scss';

import React from 'react';

function Navbar() {
  return (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">Home</li>
            <li className="nav__item">New Blog</li>
        </ul>
    </nav>
  )
}

export default Navbar;