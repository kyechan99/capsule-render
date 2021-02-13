const { checkReversal } = require('../src/util');

const path = (height) => {
    height = Number(height);
    const q1 = height - 61;     // 61 is q point	
    return `M 61 0 L 793 0 Q 854 0 854 61 L 854 ${q1} Q 854 ${height} 793 ${height} L 61 ${height} Q 0 ${height} 0 ${q1} L 0 61 Q 0 0 61 0 z`;
}

const render = (reversal, color, height) => {
    reversal = checkReversal(reversal);
    
    return `<path fill="${color}" ${reversal} fill-opacity="1" d="${path(height)}"></path>`;
}

module.exports = { render };