export function formatTitleLine(title, totalLength = 60) {
  const core = ` ${title.toUpperCase()} `;
  const paddingLength = totalLength - core.length;
  const side = "=".repeat(Math.floor(paddingLength / 2));
  const extra = paddingLength % 2 === 0 ? "" : "=";

  return `${side}${core}${side}${extra}`;
}

export function formatEndingLine(totalLength = 60) {
  return "=".repeat(totalLength);
}
