const {checklentbooks, addToWaitingList}= require('./../database/queries/home');

exports.get = (req, res)=>{
	checklentbooks((err, lentbooks)=>{
		if(err) return res.send('error in getting data');

		res.render('home',{style:'home' ,layout:'second',lentbooks});
	});
};

exports.post = (req, res)=>{
	const {memberName, bookName,date} = req.body;
	console.log(req.body,'reqqqqqqqqqqqq');
	addToWaitingList(memberName, bookName,date,(err, added)=>{
		if(err) return res.send({status : false , message : 'error in adding data'});

		res.redirect('/');
	});
};
