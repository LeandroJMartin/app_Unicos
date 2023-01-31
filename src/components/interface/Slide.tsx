import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface Props {
  items: any;
  responsive?: any;
  gap?: number;
}

const SlideApp = ({ items, responsive }: Props) => {
  const Prev = () => {
    return (
      <p className="p-1 absolute left-[-15px] top-[calc(50%-30px)] rounded-[100%] z-10 cursor-pointer bg-blue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="square"
          stroke-linejoin="bevel"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </p>
    );
  };
  const Next = () => {
    return (
      <p className="p-1 absolute right-[-15px] top-[calc(50%-30px)] rounded-[100%] z-10 cursor-pointer bg-blue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="square"
          stroke-linejoin="bevel"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </p>
    );
  };

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      renderPrevButton={Prev}
      renderNextButton={Next}
    />
  );
};

export default SlideApp;
