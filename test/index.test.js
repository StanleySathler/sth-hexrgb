const expect = require('chai').expect
const hexadecimal = require('../src').hexadecimal

describe('Hexadecimal', () => {
  it('must be transformed to 6 chars when only 3 are given', () => {
    const shortHexa = '#fa2'
    const normalHexa = hexadecimal.verbose(shortHexa)
    expect(normalHexa).to.equal('#ffaa22')
  })

  it('must stay as it is when 6 chars are given', () => {
    const normalHexa = hexadecimal.verbose('#fff000')
    expect(normalHexa).to.equal('#fff000')
  })

  it('values with no hashtag must get one', () => {
    let hexaWithHash = hexadecimal.forceHash('fa22af')
    expect(hexaWithHash).to.equal('#fa22af')

    hexaWithHash = hexadecimal.forceHash('fb5')
    expect(hexaWithHash).to.equal('#fb5')
  })

  it('must be converted to an object representing a rgb object', () => {
    const hexa = '#ffffff'
    const rgb = hexadecimal.toRGB(hexa)
    expect(rgb).to.eql({ r: 255, g: 255, b: 255 })
  })
})