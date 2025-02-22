import { html } from "../utils/html";
import { css } from "../utils/css";
import { ColorMap } from "../types/color";
import { _, append, appendIf } from "../utils/_";

export const getStyle = (
  section: "footer" | "header",
  fontSize: number = 70,
  descSize: number = 20,
  rotate: number = 0,
) => {
  return _(
    html``,
    append(
      css(".text", {
        fontSize: `${fontSize}px`,
        fontWeight: 700,
        fontFamily:
          "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
      }),
    ),
    append(
      css(".desc", {
        fontSize: `${descSize}px`,
        fontWeight: 500,
        fontFamily:
          "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
      }),
    ),
    appendIf(
      rotate !== 0,
      css(".text, .desc", {
        transformOrigin: "center center",
        transform: `rotate(${rotate}deg)`,
      }),
    ),
    appendIf(
      section === "footer",
      css("path", {
        transform: "rotate(180deg)",
        transformOrigin: "50% 50%",
      }),
    ),
  );
};

export const getAnimation = (animation: string) => {
  if (!animation) return html``;

  return _(
    html``,
    appendIf(animation === "fadeIn", [
      css(".text, .desc", {
        animation: "fadeIn 1.2s ease-in-out forwards",
      }),
      css("@keyframes fadeIn", {
        from: { opacity: 0 },
        to: { opacity: 1 },
      }),
    ]),
    appendIf(animation === "scaleIn", [
      css(".text, .desc", {
        animation: "scaleIn .8s ease-in-out forwards",
        transformOrigin: "center",
      }),
      css("@keyframes scaleIn", {
        from: { transform: `scale(0)` },
        to: { transform: `scale(1)` },
      }),
    ]),
    appendIf(animation === "blinking", [
      css(".text, .desc", {
        animation: "blinking 1.6s step-start 0s infinite",
      }),
      css("@keyframes blinking", {
        "20%": { opacity: 1 },
        "50%": { opacity: 0 },
        "80%": { opacity: 1 },
      }),
    ]),
    appendIf(animation === "blink", [
      css(".text, .desc", {
        animation: "blink .6s step-start 0s backwards",
      }),
      css("@keyframes blink", {
        "10%": { opacity: 1 },
        "25%": { opacity: 0 },
        "40%": { opacity: 1 },
        "55%": { opacity: 0 },
        "70%": { opacity: 0 },
        "80%": { opacity: 1 },
      }),
    ]),
    appendIf(animation === "twinkling", [
      css(".text, .desc", {
        animation: "twinkling 4s ease-in-out infinite",
      }),
      css("@keyframes twinkling", {
        "40%": { opacity: 1 },
        "50%": { opacity: 0.5 },
        "60%": { opacity: 1 },
        "70%": { opacity: 0.5 },
        "80%": { opacity: 1 },
      }),
    ]),
  );
};

export const getTextBg = (
  bgColor: string | ColorMap,
  posX: number[],
  posY: number[],
  fontHeight: string | number,
  text: string,
  textBg,
) => {
  if (!textBg) return "";

  // 40 : padding value
  const height = Number(fontHeight) + 40;
  // 0.5 : temp sizing.
  const width = text.length * Number(fontHeight) * 0.5 + 40;

  return `
        <rect fill="#${bgColor}" height="${height}" width ="${width}" x="${posX[0]}%" y="${posY[0]}%" transform="translate(-${
          width / 2
        }, -${height / 2})"  rx ="25" ry ="25" />
        `;
};

export const getText = (
  text?: string,
  fontColor: string = "000000",
  fontAlign: number[] = [50],
  fontAlignY: number[] = [50],
  stroke: string = "B897FF",
  strokeWidth: number = 0,
) => {
  if (!text) return "";

  const lines = text.split("-nl-");
  const alignX = Array.from(
    { length: lines.length },
    (_, i) => fontAlign[i] ?? 50,
  );
  const alignY = Array.from(
    { length: lines.length },
    (_, i) => fontAlignY[i] ?? undefined,
  );

  return lines
    .map((line, i) => {
      alignY[i] =
        alignY[i] !== undefined ? alignY[i] : alignY[i - 1] + 90 / lines.length;
      // debate : adjustable text-anchor|pos-y. not only pos-x
      return `<text text-anchor="middle" alignment-baseline="middle" x="${alignX[i]}%" y="${alignY[i]}%" class="text" style="fill:#${fontColor};" stroke="#${stroke}" stroke-width="${strokeWidth}" >${line}</text>`;
    })
    .join("");
};

export const getDesc = (
  desc?: string,
  descColor: string = "000000",
  descAlign: string | number = "50",
  descAlignY: string | number = "60",
) => {
  if (desc === "" || desc === undefined) return "";

  // debate : adjustable text-anchor|pos-y. not only pos-x
  return `<text text-anchor="middle" alignment-baseline="middle" x="${descAlign}%" y="${descAlignY}%" class="desc" style="fill:#${descColor};">${desc}</text>`;
};
