import './Projects.css'
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../Common/ProjectCard'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import FitLift from '../../assets/fitlift.png'

const Projects = () => {
  return (
    <section id='projects' className='container'>
      <h1 className='sectionTitle'>Projects</h1>
      <div className='projectContainer'>
        <ProjectCard src={viberr} link={"https://github.com/vipulmalik07/Gemini-Ai-Project"} h3={"Viberr"} p={"StreamingApp"} />
        <ProjectCard src={freshBurger} link={"https://github.com/vipulmalik07/Gemini-Ai-Project"} h3={"Fresh Burger"} p={"Restaurant Shop"} />
        <ProjectCard src={hipsster} link={"https://github.com/vipulmalik07/Gemini-Ai-Project"} h3={"Hipsster"} p={"Glasses Shop"} />
        <ProjectCard src={FitLift} link={"https://github.com/vipulmalik07/Gemini-Ai-Project"} h3={"FitLift"} p={"Fitness App"} />


      </div>
    </section>
  )
}

export default Projects
