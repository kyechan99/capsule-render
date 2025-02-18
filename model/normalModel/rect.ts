import { Model } from "../model";

class Rect extends Model {
  path() {
    return `m 0 0 l 0 ${this.height} l 854 0 l 0 -${this.height} z`;
  }

  render() {
    return `<path fill="${this.color}" ${this.reversal} fill-opacity="1" d="${this.path()}"></path>`;
  }
}

export default Rect;
