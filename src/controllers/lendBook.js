const selectMember = require('../database/queries/selectMember');
const bookNameQuery = require('../database/queries/selectBook');
const bookReservedNum = require('../database/queries/countLendingBooks');
const reserv = require('../database/queries/lendBook');

exports.get = (req, res)=>{
	res.render('lendBook', { style: 'css/style-reserveBook.css' });
};

exports.post = (req, res)=>{

	const {mobileNumber} = req.body;
	const {bookName} = req.body;

	bookNameQuery.bookName(bookName, (error, bookResult)=>{
		if (error || !bookResult.length) {
			return  res.send({status:400,  availableCopy:0 , count:0, bookCopy:0});
		}

		else {

			bookReservedNum(bookName, (err, copyReservedCount) => {
				if (err) {
					return res.send({status:401});
				}

				if (bookResult[0].num_copy == copyReservedCount[0].count) {
					return    res.send({status:305, availableCopy:0 , count:copyReservedCount[0].count, bookCopy:bookResult[0].num_copy});
				}

				selectMember(mobileNumber, (err, userData) => {
					if (err || !userData.length) {
						return res.send({status:402, books:bookResult, availableCopy:bookResult[0].num_copy-copyReservedCount[0].count , count:copyReservedCount[0].count, bookCopy:bookResult[0].num_copy});
					}

					if (userData.length)
					{

						if (bookResult[0].num_copy != copyReservedCount[0].count) {
							return    res.send({status:310, books:bookResult, fullName: userData[0].full_name, email: userData[0].email, availableCopy:bookResult[0].num_copy-copyReservedCount[0].count , count:copyReservedCount[0].count, bookCopy:bookResult[0].num_copy});
						}

					}

				});

			});

		}
	});


	const {start}=req.body;
	const {end}=req.body;

	if(bookName && mobileNumber && start && end){

		reserv(bookName,mobileNumber, start, end, (err, data3) => {
			if (err) {
				console.log('soory', err);
			} else {
				console.log('ok');

			}
		});
	}



};
