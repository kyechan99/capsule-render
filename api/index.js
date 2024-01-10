import Model from "../model/index";
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

export default (req, res) => {
  //- Default Query --------------------------------------------------------------------------------------------------
  const {
    type = "wave",
    section = "header",
    height = 120,
    text,
    desc,
    textBg = "false", // It Means to activate the text background color. text-color -> text-background-color.
    fontSize = 70,
    fontAlign = 0,
    fontAlignY = 0,
    descSize = 20,
    descAlign = 50,
    descAlignY = 60,
    animation,
    reversal = "false",
    rotate = 0,
    customColorList = "", // Select only the ones you want from the set color list.   ex) "0,1,5,6",
    theme = "none",
  } = req.query;
  let color = req.query.color || "B897FF";
  let fontColor = req.query.fontColor;
  let descColor = req.query.fontColor;
  let textBgColor = "#ffffff";
  let stroke = req.query.stroke || (req.query.strokeWidth ? "B897FF" : "none");
  let strokeWidth = req.query.strokeWidth || (req.query.stroke === "none" ? "0" : "1");

  try {
    //- Color Verify --------------------------------------------------------------------------------------------------
    if (theme !== "none" && checkThemeColor(theme)) {
      // theme has the highest priority
      [color, fontColor, textBgColor] = generateThemeColor(theme);
      descColor = textBgColor;
    } else {
      if (color === "auto") [color, fontColor, textBgColor] = generateAutoColor(fontColor, customColorList);
      else if (color === "gradient") [color, fontColor, textBgColor] = generateAutoGradient(fontColor, customColorList);
      else if (color === "timeAuto" || color === "timeGradient")
        [color, fontColor, textBgColor] = generateAutoByTime(color, fontColor);
      else color = checkCustomColor(color);
      descColor = fontColor;
    }

    //- Layout --------------------------------------------------------------------------------------------------------
    // Default style values ​​such as font style or animation
    let styleScript = `<style>
                        ${Model.style(section, fontSize, descSize, rotate)}
                        ${Model.animation(animation, fontAlign, fontAlignY)}
                     </style>`;

    // Get the svg contents of the corresponding model
    let svgContentScript =
      type !== "transparent"
        ? `${Model.gradientDef(color)}
         ${Model.getModel(regexData(type))(reversal, checkColor(color), height)}`
        : ``;

    // set 'text' - The layout changes depending on whether or not 'textBg' is used.
    let textScript = `
    ${textBg === "true" ? Model.textBg(fontColor, fontAlign || 50, fontAlignY || 50, fontSize, text) : ""} 
    ${
      textBg === "true"
        ? checkText(text, textBgColor, fontAlign, fontAlignY, stroke, strokeWidth)
        : checkText(text, fontColor, fontAlign, fontAlignY, stroke, strokeWidth)
    }`;

    // set 'desc' - Always have the color of 'fontColor'.
    let descScript = `${checkDesc(desc, descColor, descAlign, descAlignY)} `;

    res.setHeader("Content-Type", "image/svg+xml");

    //- Drawing -------------------------------------------------------------------------------------------------------
    // 'animation' is an exception because it uses a special layout.
    if (ANIMATION_MODELS.includes(type)) {
      // animation types
      res.send(`
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="z-index:1;position:relative" width="854" height="${height}" viewBox="0 0 854 ${height}">
                ${styleScript}
                    ${svgContentScript}
                ${textScript}
                ${descScript}
            </svg>
        `);
    } else {
      // static types
      res.send(`
            <svg width="854" height="${height}" viewBox="0 0 854 ${height}" xmlns="http://www.w3.org/2000/svg">
                ${styleScript}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 854 ${height}">
                    ${svgContentScript}
                </svg>
                ${textScript}
                ${descScript}
            </svg>
        `);
    }
  } catch (err) {
    res.setHeader("Content-Type", "text/html");
    res.send(err.message);
  }
};
