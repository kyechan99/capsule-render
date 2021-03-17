const model = require('../model/index');
const { generateAutoColor, generateAutoGradient, generateAutoByTime, checkColor, checkText } = require('../src/util');
const { regexData } = require('../src/verification');

module.exports = (req, res) => {
    const {
        type = 'wave',
        section = 'header',
        height = 120,
        text,
		textBg = 'false',   // It Means to activate the text background color. text-color -> text-background-color.
        fontSize = 70,
        fontAlign = 50,
		fontAlignY = 50,
		animation,
		reversal = 'false',
		rotate = 0
    } = req.query;
    let color = req.query.color;
    let fontColor = req.query.fontColor;

    
    //- Color Verify
    if (color === 'auto')
        [color, fontColor] = generateAutoColor(fontColor);
    else if (color === 'gradient')
        [color, fontColor] = generateAutoGradient(fontColor);
    else if (color === 'timeAuto' || color === 'timeGradient')
        [color, fontColor] = generateAutoByTime(color, fontColor);


    //- Layout
    let styleScript =   `<style>
                            ${model.style(section, fontSize, rotate)}
                            ${model.animation(animation, fontAlign, fontAlignY)}
                        </style>`;
    let svgContentScript = `${model.gradientDef(color)}
                            ${model[regexData(type)].render(reversal, checkColor(color), height)}`;
    let textScript =    `${ textBg === 'true'
                            ? model.textBg(fontColor, fontAlign, fontAlignY, fontSize, text)
                            : '' }
                        ${ textBg === 'true'
                            ? checkText(text, '000000', fontAlign, fontAlignY)
                            : checkText(text, fontColor, fontAlign, fontAlignY) }`;


    res.setHeader("Content-Type", "image/svg+xml");


    if (type == 'waving') {
        // animation types
        res.send(`
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="z-index:1;position:relative" width="854" height="${height}" viewBox="0 0 854 ${height}">
                ${styleScript}
                <g transform="translate(427, ${height/2}) scale(1, 1) translate(-427, -${height/2})">
                    ${svgContentScript}
                </g>
                ${textScript}
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
            </svg>
        `);
    }
};