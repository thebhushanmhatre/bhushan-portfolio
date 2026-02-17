import React from 'react';
import { Outlet } from 'react-router-dom';
// Navigation bar
import Navigation from './Navigation';

function Main() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation />
      <div id="detail" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
