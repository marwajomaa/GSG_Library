const deleteBook = require('./../database/queries/deletee');

exports.delete1 = (req, res)=>{
	const {id} = req.params;
	deleteBook(id, (err,result)=>{
		if(err) return res.send('err in deleting book');
		res.redirect('/GSG_Library');
		// res.render('GSG_Library', {result, style:'GSG_Library'});
	});
};

exports.delete2 = (req, res)=>{
	const {id} = req.body;
	deleteBook(id, (err,result)=>{
		console.log(err, 'in');
		if(err) return res.send({status : false , message : 'error in deleting data'});
		
		res.send({status : true , msg: 'book deleted'});
	});
};
