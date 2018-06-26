const outBook = require('./../database/queries/outbook');

exports.get = (req, res)=>{
	outBook((err,result)=>{
		if(err) console.log('error',err);
		else{
			res.render('outBooks',{result:result});
			console.log(result);

		}
	});

};
