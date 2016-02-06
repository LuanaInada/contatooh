angular.module('contatooh').factory('Contato', 
																		function($resourece){
																			return $resource('/contatos/:id');
																		});