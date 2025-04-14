import { Link } from "react-router-dom";
import "./Intro.scss";
import HeroIcon from '../assets/hero.svg?react';
import ScrollAnimation from "./ScrollAnimation";

function getYearsOfExperience(joinDateStr: string): string {
  const joinDate = new Date(joinDateStr);
  const today = new Date();

  const diffInMs = today.getTime() - joinDate.getTime();
  const msInYear = 1000 * 60 * 60 * 24 * 365.25; // including leap years

  const years = diffInMs / msInYear;

  return `${years.toFixed(1)}`;
}

const Intro = () => {
  return (
    <div className='intro'>
      <div className='left'>
        <ScrollAnimation animation="slide-up" delay={300}>
          <div className='left-content'>
            <small className='color nunito'>SOFTWARE ENGINEER</small>
            <h1>Hello, My name is Revathy!</h1>
            <p className='nunito'>With {getYearsOfExperience('2019-06-01')} years of experience on architecting ecommerce frameworks and steamlining development flow</p>
            <div className='btn-list'>
              <Link className='secondary' to="projects">Projects</Link>
              <a target="_blank" href="https://www.linkedin.com/in/revathy-santhanam-70870a165/" className='primary'>Linked In</a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className='right'>
        <ScrollAnimation animation="zoom" duration={300}>
          <HeroIcon />
        </ScrollAnimation>
        </div>
    </div>
  )
}

export default Intro