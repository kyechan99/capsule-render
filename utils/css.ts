type CSSValue = string | number;

type CSSProperties = {
  [key: string]: CSSValue | CSSProperties;
};

function kebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function formatCSSValue(key: string, value: CSSValue): string {
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
}

function stringifyProperties(
  properties: CSSProperties,
  indent: string = "  ",
): string {
  let css = "";

  for (const [key, value] of Object.entries(properties)) {
    const propertyName = kebabCase(key);

    if (typeof value === "object") {
      if (key.startsWith("@")) {
        css += `${key} {\n${stringifyProperties(value as CSSProperties, indent + "  ")}${indent}}\n`;
      } else if (key === "from" || key === "to" || /^\d+%$/.test(key)) {
        css += `${indent}${key} {\n${stringifyProperties(value as CSSProperties, indent + "  ")}${indent}}\n`;
      } else {
        css += stringifyProperties(value as CSSProperties, indent);
      }
    } else {
      const formattedValue = formatCSSValue(propertyName, value);
      css += `${indent}${propertyName}: ${formattedValue};\n`;
    }
  }

  return css;
}

export function css(selector: string, properties: CSSProperties): string {
  return `${selector} {\n${stringifyProperties(properties)}}\n`;
}
