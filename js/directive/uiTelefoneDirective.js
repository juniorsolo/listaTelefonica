angular.module("listaTelefonica").directive("uiTelefone", function(){
	return {
        require: "ngModel",       
        link: function(scope, element, attrs, ctrl){
            
            var _formatPhone = function (telefone){
                telefone = telefone.replace(/[^0-9]+/g,"");
                if(telefone.length > 4  && telefone.length <= 8 ){
                	telefone = telefone.substring(0,4) + "-"  + telefone.substring(4);
                } else if (telefone.length > 5 ) {
                    telefone = telefone.substring(0,5) + "-" + telefone.substring(5,9);
                }
                return telefone;
            };
            element.bind("keyup", function(){
       	   	  ctrl.$setViewValue( _formatPhone( ctrl.$viewValue ) );
       	      ctrl.$render();	
       	      console.log("diretiva telefone key upp");
       	    }); 

        }
	};
});