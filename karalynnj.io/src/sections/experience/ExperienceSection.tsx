import AnchorLink from "../../components/AnchorLink";
import { default as Ecto } from "../../components/Ecto";
import SectionContainer from "../../components/SectionContainer";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <SectionContainer title="Work Experience">
      {/* Ziiware Card */}
      <div className="flex flex-col gap-0">
        <ExperienceCard
          title="UI/UX Specialist @ Ziiware"
          date="Apr 2024 – Apr 2026"
          companyLink="https://www.ziiware.com/"
        >
          <p>
            Designed a white label design system for a B2B Saas product using{" "}
            <Ecto>Figma</Ecto> and <Ecto>Material 3</Ecto> design principles.
            Used a visual language to convey meaning without relying on any
            fixed brand color or identity.{" "}
            <AnchorLink href="/projects/white-label-design-system">
              Read more about how I did it.
            </AnchorLink>
          </p>
          <p>
            Designed and built a web ordering system in <Ecto>React</Ecto> and{" "}
            <Ecto>Typescript</Ecto> with <Ecto>Material UI</Ecto> to mirror our
            existing mobile app, delivering a web app that bridged B2B
            functionality with e-commerce familiarity.
          </p>
          <p>
            Implemented and advocated for <Ecto>accessibility</Ecto> in the
            design process by following <Ecto>WCAG guidelines</Ecto>, improving
            the experience for ESL users and those with disabilities.
          </p>
          <p>
            Reduced user friction in the mobile app using{" "}
            <Ecto>flow testing</Ecto> and <Ecto>support ticket analysis</Ecto>,
            reducing the number of clicks in our main flow by ~20%.
          </p>
          <p>
            Expanded mobile QA coverage with <Ecto>AI tools</Ecto> like{" "}
            <Ecto>Claude Code</Ecto> to generate and validate unit and
            integration tests with Flutter Test and Patrol, expanding QA
            coverage and cutting manual testing overhead.
          </p>
        </ExperienceCard>
        {/* ATS Automation Card */}
        <ExperienceCard
          title="UI/UX Developer @ ATS Automation"
          date="Mar 2021 – Apr 2024"
          companyLink="https://atsindustrialautomation.com/illuminate-manufacturing-intelligence/"
        >
          <p>
            Owned the frontend in the redevelopment of a legacy factory
            analytics app. Architected the build on a modern <Ecto>React</Ecto>{" "}
            and <Ecto>Typescript</Ecto> stack using installable{" "}
            <Ecto>micro frontends</Ecto>, reducing install size and improving
            long-term maintainability.
          </p>
          <p>
            Introduced <Ecto>UX research</Ecto> methods to the team, using{" "}
            <Ecto>user interviews</Ecto> and <Ecto>usability testing</Ecto> to
            inform design decisions that had been previously based on
            assumptions.
          </p>
          <p>
            Designed a modern UI in <Ecto>Figma</Ecto> using research feedback,
            emphasizing data visualization and at-a-glance clarity for
            customers.
          </p>
          <p>
            Led frontend development by providing technical guidance, pair
            programming, documentation and code reviews. This reduced blockers
            and led the team to surpass their support ticket goals.
          </p>
          <p>
            Mentored junior developers and co-ops on best practices and team
            culture, resulting in more confidence, more autonomy and stronger
            collaboration.
          </p>
        </ExperienceCard>
        {/* Xpresstec Card */}
        <ExperienceCard
          title="Full Stack Developer @ Xpresstec"
          date="May 2017 – Jan 2021"
          companyLink="https://www.xpresstec.com/"
        >
          <p>
            Delivered web, desktop and mobile solutions across multiple
            industries, working across the stack to meet diverse client needs.
          </p>
          <p>
            Supported the growth of LunchBoxOrders, ranked 28th fastest-growing
            company in Canada in 2020, by developing and maintaining their{" "}
            <Ecto>.Net</Ecto> application as it scaled to serve schools across
            the region.
          </p>
        </ExperienceCard>
      </div>
    </SectionContainer>
  );
};

export default Experience;
