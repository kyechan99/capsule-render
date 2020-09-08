const waveModel = require('../model/wave');
const rectModel = require('../model/rect');
const sliceModel = require('../model/slice');
const eggModel = require('../model/egg');
const sharkModel = require('../model/shark');
const { isGradientColor } = require('../src/verification');

const models = {
    wave : {
        render: waveModel.render
    },
    rect : {
        render: rectModel.render
    },
    slice : {
        render: sliceModel.render
    },
    egg : {
        render: eggModel.render
    },
    shark : {
        render: sharkModel.render
    },
    style : function (section, fontSize = '80') {
        let css = `.text {
            font-size: ${fontSize}px;
            font-weight: 700;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        }`;
        if (section === 'footer')
            css += `path {
                transform: rotate(180deg);
                transform-origin: 50% 50%;
            }`;
        return css;
    },
    gradientDef : function (color) {
        if (!isGradientColor(color))
            return '';
        
        let offset = '';
        for (key in color) {
            offset += `<stop offset="${key}%" stop-color="#${color[key]}"/>`;
        }

        return `
        <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                ${offset}
            </linearGradient>
        </defs>
        `;
    }
}

module.exports = models;
