import NormalModel from "./normalModel";

class Transparent extends NormalModel {
  path() {
    return "";
  }
  content() {
    return this._drawGradient();
  }
}
export default Transparent;
