import NormalModel from "./normalModel";

class Transparent extends NormalModel {
  path() {
    return "";
  }
  content() {
    return this.gradientDef();
  }
}
export default Transparent;
