const path = (height) => {
    return `m 0 0 l 0 ${height} l 854 0 l 0 -${height} z`;
}

const render = (color, height) => {
    return `<path fill="${color}" fill-opacity="1" d="${path(height)}"></path>`;
}

module.exports = { render };
