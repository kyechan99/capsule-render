import AnimationModel from "./animationModel";

class Waving extends AnimationModel {
  override path() {
    return "";
  }

  override content() {
    const { width, height, color, reversal } = this;

    return `
      <g transform="translate(${this.width / 2}, ${this.height / 2}) scale(1, 1) translate(-427, -${this.height / 2})">
        <path d="${this.path()}" fill="${this.color}" opacity="0.4" ${reversal}>
          <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="0s"
              values="M0 0L 0 ${height - 80}Q 213.5 ${height - 40} 427 ${height - 70}T ${width} ${
                height - 45
              }L ${width} 0 Z;M0 0L 0 ${height - 55}Q 213.5 ${height - 40} 427 ${height - 60}T ${width} ${
                height - 70
              }L ${width} 0 Z;M0 0L 0 ${height - 35}Q 213.5 ${height - 65} 427 ${height - 35}T ${width} ${
                height - 70
              }L ${width} 0 Z;M0 0L 0 ${height - 80}Q 213.5 ${height - 40} 427 ${height - 70}T ${width} ${
                height - 45
              }L ${width} 0 Z">
          </animate>
        </path>
        <path d="" fill="${color}" opacity="0.4" ${reversal}>
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            keyTimes="0;0.333;0.667;1"
            calcmod="spline"
            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
            begin="-10s"
            values="M0 0L 0 ${height - 65}Q 213.5 ${height - 20} 427 ${height - 50}T ${width} ${
              height - 40
            }L ${width} 0 Z;M0 0L 0 ${height - 50}Q 213.5 ${height - 80} 427 ${height - 80}T ${width} ${
              height - 60
            }L ${width} 0 Z;M0 0L 0 ${height - 55}Q 213.5 ${height - 75} 427 ${height - 50}T ${width} ${
              height - 35
            }L ${width} 0 Z;M0 0L 0 ${height - 65}Q 213.5 ${height - 20} 427 ${height - 50}T ${width} ${
              height - 40
            }L ${width} 0 Z">
          </animate>
        </path>
      </g>`;
  }
}

export default Waving;
