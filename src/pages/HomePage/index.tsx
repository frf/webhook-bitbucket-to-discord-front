import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjTwo } from './data';

function Home() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Home;
