var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
	
	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clientID: 'SEU CLIENTE ID',
		clientSecret: 'SEU CLIENTE PASSWORD',
		callbackURL: 'SUA REDIRECT_URI'
	}, function(accessToken, refreshToken, profile, done) {
		
		Usuario.findOrCreate(
			{ "login" : profile.username},
			{ "nome" :profile.username},
			function(erro, usuario){
				if(erro){
					console.log(erro);
					return done(erro);
				}
				return done(null, usuario);
			}
		);
	}));
	
	passport.serializeUser(function(usuario, done) {
		done(null, usuario._id);
	});
	
	passport.deserializeUser(function(id, done) {
		Usuario.findById(id).exec()
		.then(function(usuario) {
			done(null, usuario);
		});
	});
	
};