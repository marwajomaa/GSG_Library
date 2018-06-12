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
// const button = select('[name=button]');

let messages = (bookstatus, mobilestatus, fullname, emailV, bookCopyCount, reservedBookCount, availableBook, notify)=>{
	bookStatus.textContent= bookstatus;
	mobileStatus.textContent= mobilestatus;
	fullName.value=fullname;
	email.value=emailV;
	bookCopyMsg.value=bookCopyCount;
	reservedCopyMsg.value=reservedBookCount;
	availableCopyMsg.value=availableBook;
	notification.textContent=notify;
};

const errorHandling = (status, data) => {
	if(status === 400){
		messages('book not exist', '', '', '', data.bookCopy, data.count, data.availableCopy, '');
	}
	if(status === 305){
		const notify = `All the Copy of book (${book.value}) are reserved`;
		messages('All Copy Reserved', '', '', '', data.bookCopy, data.count, data.availableCopy, notify);

	}
	if(status === 310){
		messages('available', 'Available User', data.fullName, data.email, data.bookCopy, data.count, data.availableCopy, '');

	}
	if(status === 402){
		messages('available', 'User Not Found', '', '', data.bookCopy, data.count, data.availableCopy, '');
	}
};


mobile.addEventListener('blur', ()=>{
	const mobileNumber = mobile.value;
	const bookName = book.value;
	fetch('/insertbook', 'POST', mobileNumber, bookName, (res) => {
		const data = JSON.parse(res);
		const status = data.status;
		errorHandling(status, data);

	});
});

book.addEventListener('blur', ()=>{
	const mobileNumber = mobile.value;
	const bookName = book.value;
	fetch('/insertbook', 'POST', mobileNumber, bookName, (res) => {
		const data = JSON.parse(res);
		const status = data.status;
		errorHandling(status, data);
	});
});

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const bookName = book.value;
	const mobileNumber = mobile.value;
	fetch('/insertbook', 'POST', mobileNumber, bookName, (res) => {
		const data = JSON.parse(res);
		const status = data.status;
		errorHandling(status, data);

	});
});
