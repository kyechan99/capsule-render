function isGradientColor(color) {
    if ((typeof color) === 'object')
        return true;
    return false;
}

function regexData(data) {
    return String(data)
        .toLowerCase()
        .replace(/[^a-z]/g, '')
}

module.exports = { isGradientColor, regexData };
