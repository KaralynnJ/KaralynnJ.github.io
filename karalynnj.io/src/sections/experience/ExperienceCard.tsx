import AnchorLink from "../../components/AnchorLink";
import MaterialIcon from "../../components/MaterialIcon";

interface ExperienceCardProps {
  title: string;
  date: string;
  companyLink: string;
  children?: React.ReactNode;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  date,
  companyLink,
  children,
}: ExperienceCardProps) => {
  return (
    <div className="flex flex-row gap-6 font-cabin text-lg text-lilac py-8 bg-onyx">
      <div className="font-cabin text-sm ">
        <p className="whitespace-nowrap leading-[28px]">{date}</p>
      </div>
      <div className="flex flex-col gap-4">
        <AnchorLink className="flex items-center gap-1" href={companyLink}>
          <div className="flex flex-row gap-2 items-center  ">
            <h6 className="font-grotesk text-lg font-medium">{title}</h6>
            <MaterialIcon name="arrow_outward" fill={1} opticalSize={20} />
          </div>
        </AnchorLink>
        <div className="font-cabin text-base text-lilac flex flex-col gap-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
