import NormalModel from "./normalModel";

class Rounded extends NormalModel {
  path() {
    const q1 = this.height - 61; // 61 is q point
    return `M 61 0 L 793 0 Q ${this.width} 0 ${this.width} 61 L ${this.width} ${q1} Q ${this.width} ${this.height} 793 ${this.height} L 61 ${this.height} Q 0 ${this.height} 0 ${q1} L 0 61 Q 0 0 61 0 z`;
  }

  content() {
    return `<path fill="${this.color}" ${this.reversal} fill-opacity="1" d="${this.path()}"></path>`;
  }
}

export default Rounded;
