const socket = io.connect('http://localhost:3000');

const output = document.getElementById('output');
const btn = document.getElementById('btn');

// btn.addEventListener('click',()=>{
socket.emit('notification');
// });


// socket.on('notification',(data2)=>{
// 	console.log('data2', data2);
// 	// output.innerHTML='ahmad' + data.name;
// });

socket.on('notification',(data)=>{
	console.log('data', data);
	output.innerHTML='ahmad' + data.name;
});
