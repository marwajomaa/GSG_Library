const allBooks=require('./../database/quieres/glibrary');


exports.get = (req, res)=>{
	allBooks((allBooksRrror,result) => {
		if(allBooksRrror) return res.status(500);
		res.render('library',{style: result});
	});
};
