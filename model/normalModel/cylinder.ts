import NormalModel from "./normalModel";

class Cylinder extends NormalModel {
  override path() {
    const { height } = this;
    const per = height / 2;
    return `M 61 0 L ${this.width - per} 0 A 50 50 0 1 1 ${this.width - per} ${height} L ${per} ${height} A 50 50 0 1 1 ${per} 0 `;
  }

  override content() {
    return `<path fill="${this.color}" ${this.reversal} fill-opacity="1" d="${this.path()}"></path>`;
  }
}

export default Cylinder;
