import SectionContainer from "../../components/SectionContainer";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <SectionContainer title="Projects">
      {" "}
      <div className="grid grid-cols-3 grid-rows-2 gap-6 font-cabin text-lg text-lilac">
        <ProjectCard
          title="The Animal Crossing Ocean"
          description="An interaction and light animation focused project. This website showcases all of the ocean fish you can catch in the game Animal Crossing, using CSS based animations to put them in a realistic looking ocean with accurate depth markers. Learn fun facts with Blathers by clicking on the fish."
          tags={["HTML", "CSS", "Interaction", "Animation"]}
          link="https://karalynnj.github.io/The-Animal-Crossing-Ocean/"
          spanClass="row-span-2 "
        />
        {/* <ProjectCard
          title="White Label Design System"
          description="A white label design system made for a B2B Saas product using Figma and Material 3 design principles. It uses a visual language to convey meaning without relying on any fixed brand color or identity, while also maintaining a brand presence."
          tags={["Figma", "Mobile", "Material 3"]}
          link="/projects/white-label-design-system"
          spanClass="row-span-2 "
        />
        <ProjectCard
          title="St Louis Case Study"
          description="A case study redesigning the St. Louis Parish website to strike a balance between the older parishioners who rely on the website for information and the younger generation who are more likely to engage with a modern design."
          tags={["Figma", "Accessibility"]}
          link="/projects/st-louis-case-study"
          spanClass="col-span-2 "
        />
        <ProjectCard
          title="Personal Portfolio"
          description="This website! A clean and modern personal portfolio mocked in Figma then built with React and Tailwind. I wanted to create a portfolio that was easy to navigate and showcased my work in a visually appealing way."
          tags={["Figma", "React", "Tailwind"]}
          link="/projects/personal-portfolio"
          spanClass="col-span-2 "
        /> */}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
