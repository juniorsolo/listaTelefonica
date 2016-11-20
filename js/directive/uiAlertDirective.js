angular.module("listaTelefonica").directive("uiAlert", function() {
	return {
		templateUrl: "view/alert.html",
		replace: true,
		restrict: "AE",
		// definindo o scopo ela perde o acesso ao controller (id = 2 ) diretiva (id= 3), perde o acesso
		// ao $scope.error
		scope: {
			  // como os nomes são os mesmo pode ser usado apenas o "@" que funciona
              title: "@title",
              // como o atributo "=" ocorre o toDataBind ficando biDirecional
              // se ambos tiverem o mesmo nome pode colocar somente o "=" que funciona
              //mensagem: "=message"
		},
		transclude: true
	};
});