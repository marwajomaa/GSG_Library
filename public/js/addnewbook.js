const fileUrl = document.querySelector('.fileUrl');
const book_name = document.querySelector('.book_name');
const publish_date = document.querySelector('.publish_date');
const author = document.querySelector('.author');
const category  = document.querySelector('.Category ');
const description  = document.querySelector('.description');
const btn =   document.getElementById('bookForm');

let myFileData = '';
btn.addEventListener('submit',addNewBook);


function addNewBook(e){
	e.preventDefault();
	var reader  = new FileReader();
	reader.addEventListener('load', function () {
		myFileData = reader.result;
		console.log(myFileData,'fffffffffffffff');
		sendTheBD(e , myFileData);
	}, false);
	e.preventDefault();

	if (fileUrl.files[0]) {
		reader.readAsDataURL(fileUrl.files[0]);
	}

}

function sendTheBD (e, file){
	const {fileUrl,book_name,publish_date,author,category }= e.target;
	const data = {
		fileUrl: fileUrl.value.trim(),
		fileExtension:fileUrl.value.split('.')[fileUrl.value.split('.').length - 1 ],
		fileData:file,
		bookname :book_name.value.trim(),
		PublishDate : publish_date.value.trim(),
		author :author.value.trim(),
		category :category.value.trim(),
		description :description.value.trim()
	};
	console.log(data,'data');

	const headers = {
		headers: {
			'content-type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(data),
	};


	fetch('/addnewbook', headers)
		.then(res => res.json())
		.then((res) => {
			console.log(res);
			if (!res.status) {
				swal(res.message);
			} else {
				// console.log(res.status);
				swal('Book is successfully added');
			}
		})
		.catch((err) => {
			swal('sorry there is an error in data' +' '+ err);

		});
}
