interface MaterialIconProps {
  name: string;
  fill?: number;
  weight?: number;
  opticalSize?: number;
}

const MaterialIcon = ({
  name,
  fill = 0,
  weight = 400,
  opticalSize = 24,
}: MaterialIconProps) => {
  return (
    <span
      className="material-symbols-outlined w-"
      style={{
        fontVariationSettings: `"FILL" ${fill}, "wght" ${weight}, "opsz" ${opticalSize}`,
        fontSize: opticalSize,
      }}
    >
      {name}
    </span>
  );
};

export default MaterialIcon;
