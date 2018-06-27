const outBook = require('./../database/queries/outbook');

exports.get = (req, res)=>{
	outBook.infoBook ((err,result)=>{
		if(err) console.log('error',err);
		else{
			res.render('outBooks',{result:result});

		}
	});

};

exports.post = (req,res)=>{

	const {bookId}=req.body.data;

	outBook.deleteBook(bookId,(err,result)=>{
		if(err) console.log('error',err);
		else{res.send('ok delete');
		}
	});


};
