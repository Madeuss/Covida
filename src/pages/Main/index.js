import React from 'react';

import './styles.css';

import Sidebar from '../../components/Sidebar'
import MapBox from '../../components/MapBox'
// import Teste from '../../components/Teste'
export default function Main() {
  return (
    <>
        <Sidebar />
        <MapBox />
    </>
  );
}