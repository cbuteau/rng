
function InclusiveRange(min, max) {
  this.min = Math.floor(min);
  this.max = Math.ceil(max);
}

InclusiveRange.prototype = {
  next: function() {
    return Math.floor(Math.random() * (this.max - this.min)) + this.min;
  }
};

function Rng() {}

Rng.prototype = {
  inclusive: function(min, max) {
      return new InclusiveRange(min, max);
  }
};

Object.defineProperties(Rng.prototype, {
});


module.exports = new Rng();
