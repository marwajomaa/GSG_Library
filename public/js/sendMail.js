const sendEmail = document.querySelectorAll('.send-email');
sendEmail.forEach((i) => {
	const leftdays = i.value;
	const idbook= parseInt(i.id);
	const intleftdays = parseInt(leftdays);
	if(intleftdays < 0){
		i.style.display  ='block';
		i.addEventListener('click', () => {
			fetchUrl('/dashboard','post',idbook,(res)=>{


			});

		});
	}
});
