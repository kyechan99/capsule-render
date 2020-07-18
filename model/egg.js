const path = (height) => {
    height = Number(height);
    return `M 427 ${height} Q 327 ${height/3} 213.5 ${height} Q 100 ${height/3} 0 ${height} Q 50 0 427 0 Q 750 0 854 ${height} Q 727 ${height/3} 639.5 ${height} Q 527 ${height/3} 427 ${height}`;
}

const render = (color, height) => {
    return `<path fill="${color}" fill-opacity="1"
        d="${path(height)}"></path>`;
}

module.exports = { render };
