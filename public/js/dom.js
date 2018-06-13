

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


eventListener(mobile, 'blur');

eventListener(book, 'blur');

eventListener(form, 'submit');
