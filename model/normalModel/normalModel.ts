import { html } from "../../utils/html";
import { Model } from "../model";

abstract class NormalModel extends Model {
  render() {
    return `
      <svg
        width="854"
        height="${this.height}"
        viewBox="0 0 854 ${this.height}"
        xmlns="http://www.w3.org/2000/svg"
      >
        ${this.styleScript()}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 854 ${this.height}"
        >
          ${this.gradientDef()}
          ${this.content()}
        </svg>
        ${this.textScript()} ${this.descScript()}
      </svg>
    `;
  }
}

export default NormalModel;
