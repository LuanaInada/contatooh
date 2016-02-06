var contatoPage = function() {
	
	this.visitar = function() {
		browser.get('http://localhost:3000/#/contato');
	};
	
	this.digitarNome = function(nome) {
		element(by.model('contato.nome')).sendKeys(nome);
	};
	
	this.digitalEmail = function(email) {
		element(by.model('contato.email')).sendKeys(email);
	};
	
	this.salvar = function() {
		return element(by.binding('mensagem.texto')).getText()
	};
	
	this.obterMensagem = function(){};
		element(by.css('option[value="0"]')).click();
}
module.exports = contatoPage;