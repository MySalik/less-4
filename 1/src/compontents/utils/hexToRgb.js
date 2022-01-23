const hexToRGB = hex => {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    if (isNaN(r) || isNaN(g) || isNaN(b))
        return;
    return `rgb(${r}, ${g}, ${b})`
}


export default hexToRGB;