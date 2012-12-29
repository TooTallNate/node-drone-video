
/**
 * Module dependencies.
 */

var Canvas = require('canvas');

/**
 * Module exports.
 */

module.exports = draw;

/**
 * Generates a PNG image from a "navdata" event payload.
 *
 * @param {Object} data "navdata" event object
 * @param {Number} width width in pixels
 * @param {Number} height height in pixels
 * @return {Buffer} PNG image buffer representing the navdata
 */

function draw (data, width, height) {
  //console.error(data);

  var canvas = new Canvas(width, height);
  var ctx = canvas.getContext('2d');

  // set font
  ctx.font = '20px Impact';
  ctx.fillStyle = 'red';

  // write battery %
  ctx.fillText('Battery: ' + data.demo.batteryPercentage + '%', 10, 25);

  // write altitude
  ctx.fillText('Altitude: ' + data.demo.altitudeMeters + 'm', 10, 50);

  ctx.fillText('flyState: ' + data.demo.flyState, 10, 75);

  return canvas.toBuffer();
}
