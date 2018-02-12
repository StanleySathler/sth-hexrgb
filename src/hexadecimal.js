const forceHashRemoval = (hexaCode) => (
  hexaCode.includes('#')
    ? hexaCode.substr(1)
    : hexaCode
)

const forceHash = (hexaCode) => (
  hexaCode.includes('#')
    ? hexaCode
    : `#${hexaCode}`
)

const isVerbose = (hexaCode) => (hexaCode.length > 4)

const verbose = (hexaCode) => {
  if (isVerbose(hexaCode)) return hexaCode

  hexaCode = forceHashRemoval(hexaCode)
  const pieces = [...hexaCode]
  const r = pieces[0], g = pieces[1], b = pieces[2]
  return `#${r}${r}${g}${g}${b}${b}`
}

const simplify = (hexaCode) => {
  if (!isVerbose(hexaCode)) return forceHash(hexaCode)

  hexaCode = forceHashRemoval(hexaCode)
  const r = hexaCode.substr(0, 1)
  const g = hexaCode.substr(2, 1)
  const b = hexaCode.substr(4, 1)
  return `#${r}${g}${b}`
}

const toRGB = (hexaCode) => {
  const verbosed = verbose(hexaCode)
  const codeWithNoHash = forceHashRemoval(verbosed)
  const r = parseInt(codeWithNoHash.substr(0, 2), 16)
  const g = parseInt(codeWithNoHash.substr(2, 2), 16)
  const b = parseInt(codeWithNoHash.substr(4, 2), 16)
  return { r, g, b }
}

module.exports = {
  forceHash,
  verbose,
  simplify,
  toRGB
}
