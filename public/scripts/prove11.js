const list = document.getElementById('list') 
const input = document.getElementById('input') 
const submit = document.getElementById('submit')
const socket = io();

const displayList = avengers => {
    list.innerHTML = ''
    for (const a of avengers) {
        list.innerHTML += `<li>${a.name}</li>`
    }
    socket.on('broadcast', function(data){
    let newEmit = data.avengers[data.avengers.length - 1];
    console.log(newEmit);
    list.innerHTML += `<li>${newEmit.name}</li>`
    })
}


fetch('/proves/prove11/fetchAll')
    .then(res => res.json())
    .then(data => {
        displayList(data.avengers)
    })
    .catch(console.error)


submit.onclick = () => {
    let data = {name: input.value}
    fetch('/proves/prove11/insert',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            displayList(data.avengers);
            socket.emit("broadcast", data);
            input.value = ''
        })
        .catch(console.error)
} 