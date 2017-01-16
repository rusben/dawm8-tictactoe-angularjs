function Piece() {
  // Properties definition
  this.type;
  this.color;
  this.symbol;

  // Methods definition
  this.construct = function (type, color, symbol) {
    this.type = type;
    this.color = color;
    this.symbol = symbol;
  }

  this.getType = function () {
    return this.type;
  }

  this.getColor = function () {
    return this.color;
  }

  this.getSymbol = function () {
    return this.symbol;
  }

  this.setType = function (type) {
    this.type = type;
  }

  this.setColor = function (color) {
    this.color = color;
  }

  this.setSymbol = function (symbol) {
    this.symbol = symbol;
  }
}
