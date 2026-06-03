import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "../../assets/Karalynn Jones Resume.pdf";
import AnchorLink from "../../components/AnchorLink";
import MaterialIcon from "../../components/MaterialIcon";

const HeroSection = () => {
  return (
    <header className="flex h-[75vh] w-full items-center justify-center bg-shadow box-border">
      <div className="hero flex items-center gap-10">
        <div className="w-[16px] h-[262px] bg-lilac"></div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-grotesk text-5xl text-ghost">Karalynn Jones</h1>
            <h2 className="font-cabin text-3xl text-ghost">UI/UX Developer</h2>
            <p className="font-cabin text-lg text-lilac">
              I blend functionality and form to create enjoyable things for the
              web.
            </p>
          </div>
          <div className="flex flex-row gap-2 ">
            <AnchorLink href="https://github.com/KaralynnJ">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </AnchorLink>
            <AnchorLink href="https://www.linkedin.com/in/karalynnmjones/">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </AnchorLink>
            <a
              href={resume}
              download="Karalynn Jones Resume.pdf"
              className="text-ghost hover:text-ecto transition duration-300 ease-in-out"
            >
              <MaterialIcon name="article_person" fill={1} opticalSize={26} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
