const FormattedEndLine = ({ totalLength = 60 }) => {
  const core = "=".repeat(totalLength);

  return (
    <>
      <span className="highlight">{core}</span>
    </>
  );
};

export default FormattedEndLine;
