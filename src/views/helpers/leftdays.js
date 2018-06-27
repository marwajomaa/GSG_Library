function  leftdays(endDate){
	let oneDay = 24*60*60*1000;
	let end_date = endDate;
	let today = new Date();
	let diffDays = Math.round(Math.abs((end_date.getTime() - today.getTime())/(oneDay)));
	return diffDays;
}
module.exports = leftdays;
