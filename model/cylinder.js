const path = (height) => {
    height = Number(height);
	const MAX_WIDTH = 854;
	const per = height / 2;
    return `M 61 0 L ${854 - per} 0 A 50 50 0 1 1 ${854 - per} ${height} L ${per} ${height} A 50 50 0 1 1 ${per} 0 `;
}

const render = (color, height) => {
    return `<path fill="${color}" fill-opacity="1" d="${path(height)}"></path>`;
}

module.exports = { render };
