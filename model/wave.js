const render = (color) => {
    return `<path fill="${color}" fill-opacity="1"
    d="m 0 0 T 0 100 Q 110 0 220 125 T 440 130 T 660 80 T 880 155 T 880 0 z"></path>`;
}

module.exports = { render };
