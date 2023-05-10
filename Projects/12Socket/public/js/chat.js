const socket =io();
socket.on('countupdated',(count)=>{
console.log("count has updated",count);

});

document.querySelector('#increment').addEventListener('click',()=>{
    socket.emit('increment')
    console.log('clicked');
});

