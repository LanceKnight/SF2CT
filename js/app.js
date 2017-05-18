var myApp = angular.module('myApp', []);

var SFPP =0;
var SFPP_1212 = 0.96818;
var SFPP_1224 = 1.93625;
var SFPP_2424 = 3.8725;

var per_box = 0;
var per_4 = 4;
var per_8 = 8;
var per_11 = 11;


myApp.controller('myController', function ($scope) {
	
        $scope.carton = {
			
            value:"0",
            toPiece: function(){
                var piece=0;
                piece = $scope.carton.value *SFPP* per_box;
                return piece;
            }
        }

        $scope.s1212 = function(){
            SFPP = SFPP_1212;
			$scope.clrSizeColor();
			document.getElementById("b1").style.color = "red";
        }
        $scope.s1224 = function(){
            SFPP = SFPP_1224;
			$scope.clrSizeColor();
			document.getElementById("b2").style.color = "red";
        }
        $scope.s2424 = function(){
            SFPP = SFPP_2424;
			$scope.clrSizeColor();
			document.getElementById("b3").style.color = "red";
		
        }
        $scope.p4 = function(){
            per_box = per_4;
			$scope.clrBoxColor();
			document.getElementById("p1").style.color = "red";
        }
        $scope.p8 = function(){
            per_box = per_8;
			$scope.clrBoxColor();
			document.getElementById("p2").style.color = "red";
        }
        $scope.p11 = function(){
            per_box = per_11;
			$scope.clrBoxColor();
			document.getElementById("p3").style.color = "red";
        }
		$scope.clrSizeColor = function(){
			document.getElementById("b1").style.color = "white";
			document.getElementById("b2").style.color = "white";
			document.getElementById("b3").style.color = "white";
		}
		$scope.clrBoxColor = function(){
			document.getElementById("p1").style.color = "white";
			document.getElementById("p2").style.color = "white";
			document.getElementById("p3").style.color = "white";
		}

});