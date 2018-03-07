import React from 'react';

export const Layout = props => (
  <div className="app-container">
    <div className="app-content">{props.children}</div>
  </div>
);

export default Layout;
