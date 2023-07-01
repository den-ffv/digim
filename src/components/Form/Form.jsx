import React from "react";
import "./Form.scss"
import imgBG from "../../../public/bg.svg";
function Form() {
  return (
    <>
      <form className='form' action="">

      <div>
        <input className="form__input-radio" type='radio' id='contactChoice1' name='contact' checked />
        <label for='contactChoice1'>Say Hi</label>
        <input className="form__input-radio" type='radio' id='contactChoice2' name='contact' />
        <label  for='contactChoice2'>Get a Quote</label>
      </div>
      <p className="form__text">Name</p>
      <input className="form__input" type="name" placeholder="Name"/>
      <p className="form__text">Email*</p>
      <input className="form__input" type="email" placeholder="Email"/>
      <p className="form__text">Message*</p>
      <textarea placeholder="Message" className="form__input form__input-message">

      </textarea>
      <button className="form__button">Send Message</button>
      </form>
      <img src={imgBG} alt="" />
    </>
  );
}

export default Form;
