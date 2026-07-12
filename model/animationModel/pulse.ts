import AnimationModel from "./animationModel";

class Pulse extends AnimationModel {
  override path() {
    return "";
  }

  override content() {
    const size = Math.max(18, this.height * 0.16);
    const glow = Math.max(30, this.height * 0.28);
    const centerX = this.width / 2;
    const centerY = this.height / 2;

    return `
      <g ${this.reversal}>
        <g transform="translate(${centerX} ${centerY})">
          <circle cx="0" cy="0" r="${glow}" fill="${this.color}" opacity="0.08">
            <animate attributeName="r" values="${glow * 0.85};${glow * 1.1};${glow * 0.85}" dur="4.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.05;0.12;0.05" dur="4.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="${size}" fill="${this.color}" opacity="0.28">
            <animateTransform attributeName="transform" type="scale" values="1;1.2;1" dur="4.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="${size * 0.4}" fill="#ffffff" opacity="0.45">
            <animate attributeName="opacity" values="0.28;0.55;0.28" dur="4.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </g>`;
  }
}

export default Pulse;
