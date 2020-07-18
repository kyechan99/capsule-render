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

function generateAutoColor() {
    const auto = pallete[Math.floor(Math.random() * pallete.length)];
    return [auto.color, auto.text];
}

function generateAutoGradient() {
    const auto = gradient[Math.floor(Math.random() * gradient.length)];
    return [auto.color, auto.text];
}

function checkColor(color) {  
    if ((typeof color) === 'object')
        return color;
    if (color === 'random')
        return generateRandomColor();  
    if (color)
        return '#'+color;
    return '#B897FF';
}

function checkText(text, fontColor = '000000', fontAlign = '50') {
    if (text === '' || text === undefined)
        return '';

    // debate : adjustable text-anchor|pos-y. not only pos-x
    return `<text text-anchor="middle" x="${fontAlign}%" y="50%" class="text" style="fill:#${fontColor};">${text}</text>`;
}

function regexData(data) {
    return String(data)
        .toLowerCase()
        .replace(/[^a-z]/g, '')
}

module.exports = { generateAutoColor, generateAutoGradient, checkColor, checkText, regexData };
