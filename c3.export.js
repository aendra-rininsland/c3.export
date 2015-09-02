/*! c3.export v0.0.0 - MIT license */

;(function (global) { function moduleDefinition(c3) {

  // ---------------------------------------------------------------------------

  'use strict';

  /**
   * @param {string} format Output format, either "svg" or "png"
   * @return {string}       The processed SVG or PNG
   * @api public
   */

  c3.export = function(format) {
    return 'yay';
  };

  /**
   * Expose c3.export
   */

  return c3.export;

// ---------------------------------------------------------------------------

} if (typeof exports === 'object') {
  // node export
  module.exports = moduleDefinition(require('c3'));
} else if (typeof define === 'function' && define.amd) {
  // amd anonymous module registration
  define(['c3'], moduleDefinition);
} else {
  // browser global
  global.c3.export = moduleDefinition(global.c3);
}}(this));
