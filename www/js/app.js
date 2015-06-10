
angular
  .module('MyApp', [ 'ngMaterial' , 'firebase'])
  .controller('DemoCtrl', function($scope, usuarios) {
    
    $scope.users = usuarios;
     $scope.addItem = function() {
      if ($scope.users.nombre !== "" && $scope.users.correo!== "" && $scope.users.tel !== "")
      {
        $scope.users.$add({
          "nombre": $scope.users.nombre,
          "correo": $scope.users.correo,
          "tel"   : $scope.users.tel
        });
        $scope.users.nombre = "";
        $scope.users.correo = "";
        $scope.users.tel = "";
        
      };
    };
  }).factory("usuarios", function($firebaseArray) {
    var itemsRef = new Firebase("https://dbprueba.firebaseIO.com");
    return $firebaseArray(itemsRef);
});