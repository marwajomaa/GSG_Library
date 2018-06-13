

const select = (element) => {
	return document.querySelector(element);
};

let messages = (bookstatus, mobilestatus, fullname, emailValue, bookCopyCount, reservedBookCount, availableBook, notify)=>{
	bookStatus.textContent= bookstatus;
	mobileStatus.textContent= mobilestatus;
	fullName.value=fullname;
	email.value=emailValue;
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

const eventListener = (element, action)=>{
	element.addEventListener(action, ()=>{
		const mobileNumber = mobile.value;
		const bookName = book.value;
		fetch('/insertbook', 'POST', mobileNumber, bookName, (res) => {
			const data = JSON.parse(res);
			const status = data.status;
			errorHandling(status, data);

		});
	});
};
