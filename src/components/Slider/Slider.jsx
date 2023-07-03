import Сomment from "../Comentari/Сomment";
import "./Slider.scss";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";
function Slider() {
  const itemsComent = [
    {
      text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      author: "John Smith",
      tag: "Marketing Director at XYZ Corp",
    },
    {
      text: '"We have been working with Positivus for the past year and have seen a significant increase"',
      author: "John Smith",
      tag: "Marketing Director at XYZ Corp",
    },
    {
      text: '"The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      author: "Den Smith",
      tag: "Marketing Director at XYZ Corp",
    },
    {
      text: '"We have been working with Positivus for the past year and have seen a significant increase"',
      author: "John Smith",
      tag: "Marketing Director at XYZ Corp",
    },
    {
      text: '"The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      author: "Den Smith",
      tag: "Marketing Director at XYZ Corp",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(1);

  const [offset, setOffset] = useState(0);
  const windowWidth = window.innerWidth;
  // const widthComenBlock = 650;
  const widthComenBlock = windowWidth <= 800 ? 290 :  650 ;


  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? itemsComent.length - 1 : prevIndex - 1
    );
    setOffset((currentOffset) => {
      const newOffset = currentOffset + widthComenBlock;
      const maxOffset = windowWidth <= 800 ? 290 :  650;
      const minOffset = -(widthComenBlock * (itemsComent.length - 2));
      console.log(newOffset)
      return newOffset > maxOffset ? minOffset : newOffset;
    });
  };
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === itemsComent.length - 1 ? 0 : prevIndex + 1
    );
    setOffset((currentOffset) => {
      const newOffset = currentOffset - widthComenBlock;
      console.log(newOffset)
      const maxOffset = -(widthComenBlock * (itemsComent.length - 2));
      return newOffset < maxOffset ? widthComenBlock : newOffset;
    });
  };

  return (
    <div className='slider'>
      <div
        className='slider__content'
        style={{ transform: `translateX(${offset}px)` }}
      >
        {itemsComent.map((itemComent, index) => (
          <Сomment
            key={index}
            text={itemComent.text}
            author={itemComent.author}
            teg={itemComent.tag}
          />
        ))}
      </div>
      <div className='slider__button'>
        <button className='button-arrow' onClick={handlePrev}>
          <img src={arrow} alt='arrow' />
        </button>

        <div className='dot'>
          {itemsComent.map((_, index) => (
            <span
              key={index}
              className={` ${index === activeIndex ? "dot-active" : ""}`}
            ></span>
          ))}
          {/* <span className="dot-active"></span>
            <span></span>
            <span></span>
            <span></span> */}
        </div>
        <button
          className='button-arrow button-arrow-right'
          onClick={handleNext}
        >
          <img src={arrow} alt='arrow' />
        </button>
      </div>
    </div>
  );
}

export default Slider;
