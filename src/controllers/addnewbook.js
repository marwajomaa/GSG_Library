const addnewbook= require('./../database/queries/addnewbook');
const fs = require('fs');

exports.get= (req, res)=>{
	res.render('addnewbook', { style:'addnewbook'});
};


exports.post = (req, res , next ) => {
	if (!req.body.fileUrl) {
	 return res.send({status : false ,msg:'No file were uploaded'});
	}
	const imagePath = __dirname + '/../../public/img/' + Date.now().toString() + '.' +req.body.fileExtension;
	console.log('imagePathimagePath',imagePath);
	const imageText = req.body.fileData.replace(/^data:image\/\w+;base64,/, '');
	const buffer = new Buffer(imageText, 'base64');

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
