import NormalModel from "./normalModel";

class Rect extends NormalModel {
  path() {
    return `m 0 0 l 0 ${this.height} l ${this.width} 0 l 0 -${this.height} z`;
  }

  content() {
    return `<path fill="${this.color}" ${this.reversal} fill-opacity="1" d="${this.path()}"></path>`;
  }
}

export default Rect;
