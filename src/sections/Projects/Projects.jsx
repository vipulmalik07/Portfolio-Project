import './Projects.css'
import weather from '../../assets/weather.png'
import ProjectCard from '../../Common/ProjectCard'
import car from '../../assets/car.png'
import ai from '../../assets/artificial-intelligence.png'
import profile from '../../assets/profile.png'

const Projects = () => {
  return (
    <section id='projects' className='container'>
      <h1 className='sectionTitle'>Projects</h1>
      <div className='projectContainer'>
        <ProjectCard src={weather} link={"https://github.com/vipulmalik07/React-Projects"} h3={"WeatherApp"} p={"Weather App"} />
        <ProjectCard src={car} link={"https://github.com/vipulmalik07/React-Projects"} h3={"EV-olution"} p={"Landing page"} />
        <ProjectCard src={ai} link={"https://github.com/vipulmalik07/Gemini-Ai-Project.git"} h3={"Gemini Ai"} p={"Conversational Ai"} />
        <ProjectCard src={profile} link={"https://github.com/vipulmalik07/Portfolio-Project.git"} h3={"Portfolio"} p={"Portfolio App"} />


      </div>
    </section>
  )
}

export default Projects
