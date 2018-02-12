[ ![Codeship Status for StanleySathler/sth-hexa-rgb](https://app.codeship.com/projects/96d476b0-dca4-0135-4125-02fed635f8fc/status?branch=master)](https://app.codeship.com/projects/265625)
---

## What is this library for?
This tiny library is very useful when you need to make simple conversions between hexadecimal and RGB values. It can convert an hexadecimal value into a RGB one and vice-versa. For example, you can easily transform `#fff` into `255, 255, 255`.

## Installing
You can install it via npm or Yarn:
```sh
# Using npm
$ npm install sth-hex-rgb

# Using Yarn
$ yarn add sth-hex-rgb
```

_Note: if you're new in the web development, be aware that you can use **either** npm option or Yarn to install it, but not both at the same time._

## Hexadecimal
You can use the `Hexadecimal` to convert your hex value into an RGB object.

```js
const hexadecimal = require('sth-hex-rgb').hexadecimal;

hexadecimal.toRGB('#ffffff');
// => { r: 255, g: 255, b: 255 }

hexadecimal.toRGB('#000');
// => { r: 0, g: 0, b: 0 }

hexadecimal.toRGB('ffffff');
// => { r: 255, g: 255, b: 255}
```

## RGB
Just like the `Hexadecimal`, the `RGB` can be used when you want to convert your RGB object into an hexadecimal value.

```js
const rgb = require('sth-hex-rgb').rgb;

rgb.toHexadecimal({ r: 255, g: 255, b: 255 });
// => #ffffff
```
