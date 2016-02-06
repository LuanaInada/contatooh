describe("ContatoController", function() {
	
	var $scope, $httpBackend;
	
	beforeEach(function() {
		module('contatooh');
		inject(function($injector, _$httpBackend_) {
			$scope = $injector.get('$rootScope').$new();
			$httpBackend = _$httpBackend_;
			$httpBackend.when('GET', '/contatos/1')
											.respond({_id: '1'});
		});
	});
	
	it("Deve criar um Contato vazio quando nenhum parâmetro de rota for passado",
		inject(function($controller){
			$controller('ContatoController', {"$scope" : $scope});
			expect($scope.contato._id).toBeUndefined();
		}));
		
	it("Deve criar um Contato vazio quando parâmetro de rota for passado",
		inject(function($controller){
			$controller('ContatoController', '$routeParams': {contatoId: 1}, {"$scope" : $scope});
			$httpBackend.flush();
			expect($scope.contato._id).toBeDefined();
		}));
		
	
});

describe('Cadastro de contatos', function() {
	beforeEach(function() {
		browser.get('http://localhost:3000/#/contatos');
	});
	
	it('Deve cadastrar um contato', function() {
		var aleatorio = Math.floor((Math.random() * 10000000) + 1);
		var nome = 'teste' + aleatorio;
		var email = 'teste@email' + aleatorio;
	});
});