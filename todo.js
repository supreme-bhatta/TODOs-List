document.addEventListener("DOMContentLoaded", () => {
    display();
});
function update(){
    let a = document.getElementById("todo").value;
    let b = document.getElementById("description").value;
    let c = document.getElementById("date").value;
    if(localStorage.getItem('items') == null){
        let itemsarray = [[a,b,c]];
        localStorage.setItem('items',JSON.stringify(itemsarray));
        display();

    }
    else{
        let itemarraystr = localStorage.getItem('items');
        let itemsarray = JSON.parse(itemarraystr);
        itemsarray.push([a,b,c]);   
        localStorage.setItem('items',JSON.stringify(itemsarray));
        display();
    }
    document.getElementById("todo").value = "";
    document.getElementById("description").value = "";
    document.getElementById("date").value = "";
}

function display(){
    let itemarraystr = localStorage.getItem('items');
    let itemsarray = JSON.parse(itemarraystr);
    let str = "";
    itemsarray.forEach((element,index) => {
        str += `<tr>
        <td>${index + 1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
        <td><button onclick = "del(${index})" class = "del">Delete</button></td>
        </tr>`
    });
    document.getElementById("add").innerHTML = str;
}

function del(index){
    let itemarraystr = localStorage.getItem('items');
    let itemsarray = JSON.parse(itemarraystr);
    itemsarray.splice(index,1);
    localStorage.setItem('items',JSON.stringify(itemsarray));
    display();
}

function clr(){
    localStorage.clear();
    document.getElementById("add").innerHTML = "";
}