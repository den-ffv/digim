import { useEffect, useRef, useState } from "react";
import "./DropDown.scss";

function DropDown({ DropDownIndex, DropDownTitle, DropDownText}) {
  const [dropDownActiv, setDropDownActiv] = useState(false)
  const textContentRef = useRef(null);
  useEffect(() => {
    const textContentElement = textContentRef.current;
    if (textContentElement) {
      textContentElement.style.maxHeight = dropDownActiv ? `${textContentElement.scrollHeight}px` : '0';
    }
  }, [dropDownActiv, DropDownText]);
  return (
    <div className={dropDownActiv ?'drop-down drop-down-active' :"drop-down"}onClick={() => setDropDownActiv(!dropDownActiv)}>
      <div className='drop-down__content'>
        <div className='drop-down__content'>
          <p className='drop-down__index'>0{DropDownIndex}</p>
          <h2 className='drop-down__titel'>{DropDownTitle}</h2>
        </div>
        <div className={dropDownActiv ? "drop-down__button drop-down__button-active" : "drop-down__button"}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div ref={textContentRef}  style={{ maxHeight: dropDownActiv ? '200px' : '0' }} className={dropDownActiv ? "drop-down__text-content drop-down__active" : "drop-down__text-content"}>
        <p className='drop-down__text'>{DropDownText}</p>
      </div>
    </div>
  );
}

export default DropDown;
