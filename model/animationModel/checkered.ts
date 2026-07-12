import AnimationModel from "./animationModel";

class Checkered extends AnimationModel {
  override path() {
    return "";
  }

  private cell(
    x: number,
    y: number,
    size: number,
    fill: string,
    opacity: number,
    delay: number,
  ) {
    return `
      <rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${fill}" opacity="${opacity}">
        <animate
          attributeName="opacity"
          values="${opacity * 0.7};${opacity};${opacity * 1.15};${opacity};${opacity * 0.7}"
          keyTimes="0;0.2;0.5;0.8;1"
          keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
          calcMode="spline"
          dur="16s"
          begin="${delay}s"
          repeatCount="indefinite"
        />
      </rect>`;
  }

  override content() {
    const tile = Math.max(28, Math.round(this.height * 0.2));
    const cell = tile / 2;
    const backgroundFill = this.gradient ? "url(#checkeredLinear)" : String(this.color);
    const cells = [
      this.cell(0, 0, cell, "#ffffff", 0.06, 0),
      this.cell(cell, 0, cell, "#000000", 0.05, 2),
      this.cell(0, cell, cell, "#000000", 0.05, 4),
      this.cell(cell, cell, cell, "#ffffff", 0.06, 6),
    ];
    const gradientStops = this.gradient
      ? Object.entries(this.gradient)
          .sort(([a], [b]) => Number(a) - Number(b))
          .map(([key, value]) => `<stop offset="${key}%" stop-color="#${value}"/>`)
          .join("")
      : "";

    return `
      <defs>
        ${
          this.gradient
            ? `<linearGradient id="checkeredLinear" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                ${gradientStops}
              </linearGradient>`
            : ""
        }
        <pattern
          id="checkeredPattern"
          width="${tile}"
          height="${tile}"
          patternUnits="userSpaceOnUse"
        >
          <rect width="${tile}" height="${tile}" fill="none" shape-rendering="crispEdges" />
          ${cells.join("")}
        </pattern>
      </defs>
      <g ${this.reversal}>
        <rect width="100%" height="100%" fill="${backgroundFill}" />
        <rect width="100%" height="100%" fill="url(#checkeredPattern)" />
      </g>`;
  }
}

export default Checkered;
