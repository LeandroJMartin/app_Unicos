import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface Props {
  items: any;
}

const SlideApp = ({ items }: Props) => {
  return <AliceCarousel mouseTracking items={items} />;
};

export default SlideApp;
