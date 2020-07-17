const waveModel = require('../model/wave');
const eggModel = require('../model/egg');
const sliceModel = require('../model/slice');

const models = {
    wave : {
        render: waveModel.render
    },
    egg : {
        render: eggModel.render
    },
    slice : {
        render: sliceModel.render
    },
    style : function (section, fontSize = '80px') {
        let css = `.text {
            font-size: ${fontSize};
            font-weight: 700;
        }`;
        if (section === 'footer')
            css += `path {
                transform: rotate(180deg);
                transform-origin: 50% 50%;
            }`;
        return css;
    }
}

module.exports = models;