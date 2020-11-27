const model = require('../model/index');
const { generateAutoColor, generateAutoGradient, generateAutoByTime, checkColor, checkText } = require('../src/util');
const { regexData } = require('../src/verification');

module.exports = (req, res) => {
    const {
        type = 'wave',
        section = 'header',
        height = 120,
        text,
		textBg = 'false',
        fontSize = 70,
        fontAlign = 50,
		fontAlignY = 50,
		animation,
		rotate = 0
    } = req.query;
    let color = req.query.color;
    let fontColor = req.query.fontColor;

    if (color === 'auto')
        [color, fontColor] = generateAutoColor();
    else if (color === 'gradient')
        [color, fontColor] = generateAutoGradient();
    else if (color === 'timeAuto' || color === 'timeGradient')
        [color, fontColor] = generateAutoByTime(color);

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(`
    <svg width="854" height="${height}" viewBox="0 0 854 ${height}" xmlns="http://www.w3.org/2000/svg">
        <style>
            ${model.style(section, fontSize, rotate)}
            ${model.animation(animation, fontAlign, fontAlignY)}
        </style>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 854 ${height}">
            ${model.gradientDef(color)}
            ${model[regexData(type)].render(checkColor(color), height)}
        </svg>
		${ textBg === 'true'
			 ? model.textBg(fontColor, fontAlign, fontAlignY, fontSize, text)
			 : '' }
		${ textBg === 'true'
			 ? checkText(text, '000000', fontAlign, fontAlignY)
			 : checkText(text, fontColor, fontAlign, fontAlignY) }
    </svg>
    `);

};