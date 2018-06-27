const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];
const memberName = document.querySelector('.memberName');
const bookName = document.querySelector('.bookName');
const date = document.querySelector('.date');
const submit = document.getElementById('form');
// When the user clicks the button, open the modal
btn.onclick = function() {
	modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

submit.addEventListener('submit', addToWaitingList);
function addToWaitingList(){
	console.log('kkkkkkkkk');
	const data = JSON.stingify({
		memberName : memberName.value.trim(),
		bookName : bookName.value.trim(),
		date : date.value.trim(),

	});

	const headers = {
		headers: {
			'content-type': 'application/json',
		},
		method: 'POST',
		body: data,
	};


	fetch('/addToWaitingList', headers)
		.then(res => res.json())
		.then((res) => {
			if (res.error) {
				swal(error.message);
			} else {
				console.log(res);
				swal('you are successfully added to waiting list');
			}
		})
		.catch((err) => {
			swal('sorry there is an error in data' +' '+ err);

		});
}
