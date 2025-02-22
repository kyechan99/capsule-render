export const parseToNumberArr = (
  value: string | number | undefined,
): number[] => {
  if (value === undefined || value === "") return [50];
  if (typeof value === "number") return [value];

  const numbers = value
    .split(",")
    .filter(item => !isNaN(Number(item)))
    .map(Number);

  return numbers.length ? numbers : [50];
};
