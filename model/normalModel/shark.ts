import NormalModel from "./normalModel";

class Shark extends NormalModel {
  path() {
    const c1 = this.height - 95; // 27 is edge point
    const c2 = this.height + 27; // 27 is edge point
    return `M 0 ${c1} C 61 ${c2} 61 ${c2} 122 ${c1} C 183 ${c2} 183 ${c2} 244 ${c1} C 305 ${c2} 305 ${c2} 366 ${c1} C 427 ${c2} 427 ${c2} 488 ${c1} C 549 ${c2} 549 ${c2} 610 ${c1} C 671 ${c2} 671 ${c2} 732 ${c1} C 793 ${c2} 793 ${c2} ${this.width} ${c1}  L ${this.width} 0 L 0 0 L 0 305 `;
  }

  content() {
    return `<path fill="${this.color}" ${this.reversal} fill-opacity="1" d="${this.path()}"></path>`;
  }
}

export default Shark;
