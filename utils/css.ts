type CSSValue = string | number;

type CSSProperties = {
  [key: string]: CSSValue | CSSProperties;
};

const kebabCase = (str: string) => {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};

const formatCSSValue = (key: string, value: CSSValue) => {
  const autoPixelProperties = new Set([
    "flexGrow",
    "flexShrink",
    "fontWeight",
    "lineHeight",
    "opacity",
    "zIndex",
    "flex",
    "order",
    "gridColumn",
    "gridRow",
  ]);

  if (typeof value === "number") {
    return autoPixelProperties.has(key) ? value.toString() : `${value}`;
  }
  return value;
};

const stringifyProperties = (
  properties: CSSProperties,
  indent: string = "  ",
) => {
  let css = "";

  for (const [key, value] of Object.entries(properties)) {
    const propertyName = kebabCase(key);

    if (typeof value === "object") {
      if (key.startsWith("@")) {
        css += `${key} { ${stringifyProperties(value as CSSProperties, indent + "  ")}${indent} } `;
      } else if (key === "from" || key === "to" || /^\d+%$/.test(key)) {
        css += `${indent}${key} { ${stringifyProperties(value as CSSProperties, indent + "  ")}${indent}} `;
      } else {
        css += stringifyProperties(value as CSSProperties, indent);
      }
    } else {
      const formattedValue = formatCSSValue(propertyName, value);
      css += `${indent}${propertyName}: ${formattedValue}; `;
    }
  }

  return css;
};

export const css = (selector: string, properties: CSSProperties) => {
  return `${selector} { ${stringifyProperties(properties)} } `;
};
