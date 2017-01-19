(function(){

angular.module('TicTacToeApp').controller('TicTacToeController', ['$scope', '$window', function($scope, $window){

	this.board;
	this.turn;
  this.finish;
	
	this.initialize = function () {
		this.board = [];

		// Initialize the board
		for (var i = 0; i < 3; i++) {
			this.board[i] = [];
			for (var j = 0; j < 3; j++) {
				this.board[i][j] = "";
			}
		}
		
		// {cross, cercle}
		this.turn = "cross";

    // Flag for finished game
    this.finish = false;
	};

	this.move = function(x, y) {
		console.log(" x: " + x + " y: " + y);
		
		// If empty cell
		if (this.board[x][y] == "" && !this.finish) {
			// Place the piece
			var piece = new Piece();
			var symbol;
			if (this.turn == "cross") symbol = "X";
			if (this.turn == "cercle") symbol = "O";
	 
      // Construct the new piece for the clicked cell
      // TODO: Use a Provider to return pieces.
			piece.construct(this.turn, "000000", symbol);
			this.board[x][y] = piece.getSymbol();
			
			// Check for a winner or full board
			if (this.isWinner() || this.fullBoard()) {
				this.finish=true;
			} else {
				this.nextTurn();			
			}
		}
	};

	this.fullBoard = function () {
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				if (this.board[i][j] == "") return false;
			}
		}
		return true;
	}

	this.nextTurn = function () {
		if (this.turn == "cross") this.turn = "cercle";
		else if (this.turn == "cercle") this.turn = "cross";
	}

	this.isWinner = function () {
		
		// Horitzontal
		if (this.board[0][0] == this.board[0][1] && this.board[0][1] == this.board[0][2] && this.board[0][0] !== "") return true;
		if (this.board[1][0] == this.board[1][1] && this.board[1][1] == this.board[1][2] && this.board[1][1] !== "") return true;
		if (this.board[2][0] == this.board[2][1] && this.board[2][1] == this.board[2][2] && this.board[2][2] !== "") return true;


		// Vertical
		if (this.board[0][0] == this.board[1][0] && this.board[1][0] == this.board[2][0] && this.board[0][0] !== "") return true;		
    if (this.board[0][1] == this.board[1][1] && this.board[1][1] == this.board[2][1] && this.board[0][1] !== "") return true;    
    if (this.board[0][2] == this.board[1][2] && this.board[1][2] == this.board[2][2] && this.board[0][2] !== "") return true;    
		
		// Diagonal
    if (this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2] && this.board[0][0] !== "") return true;   
    if (this.board[0][2] == this.board[1][1] && this.board[1][1] == this.board[2][0] && this.board[1][1] !== "") return true;   

	}
    
  }]);

/*
angular.module('TicTacToeApp').directive("boardTemplate", function (size) {
  return {
    restrict: 'E', // type of directive
    templateUrl:"view/templates/board-template.html",
    controller: function() {
      // When the document is ready execute this code
    },
    controllerAs: 'boardTemplateCtrl' // This is the alias
  };
}); */

})();
