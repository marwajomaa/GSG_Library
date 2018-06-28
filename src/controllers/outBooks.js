const outBook = require('./../database/queries/outbook');

exports.get = (req, res)=>{
	outBook.infoBook ((err,result)=>{
		if(err) res.render('500' , { message : 'Server Error',layout:'error',style:'500'});
		else{
			res.render('outBooks',{result:result,jsFile:'domOutBook', title: 'Out Book',	style: 'outBook'});
			console.log('result', result);
		}
	});
};

exports.post = (req,res)=>{
	const {bookId}=req.body.data;
	console.log('yy',req.body.data);
	outBook.deleteBook(bookId,(err, result)=>{

		if(err){

			return res.send({status:500});
		}
		else{

			res.send({status:302});
		}
	});
};
