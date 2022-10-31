let idx = 0;
function addList(){
    let listItem = document.getElementById('list-item');
    let newList = 
            `<div>
                <li id="list${idx}">${getText()}</li>
                <button class="btn" type="submit" onclick="editList(${idx})">Edit</button>
                <button class="btn" type="submit" onclick="deleteList(this)">Delete</button>
            </div>`;
    listItem.insertAdjacentHTML('beforeend', newList);
    idx++;
}

function getText(){
    return document.querySelector('input').value;
}

function deleteList(list){
    list.parentNode.remove();
}

function editList(idx){
    let listIdx = document.getElementById(`list${idx}`);
    listIdx.innerHTML = getText();
}