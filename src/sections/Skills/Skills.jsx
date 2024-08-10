import './Skills.css'
import checkdark from '../../assets/checkmark-dark.svg'
import checklight from '../../assets/checkmark-light.svg'
import SkillList from '../../Common/SkillList'
import { useTheme } from '../../Common/ThemeContext';
const Skills = () => {
    const { theme} = useTheme();
    const  checkMark = theme === 'light' ? checklight : checkdark;
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
