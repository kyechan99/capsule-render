import { Model } from "../model";

abstract class AnimationModel extends Model {
  render() {
    return `
      <svg
        width="${this.width}"
        height="${this.height}"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="z-index:1;position:relative"
        viewBox="0 0 ${this.width} ${this.height}"
      >
        ${this._drawStyle()}
        ${this._drawGradient()}
        ${this.content()}
        ${this._drawText()}
        ${this._drawDesc()}
      </svg>
    `;
  }
}

export default AnimationModel;
