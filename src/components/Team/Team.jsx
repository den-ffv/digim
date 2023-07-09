import "./Team.scss";
import linkedin from "../../assets/linkedinIcon2.svg";
function Team({ personImage, userName, title, text, link }) {
  return (
    <div className='team'>
      <div className='team__content'>
        <div className="team__img-vector">
          <img className='team__img' src={`../../src/image/${personImage}`} alt='user' />
        </div>
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
