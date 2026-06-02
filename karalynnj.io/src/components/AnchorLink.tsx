const AnchorLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  var classNames =
    "text-ghost hover:text-ecto transition duration-300 ease-in-out";
  if (className) {
    classNames += " " + className;
  }

  return (
    <a
      href={href}
      className={classNames}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default AnchorLink;
