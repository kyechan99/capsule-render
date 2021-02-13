const { checkReversal } = require('../src/util');

const path = (height) => {
    height = Number(height);
    height -= 120;      // 120 is benchmark pos-y
    const point = [
        70+height,
        -55+height,
        55+height,
        60+height,
        50+height,
        75+height
    ]

    return `m 0 0 T 0 ${point[0]} Q 110 ${point[1]} 220 ${point[2]} T 440 ${point[3]} T 660 ${point[4]} T 880 ${point[5]} T 880 0 z`;
}

const render = (reversal, color, height) => {
    reversal = checkReversal(reversal);

    return `<path fill="${color}" ${reversal} fill-opacity="1" d="${path(height)}"></path>`;
}

module.exports = { render };
