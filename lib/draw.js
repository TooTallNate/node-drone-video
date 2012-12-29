
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
 * TODO: make this prettier :)
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
  ctx.font = '20px serif';
  ctx.fillStyle = 'red';

  // print "states"
  ctx.fillText('controlState: ' + data.demo.controlState, 10, 25);
  ctx.fillText('flyState: ' + data.demo.flyState, 10, 50);

  // write battery %
  ctx.fillText('Battery: ' + data.demo.batteryPercentage + '%', 10, 75);

  // write altitude
  ctx.fillText('Altitude: ' + data.demo.altitudeMeters + 'm', 10, 100);

  // write rotation
  ctx.fillText('left-right (x): ' + data.demo.rotation.x + 'o', 10, 135);
  ctx.fillText('font-back (y): ' + data.demo.rotation.y + 'o', 10, 160);
  ctx.fillText('clockwise (z): ' + data.demo.rotation.z + 'o', 10, 185);

  // write velocity
  ctx.fillText('velocity x: ' + data.demo.velocity.x + '', 10, 220);
  ctx.fillText('velocity y: ' + data.demo.velocity.y + '', 10, 245);
  ctx.fillText('velocity z: ' + data.demo.velocity.z + '', 10, 270);

  return canvas.toBuffer();
}
