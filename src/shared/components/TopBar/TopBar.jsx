import React from 'react';

import logo from 'shared/images/clarovideo_logo.png';
import './TopBar.scss';

function TopBar() {
  return (
    <div className="top-bar">
      <i className="fa fa-bars top-bar__menu" aria-hidden="true" />
      <img className="top-bar__logo" src={logo} alt="Claro Video Logo" />
    </div>
  );
}

export default TopBar;