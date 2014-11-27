(function(){

  function slopeAngle(s1,s2) {
    if (arguments.length !== 2) {
      throw new TypeError('Need 2 arrays with x,y');
    }
    var result = Math.atan((s2[1] - s1[1]) / (s2[0] - s1[0])) * 180/Math.PI;
    if (result < 0) {
      return 180 - Math.abs(result);
    }
    return result;
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = slopeAngle;
  } else {
    window.slopeAnglee = slopeAngle;
  }

})();
