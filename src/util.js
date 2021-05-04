const { isGradientColor } = require('./verification');
const pallete = require('./pallete.json');
const gradient = require('./gradient.json');

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateAutoColor(fontColor) {
    const auto = pallete[Math.floor(Math.random() * pallete.length)];
    return [auto.color, fontColor ? fontColor : auto.text, auto.textBg ];
}

function generateAutoGradient(fontColor) {
    const auto = gradient[Math.floor(Math.random() * gradient.length)];
    return [auto.color, fontColor ? fontColor : auto.text, auto.textBg ];
}

function generateAutoByTime(queryColor, fontColor) {
    if (queryColor === 'timeAuto')
        return randomizedByTime(pallete, fontColor);
    // else 'timeGradient'
    return randomizedByTime(gradient, fontColor);
}

function randomizedByTime(colorData, fontColor) {
    const buildDate = new Date("Wed Jul 22 2020 17:00:00");
    let nowDate = new Date();
    nowDate.setSeconds(0);
    nowDate.setMilliseconds(0);

    let diffMinute = Math.abs(nowDate.getTime() - buildDate.getTime()) / 60000;
    if (diffMinute >= colorData.length)
        diffMinute %= colorData.length;

    return [colorData[diffMinute].color, fontColor ? fontColor : colorData[diffMinute].text, colorData[diffMinute].textBg];
}

function checkReversal(reversal) {
    if (reversal === 'true') {
        return `transform="scale (-1, 1)" transform-origin="center"`;
    }

    return '';
}

function checkColor(color) {  
    if (isGradientColor(color))
        return 'url(#linear)';
    if (color === 'random')
        return generateRandomColor();  
    if (color)
        return '#' + color;
    return '#B897FF';
}

function checkText(text, fontColor = '000000', fontAlign = '50', fontAlignY = '50') {
    if (text === '' || text === undefined)
        return '';

    // debate : adjustable text-anchor|pos-y. not only pos-x
    return `<text text-anchor="middle" alignment-baseline="middle" x="${fontAlign}%" y="${fontAlignY}%" class="text" style="fill:#${fontColor};">${text}</text>`;
}

function checkDesc(desc, descColor = '000000', descAlign = '50', descAlignY = '60') {
    if (desc === '' || desc === undefined)
        return '';

    // debate : adjustable text-anchor|pos-y. not only pos-x
    return `<text text-anchor="middle" alignment-baseline="middle" x="${descAlign}%" y="${descAlignY}%" class="desc" style="fill:#${descColor};">${desc}</text>`;
}


module.exports = { generateAutoColor, generateAutoGradient, generateAutoByTime, checkReversal, checkColor, checkText, checkDesc };
