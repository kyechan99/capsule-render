import NormalModel from "./normalModel";

class Wave extends NormalModel {
  path() {
    this.height -= 120; // 120 is benchmark pos-y
    const point = [
      70 + this.height,
      -55 + this.height,
      55 + this.height,
      60 + this.height,
      50 + this.height,
      75 + this.height,
    ];

    return `m 0 0 T 0 ${point[0]} Q 110 ${point[1]} 220 ${point[2]} T 440 ${point[3]} T 660 ${point[4]} T 880 ${point[5]} T 880 0 z`;
  }

  content() {
    return `<path fill="${this.color}" ${this.reversal} fill-opacity="1" d="${this.path()}"></path>`;
  }
}

export default Wave;
