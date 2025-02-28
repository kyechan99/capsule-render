import AnimationModel from "./animationModel";

class Blur extends AnimationModel {
  path() {
    const circles = [
      {
        baseRadius: this.height * 0.25,
        moveRangeX: 0,
        moveRangeY: 0,
        duration: 10,
        opacity: 0.2,
        delay: 0,
      },
      {
        baseRadius: this.height * 0.3,
        moveRangeX: 5,
        moveRangeY: 0,
        duration: 30,
        opacity: 0.3,
        delay: 1,
      },
      {
        baseRadius: this.height * 0.28,
        moveRangeX: -10,
        moveRangeY: 0,
        duration: 15,
        opacity: 0.15,
        delay: 2,
      },
    ];

    return circles
      .map(
        ({ baseRadius, moveRangeX, moveRangeY, duration, opacity, delay }) => {
          return `
          <circle 
            cx="${50 - moveRangeX}%" 
            cy="${50 - moveRangeY}%" 
            r="${baseRadius}" 
            fill="${this.color}"
            opacity="${opacity}"
            filter="url(#blurFilter)"
            ${this.reversal}
          >
            <animate
              attributeName="cx"
              values="${50 - moveRangeX}%;${50}%;${50 + moveRangeX}%;${50}%;${50 - moveRangeX}%"
              dur="${duration}s"
              begin="${delay}s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            />
            <animate
              attributeName="cy"
              values="${50 - moveRangeY}%;${50}%;${50 + moveRangeY}%;${50}%;${50 - moveRangeY}%"
              dur="${duration * 1.2}s"
              begin="${delay}s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          </circle>
        `;
        },
      )
      .join("");
  }

  override content() {
    return `
      <defs>
        <filter id="blurFilter">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>
      ${this.path()}
    `;
  }
}

export default Blur;
