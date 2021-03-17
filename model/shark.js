const { checkReversal } = require('../src/util');

const path = (height) => {
    height = Number(height);
    const c1 = height - 95;     // 27 is edge point
    const c2 = height + 27;     // 27 is edge point
    return `M 0 ${c1} C 61 ${c2} 61 ${c2} 122 ${c1} C 183 ${c2} 183 ${c2} 244 ${c1} C 305 ${c2} 305 ${c2} 366 ${c1} C 427 ${c2} 427 ${c2} 488 ${c1} C 549 ${c2} 549 ${c2} 610 ${c1} C 671 ${c2} 671 ${c2} 732 ${c1} C 793 ${c2} 793 ${c2} 854 ${c1}  L 854 0 L 0 0 L 0 305 `;
}

const render = (reversal, color, height) => {
    reversal = checkReversal(reversal);

    return `<path fill="${color}" ${reversal} fill-opacity="1" d="${path(height)}"></path>`;
}

module.exports = { render };
