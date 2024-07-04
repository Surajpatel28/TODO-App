let input = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let li = document.querySelector('li');
btn.addEventListener('click', function(event){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = input.value;
    let dlt = document.createElement('button');
    li.appendChild(dlt);
    dlt.classList.add('delete');
    dlt.classList.add('btn');
    dlt.classList.add('btn-danger');
    dlt.classList.add('btn-sm');
    dlt.innerText = 'Delete Item';
    input.value = "";
})
input.addEventListener('keypress', function(event){
    if(event.key == 'Enter'){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = input.value;
    let dlt = document.createElement('button');
    li.appendChild(dlt);
    dlt.classList.add('delete');
    dlt.classList.add('btn');
    dlt.classList.add('btn-danger');
    dlt.classList.add('btn-sm');
    dlt.innerText = 'Delete Item';
    input.value = "";
    }
})


let deleteAll = document.querySelector('.deleteAll');
deleteAll.addEventListener('click', function(){
    ul.innerHTML = "";
})
ul.addEventListener('click', function(event){
    let listItem = event.target.parentElement;
    if(event.target.nodeName == "BUTTON"){
        listItem.remove();
    }
})
