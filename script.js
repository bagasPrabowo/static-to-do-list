function addList(){
    let listItem = document.getElementById('list-item');
    let newList = `<li>${getText()}</li>`;
    listItem.insertAdjacentHTML('beforeend', newList);
}

function getText(){
    return document.querySelector('input').value;
}