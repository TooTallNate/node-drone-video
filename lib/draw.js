
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
  ctx.fillText('left-right (x): ' + data.demo.rotation.x.toFixed(2) + '°', 10, 135);
  ctx.fillText('font-back (y): ' + data.demo.rotation.y.toFixed(2) + '°', 10, 160);
  ctx.fillText('clockwise (z): ' + data.demo.rotation.z.toFixed(2) + '°', 10, 185);

  // write velocity
  ctx.fillText('velocity x: ' + data.demo.velocity.x.toFixed(2), 10, 220);
  ctx.fillText('velocity y: ' + data.demo.velocity.y.toFixed(2), 10, 245);
  ctx.fillText('velocity z: ' + data.demo.velocity.z.toFixed(2), 10, 270);

  // error states
  var states = {
    'anglesOutOfRange': 'Angles out of Range!',
    'tooMuchWind': 'Too Much Wind!',
    'ultrasonicSensorDeaf': 'Ultrasonic Sensor Deaf!',
    'cutoutDetected': 'Cutout Detected!',
    'emergencyLanding': 'Emergency Mode!'
  };
  var n = 25;
  Object.keys(states).forEach(function (state) {
    if (data.droneState[state]) {
      var message = states[state];
      ctx.fillText(message, 10 + (width / 2), n);
      n += 25;
    }
  });

  return canvas.toBuffer();
}
