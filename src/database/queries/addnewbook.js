const db = require('./../db_connection');

const addnewbook = (data,cb) => {
	// console.log(data,'ddddddddddddddddddddd');
	const { category ,book_name,publish_date, author,description } = data;
	const picUrl = data.picUrl.split('public/')[1];
	// console.log(picUrl,'pppppppppppppppppppp');
	const insertCategorySQL ={
		text : 'INSERT INTO category(name) VALUES($1) RETURNING *',
		values:[category]
	};

	db.query(insertCategorySQL , (err , category)=>{
		if(err) return cb(err);
		const sql = {
			text: 'INSERT INTO books(book_name,image,publish_year,author,description,category_id) VALUES($1, $2, $3, $4, $5,$6) RETURNING *',
			values: [book_name, `/${picUrl}`, publish_date, author,description ,category.rows[0].id]
		};

		db.query(sql , (err ,bookDetails)=>{
			if(err) return cb(err);
			console.log( bookDetails.rows);
			cb(null , bookDetails.rows);
		});
	});
};


module.exports = addnewbook;
