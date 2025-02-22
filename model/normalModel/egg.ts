import NormalModel from "./normalModel";

class Egg extends NormalModel {
  path() {
    return `M 427 ${this.height} Q 327 ${this.height / 3} 213.5 ${this.height} Q 100 ${
      this.height / 3
    } 0 ${this.height} Q 50 0 427 0 Q 750 0 ${this.width} ${this.height} Q 727 ${
      this.height / 3
    } 639.5 ${this.height} Q 527 ${this.height / 3} 427 ${this.height}`;
  }

  content() {
    return `<path fill="${this.color}" ${this.reversal} fill-opacity="1"
          d="${this.path()}"></path>`;
  }
}

export default Egg;
