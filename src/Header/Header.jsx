import React from 'react';
import SiteName from './../Footer/Footer';
const Header = (props) => {

  return (
    <div>
      <p>{props.menu}</p>
      <p> hello Header
        <div>{props.name}</div>
      </p>
      <SiteName />
    </div>
  )
}

export default Header;