exports.get = (req, res) => {
	res.render('500' , { message : 'Server Error',layout:'error',style:'500'});};
