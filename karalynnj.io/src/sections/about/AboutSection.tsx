import SectionContainer from "../../components/SectionContainer";

const About = () => {
  return (
    <SectionContainer title="About Me">
      <div className="flex flex-col gap-4 font-cabin text-lg text-lilac">
        <p>
          Hi! I’m Karalynn Jones. I’m a UI/UX Developer that blends function and
          form to create digital experiences that feel good to use. Development
          led me to design and now I do my best work where they meet; beautiful,
          functional and well built apps. I care about the full picture, from
          the first prototypes to the final polish in production.
        </p>
        <p>
          One of the things I enjoy most about this work is the ability to make
          something useful. I love smoothing out the wrinkles; perfecting the
          flow, polishing the design, finding little snags that build friction.
          I’ve spent a lot of my career breathing new life into legacy products,
          and it’s given me a sharp eye for the things that shape how people
          experience the web.
        </p>
        <p>
          Outside of work, I’m usually doing something creative, like drawing on
          my Cintiq, writing my novel, or worldbuilding for my Dungeons &
          Dragons campaign.
        </p>
      </div>
    </SectionContainer>
  );
};

export default About;
