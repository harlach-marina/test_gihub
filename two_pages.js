// var app = angular.module('app',['ngRoute']);
// app.factory('dataService', function($http, $q){
//     return{
//         getData: function(){
//             var deferred = $q.defer();
//             $http({method: 'GET', url: 'doc.json'}).
//              success(function(data, status, headers, config) {
//                 deferred.resolve(data.question);
//             }).
//             error(function(data, status, headers, config) {
//                 deferred.reject(status);
//             });
             
//             return deferred.promise;
//         }
//     }
// })
// app.controller('MainCtrl', function MainCtrl($scope, dataService){
     
//         var promiseObj=dataService.getData();
//         promiseObj.then(function(value) { $scope.question=value; });
         
//         $scope.voteUp = function (answer){
//             answer.rate++;
//         };
//         $scope.voteDown = function (answer){
//             answer.rate--;
//         };
//     }
// });

// var documents = {
//             licenses: [{ licensingAuthority: "Унитарное предприятие ГЖИ", mainAddress: "Майкоп", status: "ACTIVE"},
//                 { licensingAuthority: "Муниципальное унитарное предприятие ГЖИ", mainAddress: "Адыгейск", status: "ACTIVE" },
//                 { licensingAuthority: "Муниципальное унитарное ГЖИ", mainAddress: "Миасс", status: "NO" }]
//         };
// app.controller('FirstPageCtrl',function($scope){
//   $scope.message = "First page";
//   $scope.data = documents;
// });
// app.controller('SecondPageCtrl',function($scope){
//   $scope.message = "Second page";
// });
// .config(['$routeProvider',function($routeProvider){
// $routeProvider.
// when('/', {
//   template:'<h1>Welcome to my home page</h1>',
//   controller:'MainCtrl'
//   }).
//   when('/firstPage', {
//   templateUrl:'firstPage.html',
//   controller:'FirstPageCtrl'
//   }).
//   when('/secondPage', {
//   templateUrl:'secondPage.html',
//   controller:'SecondPageCtrl'
//   }).
//   otherwise( {
//   redirectTo : '/'
//   });
// }]);
// var app = angular.module('app',['ngRoute']);

// app.service("ravensService", function ($http, $q)
// {
//   var deferred = $q.defer();
//   $http.get('BaltimoreRavens.json').then(function (data)
//   {
//     deferred.resolve(data);
//   });

//   this.getPlayers = function ()
//   {
//     return deferred.promise;
//   }
// })

// .controller("MainCtrl", function ($scope, ravensService)
// {
//   var promise = ravensService.getPlayers();
//   promise.then(function (data)
//   {
//     $scope.team = data;
//     console.log($scope.team);
//   });
// })

var documents = {
            licenses: [{ licensingAuthority: "Унитарное предприятие ГЖИ", mainAddress: "Майкоп", status: "ACTIVE"},
                { licensingAuthority: "Муниципальное унитарное предприятие ГЖИ", mainAddress: "Адыгейск", status: "ACTIVE" },
                { licensingAuthority: "Муниципальное унитарное ГЖИ", mainAddress: "Миасс", status: "NO" }]
        };
// app.controller('FirstPageCtrl',function($scope){
//   $scope.message = "First page";
//   $scope.data = documents;
// })
// app.controller('SecondPageCtrl',function($scope){
//   $scope.message = "Second page";
// })
// .config(['$routeProvider',function($routeProvider){
// $routeProvider.
// when('/', {
//   template:'<h1>Welcome to my home page</h1>',
//   controller:'MainCtrl'
//   }).
//   when('/firstPage', {
//   templateUrl:'firstPage.html',
//   controller:'FirstPageCtrl'
//   }).
//   when('/secondPage', {
//   templateUrl:'secondPage.html',
//   controller:'SecondPageCtrl'
//   }).
//   otherwise( {
//   redirectTo : '/'
//   });
// }]);

var app = angular.module("app", ['ngRoute']);

// app.service("ravensService", function ($http, $q)
// {
  
//   var deferred = $q.defer();
//   $http.get('BaltimoreRavens.json').then(function (data)
//   {
//     deferred.resolve(data);
//   });

//   this.getPlayers = function ()
//   {
//     return deferred.promise;
//   }
// })

app.controller("MainCtrl", function ($scope)
{
  
})

app.controller('filterTableCtrl', function($scope, $http) {
  $http.get("BaltimoreRavens.json")
  .success(function(data) {
    $scope.names = data;
  });
});
var documents = {
            licenses: [{ licensingAuthority: "Унитарное предприятие ГЖИ", mainAddress: "Майкоп", status: "ACTIVE"},
                { licensingAuthority: "Муниципальное унитарное предприятие ГЖИ", mainAddress: "Адыгейск", status: "ACTIVE" },
                { licensingAuthority: "Муниципальное унитарное ГЖИ", mainAddress: "Миасс", status: "NO" }]
        };
app.controller('FirstPageCtrl',function($scope){
  $scope.message = "First page";
  $scope.data = documents;
})
// app.controller('SecondPageCtrl',function($scope, ravensService)
// {
//   $scope.message = "Second page";
//   var promise = ravensService.getPlayers();
//   promise.then(function (data)
//   {
//     var currentPage = 0;
//     var itemsPerPage = 5;
//     $scope.players = data.data;
//     $scope.totalPages = Math.ceil($scope.players.length/itemsPerPage);
//     var a=0;
//     var b=itemsPerPage;
//     console.log($scope.players.slice(a,b));
//     // $scope.players = _.filter($scope.players, function(player){
//     //   return 
//     // })
//   });
// })
app.factory('pagination', function( $sce ) {

  var currentPage = 0;
  var itemsPerPage = 4;
  var products = [];

  return {

    setProducts: function( newProducts ) {
      products = newProducts
    }, /* END of setProducts */

    getPageProducts: function(num) {
      var num = angular.isUndefined(num) ? 0 : num;
      var first = itemsPerPage * num;
      var last = first + itemsPerPage;
      currentPage = num;
      last = last > products.length ? (products.length - 1) : last;
      return products.slice(first, last);
    }, /* END of getPageProducts */

    getTotalPagesNum: function() {
      return Math.ceil( products.length / itemsPerPage );
    }, /* END of getTotalPagesNum */

    getPaginationList: function() {
      var pagesNum = this.getTotalPagesNum();
      var paginationList = [];
      paginationList.push({
        name: $sce.trustAsHtml('&laquo;'),
        link: 'prev'
      });
      for (var i = 0; i < pagesNum; i++) {
        var name = i + 1;
        paginationList.push({
          name: $sce.trustAsHtml( String(name) ),
          link: i
        });
      };
      paginationList.push({
        name: $sce.trustAsHtml('&raquo;'),
        link: 'next'
      });
      if (pagesNum > 2) {
        return paginationList;
      } else {
        return null;
      }
    }, /* END of getPaginationList */

    getPrevPageProducts: function() {
      var prevPageNum = currentPage - 1;
      if ( prevPageNum < 0 ) prevPageNum = 0;
      return this.getPageProducts( prevPageNum );
    }, /* END of getPrevPageProducts */

    getNextPageProducts: function() {
      var nextPageNum = currentPage + 1;
      var pagesNum = this.getTotalPagesNum();
      if ( nextPageNum >= pagesNum ) nextPageNum = pagesNum - 1;
      return this.getPageProducts( nextPageNum );
    }, /* END of getNextPageProducts */

    getCurrentPageNum: function() {
      return currentPage;
    }, /* END of getCurrentPageNum */

  }
}) /* END of factory-pagination */
app.controller('SecondPageCtrl', function( $scope, $http, pagination ){
  $scope.message = "Second page";

  $http.get('BaltimoreRavens.json')
    .success(function(data){
      $scope.menuObj = data;
      pagination.setProducts( data );
      $scope.products = pagination.getPageProducts( $scope.currentPage );
      $scope.paginationList = pagination.getPaginationList();
    });

  $scope.showPage = function(page) {
    if ( page == 'prev' ) {
      $scope.products = pagination.getPrevPageProducts();
    } else if ( page == 'next' ) {
      $scope.products = pagination.getNextPageProducts();
    } else {
      $scope.products = pagination.getPageProducts( page );
    }
  }

  $scope.currentPageNum = function() {
    return pagination.getCurrentPageNum();
  }
})
.config(['$routeProvider',function($routeProvider){
$routeProvider.
when('/', {
  template:'<h1>Welcome to my home page</h1>',
  controller:'MainCtrl'
  }).
  when('/firstPage', {
  templateUrl:'firstPage.html',
  controller:'FirstPageCtrl'
  }).
  when('/secondPage', {
  templateUrl:'secondPage.html',
  controller:'SecondPageCtrl'
  }).
  otherwise( {
  redirectTo : '/'
  });
}]);

