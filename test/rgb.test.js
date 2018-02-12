const expect = require('chai').expect
const rgb = require('../src/rgb')

describe('RGB', () => {
  it('must convert an RGB object into an hexadecimal value', () => {
    const rgbValue = {r: 255, g: 255, b: 255}
    const hexadecimal = rgb.toHexadecimal(rgbValue)
    expect(hexadecimal).to.equal('#ffffff')
  })

  it('must format an RGB object into a given format string', () => {
    let rgbValue = {r: 255, g: 255, b: 255}
    let rgbString = rgb.format(rgbValue, '%r, %g, %b')
    expect(rgbString).to.equal('255, 255, 255')

    rgbValue = {r: 233, g: 15, b: 112}
    rgbString = rgb.format(rgbValue, 'red: %r, green: %g, blue: %b')
    expect(rgbString).to.equal('red: 233, green: 15, blue: 112')
  })
})
