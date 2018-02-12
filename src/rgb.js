const toHexadecimal = (rgb) => {
  const { r, g, b } = rgb
  const rgbString = ((b | g << 8 | r << 16) | 1 << 24)
    .toString(16)
    .slice(1)

  return `#${rgbString}`
}

const format = (rgb, template) => {
  const { r, g, b } = rgb
  return template
    .replace('%r', r)
    .replace('%g', g)
    .replace('%b', b)
}

module.exports = {
  toHexadecimal,
  format
}
