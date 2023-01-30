import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface Props {
  items: any;
  responsive?: any;
  gap?: number;
}

const SlideApp = ({ items, responsive, gap = 0 }: Props) => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      padding={gap}
    />
  );
};

export default SlideApp;
