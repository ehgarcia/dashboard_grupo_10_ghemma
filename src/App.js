import React from 'react';
import { SideBar } from './components/SideBar';
import { ContentWrapper } from './components/ContentWrapper';


export function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <ContentWrapper />
    </div>
  );
}

