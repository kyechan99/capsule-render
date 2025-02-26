import { Model } from "../model";

abstract class NormalModel extends Model {
  render() {
    return `
      <svg
        width="${this.width}"
        height="${this.height}"
        viewBox="0 0 ${this.width} ${this.height}"
        xmlns="http://www.w3.org/2000/svg"
      >
        ${this._drawStyle()}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 ${this.width} ${this.height}"
        >
          ${this._drawGradient()}
          ${this.content()}
        </svg>
        ${this._drawText()}
        ${this._drawDesc()}
      </svg>
    `;
  }
}

export default NormalModel;
