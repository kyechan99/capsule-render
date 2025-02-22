import NormalModel from "./normalModel";

class Slice extends NormalModel {
  path() {
    return `m 0 0 l ${this.width} ${this.height} l 0 -${this.height} l -${this.width} 0 z`;
  }

  content() {
    return `<path fill="${this.color}" ${this.reversal} fill-opacity="1" d="${this.path()}"></path>`;
  }
}

export default Slice;
