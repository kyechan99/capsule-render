export const isGradientColor = (color: any) => {
  if (typeof color === "object") return true;
  return false;
};

export const regexData = (data: any) => {
  return String(data)
    .toLowerCase()
    .replace(/[^a-z]/g, "");
};

export const checkCustomColor = (color: string) => {
  const ret: { [x: string]: string } = {};
  if (color.split(",").length > 1) {
    let temp = color;
    temp.split(",").forEach(e => {
      const [key, value] = e.split(":");
      ret[key] = value;
    });
  } else {
    ret["color"] = color;
  }
  return ret;
};
