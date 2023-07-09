import "./Team.scss";
import linkedin from "../../assets/linkedinIcon2.svg";
function Team({ userName, title, text, link }) {
  return (
    <div className='team'>
      <div className='team__content'>
        <h4 className='team__user-name'>{userName}</h4>
        <h4 className='team__title'>{title}</h4>
        <p className='team__text'>{text}</p>
      </div>
      <a className='team__link' href={`https://www.linkedin.com/in/${link}`}>
        <img src={linkedin} alt='' />
      </a>
    </div>
  );
}

export default Team;
