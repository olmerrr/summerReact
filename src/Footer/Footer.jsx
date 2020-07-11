import React from 'react';
import SiteName from './SiteName';

const Footer = (props) => {
  return (
    <div>
      <p> hello Footer
        <div>{props.name}</div>
      </p>
      <SiteName />
    </div>
  )
}

export default Footer;