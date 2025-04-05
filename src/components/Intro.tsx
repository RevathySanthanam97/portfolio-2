import { Link } from "react-router-dom";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className='intro'>
      <div className='left'>
        <div className='left-content'>
          <small className='color nunito'>SOFTWARE ENGINEER</small>
          <h1>Hello, my name is Revathy!</h1>
          <p className='nunito'>With 5+ years of experience on architecting ecommerce frameworks and steamlining development flow</p>
          <div className='btn-list'>
            <Link className='secondary' to="projects">Projects</Link>
            <a target="_blank" href="https://www.linkedin.com/in/revathy-santhanam-70870a165/" className='primary'>Linked In</a>
          </div>
        </div>
      </div>
      <div className='right'>
        {/* <img src={BG} /> */}
      </div>
    </div>
  )
}

export default Intro