
const fetch = (url, method,data, callback)=>{
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			var response = xhr.responseText;
			callback(response);
		}

	};

	data= JSON.stringify({data});
	console.log('method',method.method,url);
	xhr.open(method.method, url);
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.send(data);
};
