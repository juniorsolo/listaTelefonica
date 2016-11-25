angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope,contatosAPI,operadorasAPI,serialGenerator){
    console.log($scope.$id);		 
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];
	$scope.contato = {
		data: 1286679600000,
		telefone: "45789734" 
	};
	var carregarContatos = function(){
		  contatosAPI.getContatos().success(function(data,status){		   
		  $scope.contatos = data;
	    });
	}; 
	var carregarOperadoras = function(){
		operadorasAPI.getOperadoras().success(function(data){  
		  $scope.operadoras = data;
		}).error(function(data,status){
			$scope.error = "Não foi possível carregar os dados!";
		});
	};
	var addContato = function(contato){
	    contatosAPI.saveContato(contato).success(function(data){
	      carregarContatos();
	    });
	};
	$scope.adicionarContato = function (contato){
		
		contato.serial = serialGenerator.generate();
	    contato["data"] = new Date;
	    //$scope.contatos.push(angular.copy(contato));
	    addContato(contato);
	    delete $scope.contato;
	    $scope.contatoForm.$setPristine();
			   
	};
	$scope.apagarContatos = function(contatos){
	    $scope.contatos = contatos.filter(function(contato){
        	  if(!contato.selecionado) return contato;    	
		});	
	};
	$scope.isContatoSelecionado = function(contatos){
	    return contatos.some(function(contato) {
		   return contato.selecionado;
		});			
	};
    $scope.ordenarPor = function(campo){
	    $scope.criterioDeOrdenacao = campo;
	    $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
	}
   //Carregando os Contatos e Operadoras
   carregarContatos();
   carregarOperadoras();
});