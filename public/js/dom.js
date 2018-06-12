const select = (element) => {
	return document.querySelector(element);
};

const mobile = select('.mobile');
const fullName = select('[name=fullName]');
const email = select('[name=email]');
const book = select('[name=bookName]');
const form = select('.reserveBook');
const mobileStatus = select('.mobileStatus');
const bookStatus = select('.bookStatus');
const bookCopyMsg = select('[name=bookCopy]');
const reservedCopyMsg = select('[name=reservedCopy]');
const availableCopyMsg = select('[name=availableCopy]');
const notification = select('.notification');
const button = select('[name=button]');

const errorHandling = (status, data) => {
	if(status === 302) {
		mobileStatus.textContent='mobile not exist';
		bookStatus.textContent='available';
		bookCopyMsg.value=data.bookCopy;
		reservedCopyMsg.value=data.count;
		availableCopyMsg.value=data.bookCopy-data.count;
		button.setAttribute('disabled', '');
	}
	else if (status === 500) {
		mobileStatus.textContent='500 error in connection to server.. try again';
	}
	else if (status === 501) {
		bookStatus.textContent='501 error in connection to server.. try again';
	}
	else if (status === 303) {
		bookStatus.textContent='No book Found';
		button.setAttribute('disabled', '');
	}
	else if (status === 305) {
		bookCopyMsg.value=data.bookCopy;
		reservedCopyMsg.value=data.count;
		availableCopyMsg.value=0;
		notification.textContent=`All the Copy of book (${book.value}) are reserved`;
		button.setAttribute('disabled', '');
		bookStatus.textContent='not valid';
	}

	else if(status === 400){
		button.setAttribute('disabled', '');
		notification.textContent='no book found & no mobile number';
	}
	else if(status === 403){
		fullName.value=data.fullName;
		email.value=data.email;
	}
	if (availableCopyMsg.value === 0) {
		notification.textContent=`All the Copy of book (${book.value}) are reserved`;
		bookStatus.textContent='Not valid';
		button.setAttribute('disabled', '');
	}
	if (status === 200){
		notification.textContent='';
		mobileStatus.textContent='Success';
		bookStatus.textContent='available';
		fullName.value=data.fullName;
		email.value=data.email;
		button.removeAttribute('disabled', '');
		console.log(data.count);
	}
};


mobile.addEventListener('blur', (e)=>{
	const mobileNumber = select('.mobile').value;
	const bookName = book.value;
	fetch('/insertbook', 'POST', mobileNumber, bookName, (res) => {
		const data = JSON.parse(res);
		const status = data.status;
		errorHandling(status, data);

	});
});

book.addEventListener('blur', (e)=>{
	const mobileNumber = select('.mobile').value;
	const bookName = book.value;
	fetch('/insertbook', 'POST', mobileNumber, bookName, (res) => {
		const data = JSON.parse(res);
		const status = data.status;
		errorHandling(status, data);
	});
});

form.addEventListener('submit', function (event) {
	event.preventDefault();
	const bookName = book.value;
	const mobileNumber = select('.mobile').value;
	fetch('/insertbook', 'POST', mobileNumber, bookName, (res) => {
		const data = JSON.parse(res);
		const status = data.status;
		errorHandling(status, data);

	});
});
