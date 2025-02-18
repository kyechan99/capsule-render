import Models from "../model";
import {
  generateAutoColor,
  generateAutoGradient,
  generateAutoByTime,
  generateThemeColor,
  checkThemeColor,
  checkColor,
  checkText,
  checkDesc,
} from "../src/util";
import { regexData, checkCustomColor } from "../src/verification";
import { ANIMATION_MODELS } from "../constants/model";
import { ColorMap } from "../types/color";

class SVGGenerator {
  private params: any;
  private color: string | ColorMap = "B897FF";
  private fontColor?: string;
  private descColor?: string;
  private textBgColor?: string;
  private stroke?: string;
  private strokeWidth?: string;
  private Model?: any;

  constructor(query: any) {
    this.initializeParams(query);
    this.initializeColors();
  }

  private initializeParams(query: any) {
    this.params = {
      type: query.type || "wave",
      section: query.section || "header",
      height: query.height || 120,
      text: query.text,
      desc: query.desc,
      textBg: query.textBg || "false",
      fontSize: query.fontSize || 70,
      fontAlign: query.fontAlign || 0,
      fontAlignY: query.fontAlignY || 0,
      descSize: query.descSize || 20,
      descAlign: query.descAlign || 50,
      descAlignY: query.descAlignY || 60,
      animation: query.animation,
      reversal: query.reversal || "false",
      rotate: query.rotate || 0,
      customColorList: query.customColorList || "",
      theme: query.theme || "none",
    };

    this.color = query.color || "B897FF";
    this.fontColor = query.fontColor;
    this.stroke = query.stroke || (query.strokeWidth ? "B897FF" : "none");
    this.strokeWidth =
      query.strokeWidth || (query.stroke === "none" ? "0" : "1");
  }

  private initializeColors() {
    if (this.params.theme !== "none" && checkThemeColor(this.params.theme)) {
      [this.color, this.fontColor, this.textBgColor] = generateThemeColor(
        this.params.theme,
      );
      this.descColor = this.textBgColor;
    } else {
      this.processColors();
    }
  }

  private processColors() {
    if (this.color === "auto") {
      [this.color, this.fontColor, this.textBgColor] = generateAutoColor(
        this.fontColor,
        this.params.customColorList,
      );
    } else if (this.color === "gradient") {
      [this.color, this.fontColor, this.textBgColor] = generateAutoGradient(
        this.fontColor,
        this.params.customColorList,
      );
    } else if (this.color === "timeAuto" || this.color === "timeGradient") {
      [this.color, this.fontColor, this.textBgColor] = generateAutoByTime(
        this.color,
        this.fontColor,
      );
    } else {
      this.color = checkCustomColor(this.color);
    }
    this.descColor = this.fontColor;
  }

  private generateStyleScript() {
    return `<style>
      ${this.Model.getStyle(this.params.section, this.params.fontSize, this.params.descSize, this.params.rotate)}
      ${this.Model.animation(this.params.animation, this.params.fontAlign, this.params.fontAlignY)}
    </style>`;
  }

  private generateTextScript() {
    const textBgScript =
      this.params.textBg === "true"
        ? this.Model.textBg(
            this.fontColor,
            this.params.fontAlign || 50,
            this.params.fontAlignY || 50,
            this.params.fontSize,
            this.params.text,
          )
        : "";

    const textContent =
      this.params.textBg === "true"
        ? checkText(
            this.params.text,
            this.textBgColor,
            this.params.fontAlign,
            this.params.fontAlignY,
            this.stroke,
            this.strokeWidth,
          )
        : checkText(
            this.params.text,
            this.fontColor,
            this.params.fontAlign,
            this.params.fontAlignY,
            this.stroke,
            this.strokeWidth,
          );

    return `${textBgScript} ${textContent}`;
  }

  public generate() {
    if (!Models[regexData(this.params.type)]) {
      throw new Error("The value of 'type=' is invalid.");
    }

    this.Model = new Models[regexData(this.params.type)](
      this.params.reversal,
      checkColor(this.color),
      this.params.height,
    );

    const styleScript = this.generateStyleScript();
    const svgContentScript = this.Model.render();
    const textScript = this.generateTextScript();
    const descScript = checkDesc(
      this.params.desc,
      this.descColor,
      this.params.descAlign,
      this.params.descAlignY,
    );

    if (ANIMATION_MODELS.includes(this.params.type)) {
      return this.generateAnimatedSVG(
        styleScript,
        svgContentScript,
        textScript,
        descScript,
      );
    }
    return this.generateStaticSVG(
      styleScript,
      svgContentScript,
      textScript,
      descScript,
    );
  }

  private generateAnimatedSVG(
    styleScript: string,
    svgContentScript: string,
    textScript: string,
    descScript: string,
  ) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="z-index:1;position:relative" width="854" height="${this.params.height}" viewBox="0 0 854 ${this.params.height}">
        ${styleScript}
        ${svgContentScript}
        ${textScript}
        ${descScript}
      </svg>
    `;
  }

  private generateStaticSVG(
    styleScript: string,
    svgContentScript: string,
    textScript: string,
    descScript: string,
  ) {
    return `
      <svg width="854" height="${this.params.height}" viewBox="0 0 854 ${this.params.height}" xmlns="http://www.w3.org/2000/svg">
        ${styleScript}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 854 ${this.params.height}">
          ${svgContentScript}
        </svg>
        ${textScript}
        ${descScript}
      </svg>
    `;
  }
}

export default (req: any, res: any) => {
  try {
    const generator = new SVGGenerator(req.query);
    const svg = generator.generate();
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svg);
  } catch (err: any) {
    res.setHeader("Content-Type", "text/html");
    res.send(err.message);
  }
};
