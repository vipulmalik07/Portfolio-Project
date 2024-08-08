import "./Hero.css";
import heroimg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githublight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../Common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme()

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githublight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className="container">
      <div className="hero-div">
        <img className="hero-img" src={heroimg} alt="Profile Picture" />
        <img className="color-mode" src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
      </div>
      <div className="info">
        <h1>
          Vipul <br />
          Malik
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="#">
            {" "}
            <img src={twitterIcon} alt="twitter icon" target="_blank" />
          </a>
          <a href="#">
            {" "}
            <img src={githubIcon} alt="github icon" target="_blank" />
          </a>
          <a href="#">
            {" "}
            <img src={linkedinIcon} alt="linkedin icon" target="_blank" />
          </a>
        </span>
        <p>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
