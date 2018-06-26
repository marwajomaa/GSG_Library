const{getBooksData, searchBooks }= require('./../database/queries/GSG_Library');

exports.get = (req, res)=>{
	getBooksData((err, booksData)=>{
		if(err) return res.send('error in getting data');

		res.render('GSG_Library',{style:'GSG_Library',booksData });
	});
};

exports.post = (req, res) => {
	const {search} = req.body ;
	searchBooks(search,(err, searchResults)=>{
		// console.log(err);
		if(err) return res.send('error in getting data');
		res.send(searchResults);

	});
};
