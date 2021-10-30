function getupdate() {
    console.log('Updating .......');
    tit = document.getElementById('title').value;
    des = document.getElementById('description').value;
    if (localStorage.getItem('itemjason') == null) {
        itemjasonarray = [];
        itemjasonarray.push([tit, des]);
        localStorage.setItem('itemjason', JSON.stringify(itemjasonarray))
    }
    else {
        itemjasonstr = localStorage.getItem('itemjason');
        itemjasonarray = JSON.parse(itemjasonstr);
        itemjasonarray.push([tit, des]);
        localStorage.setItem('itemjason', JSON.stringify(itemjasonarray))
    }
    update()
}
function update() {
    if (localStorage.getItem('itemjason') == null) {
        itemjasonarray = [];
        localStorage.setItem('itemjason', JSON.stringify(itemjasonarray))
    }
    else {
        itemjasonstr = localStorage.getItem('itemjason');
        itemjasonarray = JSON.parse(itemjasonstr);
    }
    //populate the table
    let tablebody = document.getElementById('tablebody');
    let str = "";
    itemjasonarray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button onclick="deleted(${index})" class="btn btn-sm btn-danger">Delete</button></td>
    </tr> `

    });
    tablebody.innerHTML = str;
}
add = document.getElementById('add');
add.addEventListener('click', getupdate)
update();
function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itemjasonstr = localStorage.getItem('itemjason');
    itemjasonarray = JSON.parse(itemjasonstr);
    // Delete itemIndex element from the array
    itemjasonarray.splice(itemIndex, 1);
    localStorage.setItem('itemjason', JSON.stringify(itemjasonarray))
    update();

}
function clearlist() {
    if (confirm("Do you areally want to clear?")) {
        console.log('Clearing the storage')
        localStorage.clear();
        update()
    }
}