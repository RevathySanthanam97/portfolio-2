import Intro from "../components/Intro"
import "./Home.scss"
import Projects from "../components/Project"
import Services from "../components/Services"

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Services />
      <Projects />
    </div>
  )
}

export default Home