import React from 'react';
import SidepageHero from '../components/building-blocks/SidepageHero';

const initiatives = () => {
  return (
    <>
      <SidepageHero
        title="Initiatives"
        bgImg="/get-involved-hero-bg.jpg"
        className="initiatives__hero"
        darkBg={true}
      />
    </>
  );
};

export default initiatives;
