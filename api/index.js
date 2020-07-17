const model = require('../model/index');
const { generateAutoColor, checkColor, checkText, regexData } = require('../src/util');

module.exports = (req, res) => {
    const {
        type = 'wave',
        section = 'header',
        height = 200,
        text,
        fontSize,
        fontAlign
    } = req.query;
    let color = req.query.color;
    let fontColor = req.query.fontColor;

    if (color === 'auto')
        [color, fontColor] = generateAutoColor();

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(`
    <svg width="854" height="320" viewBox="0 0 854 320" xmlns="http://www.w3.org/2000/svg">
        <style>
            ${model.style(section, fontSize)}
        </style>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 854 320">
            ${model[regexData(type)].render(checkColor(color))}
        </svg>
        ${checkText(text, fontColor, fontAlign)}
    </svg>
    `);

};