function verificaAutentificacao(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		res.status('401').json('Não autorizado');
	}
}

module.exports = function(app){
	
	var controller = app.controllers.contato;
	
	app.route('/contatos')
		.get(verificaAutentificacao, controller.listaContatos)
		.post(verificaAutentificacao, controller.salvaContato);
		
	app.route('/contatos/:id')
		.get(verificaAutentificacao, controller.obtemContato)
		.delete(verificaAutentificacao, controller.removeContato);
	
	//app.get('/contatos', controller.listaContatos);
	//app.get('/contatos/:id', controller.obtemContato);
	//app.delete('/contatos/:id', controller.removeContato);
};