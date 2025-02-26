import NormalModel from "./normalModel";

class Speech extends NormalModel {
  path() {
    const width = this.width;
    const height = this.height;
    const tailSize = Math.min(height * 0.2, 40);
    const tailPosition = width - 100;

    return `
      M 30 0
      H ${width - 30}
      C ${width - 15} 0, ${width} 15, ${width} 30
      V ${height - tailSize - 30}
      C ${width} ${height - tailSize - 15}, ${width - 15} ${height - tailSize}, ${width - 30} ${height - tailSize}
      H ${tailPosition + tailSize}
      L ${tailPosition} ${height}
      L ${tailPosition - tailSize} ${height - tailSize}
      H 30
      C 15 ${height - tailSize}, 0 ${height - tailSize - 15}, 0 ${height - tailSize - 30}
      V 30
      C 0 15, 15 0, 30 0
      Z
    `
      .replace(/\s+/g, " ")
      .trim();
  }

  content() {
    return `<path fill="${this.color}" ${this.reversal} fill-opacity="1" d="${this.path()}"></path>`;
  }
}

export default Speech;
