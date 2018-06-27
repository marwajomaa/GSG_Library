const socket = io.connect('http://localhost:3000');
const output = document.getElementById('dropdown-content');
socket.emit('notification');
socket.on('notification',(data)=>{
	console.log(data);
	for (let i in data) {
		output.innerHTML += data[i].status + data[i].userName + ' ';
	}
});

function myFunction() {
	var x = document.getElementById('dropdown-content');
	console.log(x.className.indexOf('dropdown-content'));
	if (x.className.indexOf('hide-dropdown-content') == -1) {
		x.className = x.className.replace('dropdown-content', 'hide-dropdown-content');
	} else {
		x.className = x.className.replace('hide-dropdown-content', 'dropdown-content');
	}
}
