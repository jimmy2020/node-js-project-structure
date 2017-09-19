const path			= require('path'),
	fs 				= require('fs'),
	router 			= require('express').Router(),
	dir 			= `${path.dirname(__dirname)}/controllers`,
	helperLib		= require(path.resolve('./config/lib/helper_lib'));


let ReadDirectory 	= new helperLib.read_directory.readDirectory()

const fileObj 		= ReadDirectory.requireFiles(dir)

router
	.post('/register', 						fileObj.login_register.loginRegister.register)
	.put('/update', 						fileObj.login_register.loginRegister.update)
	.post('/login', 						fileObj.login_register.loginRegister.login)
	.put('/change-password', 				fileObj.password.password.changePassword)
	.put('/forgot-password', 				fileObj.password.password.forgotPassword)


module.exports = {
	router: router,
	base: '/api/user-profile'	
};

