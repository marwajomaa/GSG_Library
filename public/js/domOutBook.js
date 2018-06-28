const buttonBook= document.querySelectorAll('.buttonBook');
buttonBook.forEach((e)=>{
	e.addEventListener('click', ()=>{
		const bookId=e.value;
		const id = {bookId};

		fetchUrl('/outBook', 'POST',id, (res) => {
			const data = JSON.parse(res);
			const status = data.status;

			if(status === 500){
				window.location = '/serverError';
			}
			else if (status===302){
				location.reload();
			}

		});
	});
});
