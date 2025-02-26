import NormalModel from "./normalModel";

class Soft extends NormalModel {
  path() {
    return ``;
  }

  content() {
    return `<rect xmlns="http://www.w3.org/2000/svg" ${this.reversal} rx="4.5" height="${this.height}" width="100%" fill="${this.color}" stroke-opacity="1"/>`;
  }
}

export default Soft;
