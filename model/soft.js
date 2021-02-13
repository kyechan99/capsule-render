const { checkSection } = require('../src/util');

const render = (section, color, height) => {
    section = checkSection(section);

    return `<rect xmlns="http://www.w3.org/2000/svg" ${section} rx="4.5" height="${height}" width="100%" fill="${color}" stroke-opacity="1"/>`;
}

module.exports = { render };
