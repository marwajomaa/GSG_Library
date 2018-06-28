
const remainderDay = (endDate)=>{
	let todayDate = new Date();
	let expiredDate = new Date(endDate);
	if((expiredDate.getTime() - todayDate.getTime())> 172800000)
		return  false;
};
module.exports = remainderDay;
