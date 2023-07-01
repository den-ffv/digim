import Button from "../components/Button/Button";
import ServisCard from "../components/ServisCard/ServisCard";
import Slider from "../components/Slider/Slider";
import DropDown from "../components/DropDown/DropDown";
import img from "../assets/illustration.svg";
import netflix from "../assets/sponsor/netflix.svg"
import dribbble from "../assets/sponsor/dribbble.svg"
import hubspot from "../assets/sponsor/hubspot.svg"
import notion from "../assets/sponsor/notion.svg"
import amazon from "../assets/sponsor/amazon.svg"
import zoom from "../assets/sponsor/zoom.svg"
import Title from "../components/Title/Title";

import img1 from "../assets/web-img.svg";
import img2 from "../assets/web-img2.svg";
import img3 from "../assets/web-img3.svg";
import img4 from "../assets/web-img4.svg";
import img5 from "../assets/web-img5.svg";
import img6 from "../assets/web-img6.svg";
import "./Home.scss"
import Team from '../components/Team/Team';
import Form from "../components/Form/Form";

function Home() {
  const dropDownItems = [
    {id : 1, title: "Consultation" , text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."},
    {id : 2, title: "Research and Strategy Development" , text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut debitis omnis ab quasi."},
    {id : 3, title: "Implementation" , text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."},
    {id : 4, title: "Monitoring and Optimization" , text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."},
    {id : 5, title: "Reporting and Communication" , text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magnam recusandae eligendi non numquam reprehenderit, cupiditate sed eum doloremque vel?"},
    {id : 6, title: "Continual Improvement" , text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, soluta. Porro voluptate quos, quia dolore placeat quae commodi a sint consectetur beatae dicta. Provident perferendis, officiis illo quis dolores ipsum natus laborum cupiditate!"}
  ]
  const teamItems =[
    {id: 1 , userName: 'John Smith', title : 'CEO and Founder',text: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy', link: "bohdan-chokhlenko"},
    {id: 2 , userName: 'Jane Doe', title : 'Director of Operations',text: '7+ years of experience in project management and team leadership. Strong organizational and communication skills', link: "bohdan-chokhlenko"},
    {id: 3 , userName: 'Michael Brown', title : 'Senior SEO Specialistr',text: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization', link: "bohdan-chokhlenko"},
    {id: 4 , userName: 'Emily Johnson', title : 'PPC Manager',text: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis', link: "bohdan-chokhlenko"},
    {id: 5 , userName: 'Brian Williams', title : 'Social Media Specialist',text: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement', link: "bohdan-chokhlenko"},
    {id: 6 , userName: 'Sarah Kim', title : 'Content Creator',text: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries', link: "bohdan-chokhlenko"},
  ]

  return (
    <>
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

    <div className="sponsors">
        <img src={amazon} alt="amazon" />
        <img src={dribbble} alt="dribbble" />
        <img src={hubspot} alt="hubspot" />
        <img src={notion} alt="notion" />
        <img src={netflix} alt="netflix" />
        <img src={zoom} alt="zoom" />
      </div>

      <section className="section-servis">
        <Title title={"Services"} text={"At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"}/>
        <div className="section-servis__cards">
          <ServisCard firstTitle={"Search engine"} secondTitle={"optimization"} img={img1} />
          <ServisCard firstTitle={"Pay-per-click"} secondTitle={"advertising"} img={img2} backgroundColor="#C797FF" backgroundColorText="#FFFFFF"/>
          <ServisCard firstTitle={"Social Media"} secondTitle={"Marketing"} img={img3} backgroundColor="#191A23" backgroundColorText="#FFFFFF" colorText="#fff" styleIcon="1"/>
          <ServisCard firstTitle={"Email"} secondTitle={"Marketing"} img={img4} />
          <ServisCard firstTitle={"Content"} secondTitle={"Creation"} img={img5} backgroundColor="#C797FF" backgroundColorText="#FFFFFF"/>
          <ServisCard firstTitle={"Analytics and"} secondTitle={"Tracking"} img={img6} backgroundColor="#191A23" colorText="#fff" styleIcon="1"/>
        </div>
      </section>
      <section className="section-case-studies">
        <Title title={"Our Working Process "} text={"Step-by-Step Guide to Achieving Your Business Goals"}/>
        {dropDownItems.map((dropDownItem) => (
          <DropDown key={dropDownItem.id} DropDownIndex={dropDownItem.id}  DropDownTitle={dropDownItem.title} DropDownText={dropDownItem.text}/>
        ))}
      </section>
      <section className="section-team">
        <Title title={"Team"} text={"Meet the skilled and experienced team behind our successful digital marketing strategies"}/>
        <div className="section-team__content">
          {teamItems.map((teamItem) => (
            <Team key={teamItem.id} userName={teamItem.userName} title={teamItem.title}text={teamItem.text} link={teamItem.link}/>
          ))}
        </div>
        <Button text={"See all team"} />
      </section>
      <section className="section-testimonials">
        <Title title={"Testimonials"} text={"Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"}/>
        <Slider/>
      </section>
      <section className="section-contact-us">
        <Title title={"Contact Us"} text={"Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"}/>
          <div className="section-contact-us__form">
          <Form/>
          </div>
      </section>
    </>

  );
}

export default Home;
