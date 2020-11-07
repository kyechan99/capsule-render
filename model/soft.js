const render = (color, height) => {
    return `<rect xmlns="http://www.w3.org/2000/svg" rx="4.5" height="${height}" width="100%" fill="${color}" stroke-opacity="1"/>`;
}

module.exports = { render };
