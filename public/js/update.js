const modals = document.getElementsByClassName('modal');
const btns = document.getElementsByClassName('myBtn');
const spans = document.getElementsByClassName('close');
const updateButton = document.querySelectorAll('.update');
const description = document.getElementsByClassName('description');
const category = document.getElementsByClassName('category');
const authors = document.getElementsByClassName('author');
const bname = document.getElementsByClassName('bname');
const publish_year = document.getElementsByClassName('publish_year');
Array.from(btns).forEach((btn, i) => {
	btn.onclick = () => {
		modals[i].style.display = 'block';
	};
});
Array.from(spans).forEach((span, i) => {
	span.onclick = function() {
		modals[i].style.display = 'none';
	};

});
updateButton.forEach((btn,i) => {
	updateButton[i].addEventListener('click', (event) => {
		event.preventDefault();

		const data = JSON.stringify({
			id: parseInt(event.target.id)+1,
			bname: bname[i].value,
			author: authors[i].value,
			publish_year: publish_year[0].value,
			description: description[i].value,
			category: category[i].value

		});
		fetch('/GSG_Library', {
			credentials: 'include',
			headers: {
				'content-type': 'application/json',
			},
			method: 'POST',
			body: data
		})
			.then(res => res.json())
			.then((msg) => {
				console.log(msg);
			})
			.catch((error) => {
				console.log('Request failure: ', error);
			});

	});
});
