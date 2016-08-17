angular.module("listaTelefonica").factory("contatosAPI", function($http){
	
	var _getContatos = function(){
		return $http.get("http://localhost:8080/WebServiceRest/contatos"); 
	};
	
	var _saveContato = function(contato){
		return $http.post("http://localhost:8080/WebServiceRest/contatos", contato);
	};
	return {
		getContatos : _getContatos,
		saveContato : _saveContato
	};
});