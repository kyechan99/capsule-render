const { isGradientColor } = require('./verification');
const pallete = require('./pallete.json');
const gradient = require('./gradient.json');
const pallete_theme = require('./pallete_theme.json');

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateSelectColor(list, fontColor, customColorList) {
    customColorList = customColorList.split(',').filter(e => (
        !isNaN(e) && 
        e !== '' && 
        0 <= e && e < list.length
    ));
    const auto = list[customColorList[Math.floor(Math.random() * customColorList.length)]];
    return [auto.color, fontColor ? fontColor : auto.text, auto.textBg ];
}

function generateAutoColor(fontColor, customColorList = '') {
    if (customColorList !== '') 
        return generateSelectColor(pallete, fontColor, customColorList);

    const auto = pallete[Math.floor(Math.random() * pallete.length)];
    return [auto.color, fontColor ? fontColor : auto.text, auto.textBg ];
}

function generateAutoGradient(fontColor, customColorList = '') {
    if (customColorList !== '') 
        return generateSelectColor(gradient, fontColor, customColorList);

    const auto = gradient[Math.floor(Math.random() * gradient.length)];
    return [auto.color, fontColor ? fontColor : auto.text, auto.textBg ];
}

function generateAutoByTime(queryColor, fontColor) {
    if (queryColor === 'timeAuto')
        return randomizedByTime(pallete, fontColor);
    // else 'timeGradient'
    return randomizedByTime(gradient, fontColor);
}

function checkThemeColor(stats) {
    return pallete_theme[stats];
}
function generateThemeColor(stats) {
    return [pallete_theme[stats].color, pallete_theme[stats].text, pallete_theme[stats].textBg];
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

function checkText(text, fontColor = '000000', fontAlign = '50', fontAlignY = '50', stroke = 'B897FF', strokeWidth = '0') {
    if (text === '' || text === undefined)
        return '';

    // debate : adjustable text-anchor|pos-y. not only pos-x
    return `<text text-anchor="middle" alignment-baseline="middle" x="${fontAlign}%" y="${fontAlignY}%" class="text" style="fill:#${fontColor};" stroke="#${stroke}" stroke-width="${strokeWidth}" >${text.replaceAll('\n', '<br>')}</text>`;
}

function checkDesc(desc, descColor = '000000', descAlign = '50', descAlignY = '60') {
    if (desc === '' || desc === undefined)
        return '';

    // debate : adjustable text-anchor|pos-y. not only pos-x
    return `<text text-anchor="middle" alignment-baseline="middle" x="${descAlign}%" y="${descAlignY}%" class="desc" style="fill:#${descColor};">${desc}</text>`;
}


module.exports = { generateAutoColor, generateAutoGradient, generateAutoByTime, checkThemeColor, generateThemeColor, checkReversal, checkColor, checkText, checkDesc };
