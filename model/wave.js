const render = (color, height) => {
    height = Number(height);
    const point = [
        70+height-120,
        -55+height-120,
        55+height-120,
        60+height-120,
        50+height-120,
        75+height-120
    ]
    return `<path fill="${color}" fill-opacity="1"
        d="m 0 0 T 0 ${point[0]} Q 110 ${point[1]} 220 ${point[2]} T 440 ${point[3]} T 660 ${point[4]} T 880 ${point[5]} T 880 0 z"></path>`;
}

module.exports = { render };
