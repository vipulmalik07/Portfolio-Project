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
                <SkillList src={checkMark} p={"TypeScript"} />
                <SkillList src={checkMark} p={"Node"} />
            </div>
            <hr />
            <div className='skillList'>
                <SkillList src={checkMark} p={"React"} />
                <SkillList src={checkMark} p={"Angular"} />
                <SkillList src={checkMark} p={"Vue"} />
                <SkillList src={checkMark} p={"TailWind CSS"} />
            </div>
            <hr />
            <div className='skillList'>
                <SkillList src={checkMark} p={"Redux"} />
                <SkillList src={checkMark} p={"Webpack"} />
                <SkillList src={checkMark} p={"Git"} />
                <SkillList src={checkMark} p={"Jest"} />
                <SkillList src={checkMark} p={"Bootstrap"} />
            </div>
        </section>
    )
}

export default Skills
