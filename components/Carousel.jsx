import React, { useState } from 'react';
import { BsArrowLeftSquare } from 'react-icons/bs';
import { BsArrowRightSquare } from 'react-icons/bs';
import Image from 'next/image';
const dataSlider = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1598082942907-da7f91b2f0e3?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1589902860314-e910697dea18?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687',
  },
];
const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = dataSlider.length;
  //   console.log(length);
  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  return (
    <div className="z-50 w-full h-screen mx-auto   flex justify-center items-center ">
      {dataSlider.map((item, index) => (
        <div
          className={index === slide ? 'opacity-100' : 'opacity-0'}
          key={item.id}>
          {index === slide && (
            <div className="">
              <Image
                className="w-full"
                src={item.url}
                alt="/"
                width="100%"
                height="100%"
                objectFit=""
                layout="fill"
              />
              <BsArrowLeftSquare
                onClick={prevSlide}
                className="absolute top-[50%] text-3xl text-gray-50 cursor-pointer left-10 z-50"
              />
              <BsArrowRightSquare
                onClick={nextSlide}
                className="absolute top-[50%] text-3xl text-gray-50 cursor-pointer right-10 z-50"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Carousel;
