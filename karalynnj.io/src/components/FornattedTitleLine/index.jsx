const FormattedTitleLine = ({ title, totalLength = 60 }) => {
  const core = ` ${title.toUpperCase()} `;
  const paddingLength = totalLength - core.length;
  const side = "=".repeat(Math.floor(paddingLength / 2));
  const extra = paddingLength % 2 === 0 ? "" : "=";

  return (
    <>
      <span className="highlight">{side}</span>
      {core}
      <span className="highlight">{side}</span>
      {extra}
    </>
  );
};

export default FormattedTitleLine;
