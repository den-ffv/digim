import React from "react";
import "./ServisCard.scss";
import icon from "../../../public/assets/icon.svg";

function ServisCard({firstTitle, secondTitle, backgroundColor, backgroundColorText, colorText, img, styleIcon}) {
  return (
    <div className='card' style={{ backgroundColor }}>
      <div className='card__content'>
        <div className='card__title'>
          <p style={{ backgroundColor: `${backgroundColorText}` }}>{firstTitle}</p>
          <p style={{ backgroundColor: `${backgroundColorText}` }}>{secondTitle}</p>
        </div>
        <div className='card__link'>
          <img style={{ filter: `invert(${styleIcon})` }}  src={icon} alt='icon arroy' />
          <p  style={{ color: `${colorText}` }}>Learn more</p>
        </div>
      </div>
      <img className="card__img" src={img} alt='img' />
    </div>
  );
}

export default ServisCard;
