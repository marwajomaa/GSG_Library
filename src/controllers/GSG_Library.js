const {
	getBooksData,
	updateBooks,
	selectCategories
} = require('./../database/queries/GSG_Library');
exports.get = (req, res) => {
	getBooksData((err, booksData) => {
		if (err) {
			return res.send('error in getting data');
		}
		selectCategories((err, categories) => {
			if (err) {
				return res.send('error category data');
			}

			booksData.forEach((book) => {
				book.category = [
					{ id: book.cat_id, name: book.cat_name }
				];
				categories.forEach((cat) => {
					if (book.category[0].id !== cat.id) {
						book.category.push(cat);
					}
				});
			});

			res.render('GSG_Library', {
				style: 'GSG_Library',
				booksData, categories
			});
		});
	});
};

exports.post = (req, res) => {
	console.log(req.body);
	const {id, bname,author,publish_year,category,description}= req.body;
	updateBooks(id, bname,author,publish_year,category,description,(err,result) => {
		if(err) return res.status(500).send('server error');
		res.status(200).send({msg:'success recieve'});



	});

};
