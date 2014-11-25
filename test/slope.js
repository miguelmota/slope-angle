var test = require('tape');
var slopeAngle = require('../index');

test('slope angle', function (t) {
  t.plan(4);

  t.equal(Number(slopeAngle.calc([1,1],[5,10]).toFixed(5)), 66.03751);
  t.equal(Number(slopeAngle.calc([124,8984],[234,10322]).toFixed(5)), 85.30015);
  t.equal(Number(slopeAngle.calc([424,8984],[234,10322]).toFixed(5)), 98.08214);
  t.equal(Number(slopeAngle.calc([345,-78445],[3475890,8495]).toFixed(5)), 1.43294);
});
