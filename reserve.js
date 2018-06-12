const selectMember = require('../database/queries/selectMember');
const bookNameQuery = require('../database/queries/selectBook');
const bookReservedNum = require('../database/queries/countLendingBooks');

exports.get = (req, res, next)=>{
	res.render('reserveBook', { style: 'css/style-reserveBook.css' });
};

exports.post = (req, res)=>{

	const {mobileNumber} = req.body;
	const {bookName} = req.body;


	bookNameQuery(bookName, (error, bookResult)=>{
		if (error || !bookResult.length) {
			console.log('no book');
			return  res.send({status:400});
		}

		else {


			selectMember(mobileNumber, (err, userData) => {
				if (err) {
					return res.send({status:500});
				}

				if (!userData.length && bookResult.length)
				{

					bookReservedNum(bookName, (err, copyReservedCount) => {
						if (err) {
							return res.send({status:502});
						}

						if (bookResult[0].num_copy == copyReservedCount[0].count) {
							return    res.send({status:305, count:copyReservedCount[0].count, bookCopy:bookResult[0].num_copy});
						} else if (userData.length && bookResult.length && copyReservedCount[0].count != 0) {
    					return res.status(200).send({status:200, count:copyReservedCount[0].count, bookCopy:bookResult[0].num_copy, BookName:bookResult[0].book_name, fullName: userData[0].full_name, email: userData[0].email});
    				}
						else {
							return res.send({status:302, count:copyReservedCount[0].count, bookCopy:bookResult[0].num_copy});
						}

					});

				}
				else if (!userData.length && !bookResult.length) {

					return  res.send({status:400});
				}
				else {
					return  res.send({status:403, fullName: userData[0].full_name, email: userData[0].email});
				}
			});

		}
	});

};



const parseResponse = (res, cb)=>{
	const data = JSON.parse(res);
	const status = data.status;
	cb(data);
};


parseResponse(res, (data)=>{
	errorHandling(status, data);
});
