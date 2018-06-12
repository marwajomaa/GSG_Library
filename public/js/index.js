const fetch = (url, method, mobileNumber, bookName, callback)=>{
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			var response = xhr.responseText;
			callback(response);
		}
	};

	var data= JSON.stringify({mobileNumber, bookName});
	xhr.open(method, url);
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.send(data);
};
