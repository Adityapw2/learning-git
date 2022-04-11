document.querySelector('#form').addEventListener('submit', myfuc());

var contactList = localStorage.getItem('contactlist');
var newList;
if(contactList == null){
    newList = []
} else {
    newList = JSON.parse(contactList);
}
function myfuc(){
    event.preventDefault();
    var conobj = {
        name: document.querySelector("#name").value ,
        number: document.querySelector("#number").value
    };
    newList.push(conobj);
    localStorage.setItem('contactList', JSON.stringify(contactList))
}