const getBooksData = require('./../database/quieres/GSG_Library');
exports.get = (req, res)=>{
	getBooksData((err, booksData)=>{
		if(err) {
			res.send('error in getting data');
		}
		res.render('GSG_Library',{style:'GSG_Library',booksData });
	});
};
