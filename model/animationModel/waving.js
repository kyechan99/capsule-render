import { checkReversal } from "../../src/util";

const render = (reversal, color, height) => {
  reversal = checkReversal(reversal);
  const width = 854;

  return `
    <g transform="translate(${width / 2}, ${height / 2}) scale(1, 1) translate(-427, -${height / 2})">
      <path d="" fill="${color}" opacity="0.4" ${reversal}>
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
};

export default render;
