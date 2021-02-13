const { checkReversal } = require('../src/util');

const path = (height) => {
    return `m 0 0 l 854 ${height} l 0 -${height} l -854 0 z`;
}

const render = (reversal, color, height) => {
    reversal = checkReversal(reversal);

    return `<path fill="${color}" ${reversal} fill-opacity="1" d="${path(height)}"></path>`;
}

module.exports = { render };
