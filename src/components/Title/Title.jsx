import "./Title.scss";
function Title({ title, text }) {
  return (
    <div className='setion-header-content'>
      <h2 className='setion-header-title'>{title}</h2>
      <p  className='setion-header-text'>{text}</p>
    </div>
  );
}

export default Title;
