import img from "../assets/illustration.svg";
import Button from "../components/Button/Button";
import "./Home.scss"
function Home() {
  return (
    <section className='section-info'>
      <div className="section-info__content">
        <h1 className="section-info__title">Navigating the digital landscape for success</h1>
        <p className="section-info__text">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button text={"Book a consultation"} />
      </div>
      <img className="section-info__img" src={img} alt='' />
    </section>
  );
}

export default Home;
