import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface Props {
  items: any;
  responsive?: any;
}

const SlideApp = ({ items, responsive }: Props) => {
  return <AliceCarousel mouseTracking items={items} responsive={responsive} />;
};

export default SlideApp;
