const model = require('../model/index');
const { generateAutoColor, generateAutoGradient, generateAutoByTime, checkColor, checkText, checkDesc } = require('../src/util');
const { regexData } = require('../src/verification');

module.exports = (req, res) => {
    //- Default Query --------------------------------------------------------------------------------------------------
    const {
        type = 'wave',
        section = 'header',
        height = 120,
        text,
        desc,
		textBg = 'false',   // It Means to activate the text background color. text-color -> text-background-color.
        fontSize = 70,
        fontAlign = 50,
		fontAlignY = 50,
        descSize = 20,
        descAlign = 50,
		descAlignY = 60,
		animation,
		reversal = 'false',
		rotate = 0
    } = req.query;
    let color = req.query.color;
    let fontColor = req.query.fontColor;
    let textBgColor = '#ffffff';
    
    //- Color Verify --------------------------------------------------------------------------------------------------
    if (color === 'auto')
        [color, fontColor, textBgColor] = generateAutoColor(fontColor);
    else if (color === 'gradient')
        [color, fontColor, textBgColor] = generateAutoGradient(fontColor);
    else if (color === 'timeAuto' || color === 'timeGradient')
        [color, fontColor, textBgColor] = generateAutoByTime(color, fontColor);


    //- Layout --------------------------------------------------------------------------------------------------------
    // Default style values ​​such as font style or animation
    let styleScript =   `<style>
                            ${model.style(section, fontSize, descSize, rotate)}
                            ${model.animation(animation, fontAlign, fontAlignY)}
                        </style>`;
    // Get the svg contents of the corresponding model
    let svgContentScript = type !== 'transparent' ? `${model.gradientDef(color)}
                            ${model[regexData(type)].render(reversal, checkColor(color), height)}` : ``;

    // set 'text' - The layout changes depending on whether or not 'textBg' is used.
    let textScript =    `${ textBg === 'true'
                            ? model.textBg(fontColor, fontAlign, fontAlignY, fontSize, text)
                            : '' }
                        ${ textBg === 'true'
                            ? checkText(text, textBgColor, fontAlign, fontAlignY)
                            : checkText(text, fontColor, fontAlign, fontAlignY) }`;
    // set 'desc' - Always have the color of 'fontColor'.
    let descScript =    `${ checkDesc(desc, fontColor, descAlign, descAlignY) } `;


    res.setHeader("Content-Type", "image/svg+xml");


    //- Drawing -------------------------------------------------------------------------------------------------------
    // 'waving' is an exception because it uses a special layout.
    if (type == 'waving') {
        // animation types
        res.send(`
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="z-index:1;position:relative" width="854" height="${height}" viewBox="0 0 854 ${height}">
                ${styleScript}
                <g transform="translate(427, ${height/2}) scale(1, 1) translate(-427, -${height/2})">
                    ${svgContentScript}
                </g>
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
};