import { Model } from "../model";

class Rounded extends Model {
  path() {
    const q1 = this.height - 61; // 61 is q point
    return `M 61 0 L 793 0 Q 854 0 854 61 L 854 ${q1} Q 854 ${this.height} 793 ${this.height} L 61 ${this.height} Q 0 ${this.height} 0 ${q1} L 0 61 Q 0 0 61 0 z`;
  }

  render() {
    return `<path fill="${this.color}" ${this.reversal} fill-opacity="1" d="${this.path()}"></path>`;
  }
}

export default Rounded;
