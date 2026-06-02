import AnchorLink from "../../components/AnchorLink";
import MaterialIcon from "../../components/MaterialIcon";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  spanClass: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  link,
  spanClass,
}: ProjectCardProps) => {
  const anchorClass =
    spanClass +
    "bg-shadow p-6 rounded-lg hover:scale-102 transition-transform duration-200 ease-in-out"; // Default value for spanClass

  return (
    <AnchorLink className={anchorClass} href={link}>
      <div className=" text-base flex flex-col gap-4">
        <div className="flex items-center gap-1">
          <h6 className="font-grotesk text-lg font-medium">{title}</h6>{" "}
          <MaterialIcon name="arrow_outward" fill={1} opticalSize={20} />
        </div>
        <p className="text-lilac">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="border border-ecto-semitransparent text-ecto bg-ecto-semitransparent py-1 px-4 rounded-lg w-fit text-sm tracking-wide"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>{" "}
    </AnchorLink>
  );
};

export default ProjectCard;
