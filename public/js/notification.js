const socket = io.connect('http://localhost:3000');
const output = document.getElementById('dropdown-content');
const alertCount = document.getElementById('alertCount');

socket.emit('notification');
socket.on('notification',(data)=>{
	alertCount.textContent = data.length;
	for (let i in data) {
		const cretaDiv = document.createElement('div');
		cretaDiv.className ='alert';
		const content = document.createTextNode(data[i].status + data[i].userName);
		cretaDiv.appendChild(content);
		output.appendChild(cretaDiv);
	}
});

function showHideNotification() {
	let dropContent = document.getElementById('dropdown-content');
	if (dropContent.className.indexOf('hide-dropdown-content') == -1) {
		dropContent.className = dropContent.className.replace('dropdown-content', 'hide-dropdown-content');
	} else {
		dropContent.className = dropContent.className.replace('hide-dropdown-content', 'dropdown-content');
	}
}
