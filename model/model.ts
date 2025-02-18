import { checkReversal } from "../src/util";
import { html } from "../utils/html";
import { css } from "../utils/css";
import { isGradientColor } from "../src/verification";

export abstract class Model {
  reversal: string;
  color: string;
  height: number;

  constructor(reversal: boolean, color: string, height: number) {
    this.reversal = checkReversal(reversal);
    this.color = color;
    this.height = height;
  }

  getStyle(
    section: "footer" | "header",
    fontSize: string = "70",
    descSize: number = 20,
    rotate: number = 0,
  ) {
    return html`${css(".text", {
      fontSize: `${fontSize}px`,
      fontWeight: 700,
      fontFamily:
        "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
    })}`
      .append(
        css(".desc", {
          fontSize: `${descSize}px`,
          fontWeight: 500,
          fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
        }),
      )
      .appendIf(
        rotate !== 0,
        css(".text, .desc", {
          transformOrigin: "center center",
          transform: `rotate(${rotate}deg)`,
        }),
      )
      .appendIf(
        section === "footer",
        css("path", {
          transform: "rotate(180deg)",
          transformOrigin: "50% 50%",
        }),
      );
  }

  gradientDef(color: string) {
    if (!isGradientColor(color)) return "";

    const offset = Object.entries(color)
      .map(([key, value]) => `<stop offset="${key}%" stop-color="#${value}"/>`)
      .join("");

    return `<defs>
              <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                ${offset}
              </linearGradient>
            </defs>`;
  }

  textBg(
    bgColor: string,
    posX: number,
    posY: number,
    fontHeight: number,
    text: string,
  ) {
    // 40 : padding value
    const height = Number(fontHeight) + 40;
    // 0.5 : temp sizing.
    const width = text.length * Number(fontHeight) * 0.5 + 40;
    return `
        <rect fill="#${bgColor}" height="${height}" width ="${width}" x="${posX}%" y="${posY}%" transform="translate(-${
          width / 2
        }, -${height / 2})"  rx ="25" ry ="25" />
        `;
  }

  animation(animation: string, fontAlign: number, fontAlignY: number) {
    if (!animation) return html``;

    return html``
      .appendIf(animation === "fadeIn", [
        css(".text, .desc", {
          animation: "fadeIn 1.2s ease-in-out forwards",
        }),
        css("@keyframes fadeIn", {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        }),
      ])
      .appendIf(animation === "scaleIn", [
        css(".text, .desc", {
          animation: "scaleIn .8s ease-in-out forwards",
        }),
        css("@keyframes scaleIn", {
          from: {
            transform: `translate(${fontAlign}%, ${fontAlignY}%) scale(0)`,
          },
          to: {
            transform: `translate(0%, 0%) scale(1)`,
          },
        }),
      ])
      .appendIf(animation === "blinking", [
        css(".text, .desc", {
          animation: "blinking 1.6s step-start 0s infinite",
        }),
        css("@keyframes blinking", {
          "50%": {
            opacity: 0,
          },
        }),
      ])
      .appendIf(animation === "blink", [
        css(".text, .desc", {
          animation: "blink .6s step-start 0s backwards",
        }),
        css("@keyframes blink", {
          "10%": {
            opacity: 1,
          },
          "25%": {
            opacity: 0,
          },
          "40%": {
            opacity: 1,
          },
          "55%": {
            opacity: 0,
          },
          "70%": {
            opacity: 0,
          },
          "80%": {
            opacity: 1,
          },
        }),
      ])
      .appendIf(animation === "twinkling", [
        css(".text, .desc", {
          animation: "twinkling 4s ease-in-out infinite",
        }),
        css("@keyframes twinkling", {
          "40%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
          "60%": {
            opacity: 1,
          },
          "70%": {
            opacity: 0.5,
          },
          "80%": {
            opacity: 1,
          },
        }),
      ]);
  }

  /**
   * draw <path/>
   */
  abstract path(): string | string[];

  /**
   * draw render
   */
  abstract render(): string;
}
