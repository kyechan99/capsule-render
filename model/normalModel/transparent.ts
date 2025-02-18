import { Model } from "../model";

class Transparent extends Model {
  path() {
    return "";
  }
  render() {
    return this.gradientDef(this.color);
  }
}
export default Transparent;
