

function split(date){
	var dateparts =  date.toString().slice(4,16);
	return dateparts;
}

module.exports = split;
