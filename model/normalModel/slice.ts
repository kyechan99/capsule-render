import { Model } from "../model";

class Slice extends Model {
  path() {
    return `m 0 0 l 854 ${this.height} l 0 -${this.height} l -854 0 z`;
  }

  render() {
    return `<path fill="${this.color}" ${this.reversal} fill-opacity="1" d="${this.path()}"></path>`;
  }
}

export default Slice;
