import './Skills.css'
import checkMark from '../../assets/checkmark-dark.svg'
import SkillList from '../../Common/SkillList'
const Skills = () => {
    return (
        <section className='skills-container' id='skills'>
            <h1 className='sectionTitle'>Skills</h1>
            <div className='skillList'>
                <SkillList src={checkMark} p={"HTML"} />
                <SkillList src={checkMark} p={"CSS"} />
                <SkillList src={checkMark} p={"JavaScript"} />
                <SkillList src={checkMark} p={"Python"} />
                <SkillList src={checkMark} p={"SQl"} />
            </div>
            <hr />
            <div className='skillList'>
                <SkillList src={checkMark} p={"Reactjs"} />
                <SkillList src={checkMark} p={"Bootstrap"} />
                <SkillList src={checkMark} p={"Material Ui"} />
                <SkillList src={checkMark} p={"TailWind CSS"} />
            </div>
            <hr />
            <div className='skillList'>
                <SkillList src={checkMark} p={"Git"} />
                <SkillList src={checkMark} p={"Vite"} />
                <SkillList src={checkMark} p={"Firebase"} />
                <SkillList src={checkMark} p={"Framer Motion"} />
            </div>
        </section>
    )
}

export default Skills
