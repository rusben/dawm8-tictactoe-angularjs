// jQuery code
$(document).ready(function () {

});

// http://stackoverflow.com/questions/20612484/angularjs-separating-directive-files-but-staying-on-the-same-module
// http://stackoverflow.com/questions/20087627/how-to-create-separate-angularjs-controller-files
// https://docs.angularjs.org/api/ng/directive/ngApp

(function(){
  angular.module('VideoClubApp').controller('PopUpController', ['$scope', '$window', function($scope, $window){

    // Controller properties
    this.films; // Film data to show
      
    // Get an Array with dimension num
    $scope.getNumber = function(num) {
      var a = []; 
      for(var i=0; i<num; i++) a.push(i);
        return a;
    }
     
    this.initialize = function () {
      // Pass variables between controllers   
      // http://stackoverflow.com/questions/12008908/angularjs-how-can-i-pass-variables-between-controllers
      // http://stackoverflow.com/questions/33711299/access-variables-defined-in-other-controller/33711422
      // http://stackoverflow.com/questions/21919962/share-data-between-angularjs-controllers?noredirect=1&lq=1

      // Load data from the window opener using angular object and DOM
      this.films = $window.opener.angular.element('#videoclub-ctrl').scope().VideoClubCtrl.films;
      // console.log(this.films);
    };

    this.close = function () {
      $window.close();
    };

    this.initialize();

  }]);

  angular.module('VideoClubApp').directive("popupResultViewForm", function () {
    //app.directive("popupViewForm", function () {
    return {
      restrict: 'E', // type of directive
      templateUrl:"../../view/templates/popup-result-view-form.html",
      controller: function() {
        // When the document is ready execute this code
      },
      controllerAs: 'popupViewFormCtrl' // This is the alias
    };
  });

})();
