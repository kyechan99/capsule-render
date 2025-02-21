import { html } from "../../utils/html";
import { Model } from "../model";

abstract class AnimationModel extends Model {
  render() {
    return `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="z-index:1;position:relative"
        width="854"
        height="${this.height}"
        viewBox="0 0 854 ${this.height}"
      >
        ${this.styleScript()} ${this.gradientDef()} ${this.content()} ${this.textScript()}
        ${this.descScript()}
      </svg>
    `;
  }
}

export default AnimationModel;
