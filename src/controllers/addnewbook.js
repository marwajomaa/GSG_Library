const addnewbook= require('./../database/queries/addnewbook');

const fs = require('fs');


const{getBooksData,selectCategories}= require('./../database/queries/GSG_Library');

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

			res.render('addnewbook', {
				style: 'addnewbook',
				booksData, categories
			});
		});

	});
};

exports.post = (req, res , next ) => {
	if (!req.body.fileUrl) {
	 return res.send({status : false ,msg:'No file were uploaded'});
	}
	const imagePath = __dirname + '/../../public/img/' + Date.now().toString() + '.' +req.body.fileExtension;
	console.log('imagePathimagePath',imagePath);
	const imageText = req.body.fileData.replace(/^data:image\/\w+;base64,/, '');
	const buffer = new Buffer(imageText, 'base64');
	console.log(imageText);

	fs.writeFile(imagePath , buffer , (err , done)=>{
		if(err) return next(err);
		console.log('The File Has Been Saved successfully');
	});

	const data = {};
	data.picUrl = imagePath;
	data.book_name = req.body.bookname;
	data.publish_date = req.body.PublishDate;
	data.category = req.body.category;
	data.author = req.body.author;
	data.description = req.body.description;


	addnewbook(data, (err, result) => {
		if(err) {
			console.log(err.message);
			return res.send({status : false , message : 'error in adding data'});
		}
		res.send({status:true,result , msg:'book is successfully added'});
	});

};
