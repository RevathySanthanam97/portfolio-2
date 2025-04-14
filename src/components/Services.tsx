import "./Services.scss"
import Logo from "../assets/pen-ruler-solid.svg?react";
import Support from "../assets/people-roof-solid.svg?react";
import Bezier from "../assets/bezier-curve-solid.svg?react";
import Research from "../assets/lightbulb-solid.svg?react";
import Code from "../assets/laptop-code-solid.svg?react";
import ScrollAnimation from "./ScrollAnimation";

const Services = () => {
  return (
    <div className='services'>
        <div className='container'>
          <div className='service-list'>
            <ScrollAnimation animation="slide-up" delay={200} duration={500} once={false}>
              <div className='service-item'>
                <Logo />
                <h4>UI Engineering</h4>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={200} duration={500} once={false}>
              <div className='service-item'>
                <Bezier />
                <h4>API Schema</h4>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={200} duration={500} once={false}>
              <div className='service-item'>
                <Research />
                <h4>Research</h4>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={200} duration={500} once={false}>
              <div className='service-item'>
                <Support />
                <h4>Management</h4>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={200} duration={500} once={false}>
              <div className='service-item'>
                <Code />
                <h4>Client Support</h4>
              </div>
            </ScrollAnimation>
          </div>
        </div>
    </div>
  )
}

export default Services