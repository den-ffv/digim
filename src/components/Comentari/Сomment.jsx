import React from "react";
import "./Сomment.scss";
function Сomment({ text, author, teg  }) {
  return (
    <div className='comment '>
      <p className='comment__text'>{text}</p>
      <div className='comment__content-author'>
        <p className='comment__author'>{author}</p>
        <p className='comment__teg'>{teg}</p>
      </div>
    </div>
  );
}

export default Сomment;
