const modale = document.getElementsByClassName('modale');
const deleteBtns = document.querySelectorAll('.deleteBtn');
const deleteSpans = document.getElementsByClassName('deletClose');
const cancel = document.getElementsByClassName('cancel');
const search = document.getElementById('search');
const modall = document.querySelector('.modall');
// const trigger = document.querySelector('.trigger');
const closeButton = document.querySelector('.closes-button');
const deletebookbtn = document.querySelectorAll('.deletebookbtn');
var bookId = 0;
Array.from(deleteBtns).forEach((btn,i) =>{
	btn.onclick = () => {
		modale[i].style.display = 'block';
	};
});

Array.from(deleteSpans).forEach((span,i) =>{
	span.onclick = function() {
		modale[i].style.display = 'none';
	};

});

Array.from(cancel).forEach((span,i) =>{
	span.onclick = function() {
		modale[i].style.display = 'none';
	};

});

// document.body.onclick = function(event) {
// 	console.log(event.target,'jjjjjjjjjjjjjjjjj');
// 	if (event.target !== modale) {
// 		document.getElementById('myModale').style.display = 'none';
// 		console.log(1);
// 	}
// };

function toggleModal(e) {
	modall.classList.toggle('show-modall');
	bookId = e.path[6].childNodes[0].textContent;
}

function windowOnClick(event) {
	if (event.target === modall) {
		toggleModal();
	}
}

search.addEventListener('keyup', searchFunction);

function searchFunction() {
	if (search.value === '') return;
	const data = JSON.stringify({
		search : search.value.trim(),
	});
	const headers = {
		headers: {
			'content-type': 'application/json',
		},
		method: 'POST',
		body: data,
	};

	fetch('/search', headers)
		.then(res => res.json())
		.then((res) => {
			if (res.error) {
				swal(error.message);
			} else {
				console.log(res);
				renderTableResults(res);
			}
		})
		.catch((err) => {
			swal('sorry there is an error in data' +' '+ err);

		});
}

function renderTableResults(searchResults){

	const contanier = document.getElementById('contanier');

	const divTableBody=document.querySelector('.divTableBody');
	divTableBody.innerHTML='';

	searchResults.map(result => {

		const divTableRow = document.createElement('div');
		divTableRow.classList.add('divTableRow');

		const divTableCell1 = document.createElement('div');
		divTableCell1.classList.add('divTableCell');
		divTableCell1.textContent = result.id;

		const divTableCell2 = document.createElement('div');
		divTableCell2.classList.add('divTableCell');
		divTableCell2.textContent =result.book_name;

		const divTableCell3 = document.createElement('div');
		divTableCell3.classList.add('divTableCell');
		divTableCell3.textContent = result.author;

		const divTableCell4 = document.createElement('div');
		divTableCell4.classList.add('divTableCell');
		divTableCell4.textContent = result.name;

		const divTableCell5 = document.createElement('div');
		divTableCell5.id='divTableCell5';
		divTableCell5.classList.add('divTableCell');
		if (result.book_id) {
			const span = document.createElement('span');
			const i = document.createElement('i');
			i.classList.add('far','fa-check-circle');
			span.appendChild(i);
			divTableCell5.appendChild(span);
		}
		// trigger.classList.add('deleteBtn');
		const divTableCell6 = document.createElement('div');
		divTableCell6.classList.add('divTableCell');

		// const trigger = document.createElement('button');

		const action = document.createElement('div');
		action.classList.add('action');

		const edit =  document.createElement('div');
		edit.classList.add('edit');
		const span1 = document.createElement('span');
		const i1 = document.createElement('i');
		i1.classList.add('fas' ,'fa-pencil-alt');
		span1.appendChild(i1);
		edit.appendChild(span1);
		const divDelete=  document.createElement('div');
		divDelete.classList.add('divDelete');
		const trigger = document.createElement('button');
		trigger.classList.add('trigger');
		trigger.id = result.id;
		const span2 = document.createElement('span');
		const i2 = document.createElement('i');
		i2.classList.add('fas','fa-trash-alt');
		divDelete.appendChild(trigger);
		span2.appendChild(i2);
		trigger.appendChild(span2);
		trigger.addEventListener('click', toggleModal);
		closeButton.addEventListener('click', toggleModal);
		window.addEventListener('click', windowOnClick);
		deletebookbtn.forEach((btn,i) => {
			deletebookbtn[i].addEventListener('click', deletebook);
		});
		action.appendChild(edit);
		action.appendChild(divDelete);
		divTableCell6.appendChild(action);
		divTableRow.appendChild( divTableCell1);
		divTableRow.appendChild( divTableCell2);
		divTableRow.appendChild( divTableCell3);
		divTableRow.appendChild( divTableCell4);
		divTableRow.appendChild( divTableCell5);
		divTableRow.appendChild(divTableCell6);
		divTableBody.appendChild(divTableRow);

	});
	contanier.appendChild(divTableBody);

	if(searchResults.length === 0 ){
	    swal('Sorry there is no result found!');
	}
}

function deletebook(){
	const data = JSON.stringify({
		id:bookId,

	});
	const headers = {
	    headers: {
	        'content-type': 'application/json',
	    },
	    method: 'POST',
	    body: data,
	};

	fetch('/deletebookfromsearch', headers)
	    .then(res => res.json())
	    .then((res) => {
	        console.log(res.status);
	        // console.log(res);
	        if (!res.status) {
	            swal(res.message);
	        } else {
	        // console.log(res.status);
	            swal('Book is successfully deleted');
	            window.location.pathname='/GSG_Library';
	        }
	    })
	    .catch((err) => {
	        swal('sorry there is an error in data' +' '+ err);

	    });
}
