import React from 'react';

import './Header.css';

const Header = ({ text }) => {
  return <p className="header-text source-sans-3-bold">{text}</p>;
};

export default Header;
