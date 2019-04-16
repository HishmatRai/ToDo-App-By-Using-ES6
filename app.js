// ********************* Heading **************************************
let user = document.getElementById('mainBodyDiv');
let heading = document.createElement('h1');
let headinga = document.createTextNode('ToDo App');
heading.appendChild(headinga);
user.appendChild(heading)


// ********************* Input Filed **************************************

let inputField = document.createElement('input');
inputField.setAttribute('type', 'text');
inputField.setAttribute('class', 'w3-input');
inputField.setAttribute('id', 'inputData');
inputField.setAttribute('placeholder', 'Please Enter Your Data');
user.appendChild(inputField);


// ********************* br **************************************
let lineBreak = document.createElement('br');
user.appendChild(lineBreak);

// ********************* Button **************************************
let createButton = document.createElement('input');
createButton.setAttribute('type', 'button');
createButton.setAttribute('id', 'submitBtn');
createButton.setAttribute('value', 'Submit');
createButton.setAttribute('onClick', 'submitData()');
user.appendChild(createButton);


// ********************* function submitData **************************************
submitData=()=>{
    let getData = document.getElementById('inputData').value;
    if(getData === ""){
        alert('Please Enter Something !');
        return false;
    }
    else{
// ********************* show data **************************************

let show = document.getElementById('showData');
let createUl = document.createElement('ul');
show.appendChild(createUl);
let crateLi = document.createElement('li');
crateLi.setAttribute(`id`,getData)
createUl.appendChild(crateLi);
let pushDataInLi = document.createTextNode(getData);
crateLi.appendChild(pushDataInLi);

// ********************* local Storage **************************************

let localStor = localStorage.getItem('Data');
if (localStor === null){
    localStor = []
}
else{
localStor = JSON.parse(localStor)
}
localStor.push(getData)

localStorage.setItem('Data', JSON.stringify(localStor));
// ********************* edit button **************************************
let editBtn = document.createElement('input');
editBtn.setAttribute('type', 'button');
editBtn.setAttribute('value', 'Edit');
editBtn.setAttribute('id', 'Edit');
crateLi.appendChild(editBtn);


// ********************* delete button **************************************

let deleteBtn = document.createElement('input');
deleteBtn.setAttribute('type', 'button');
deleteBtn.setAttribute('value', 'Delete');
crateLi.appendChild(deleteBtn)

// ********************* edit function **************************************


editBtn.addEventListener('click', function (){
    let li = this.parentNode;
    let text = prompt('Entere Value', li.id);
    li.innerText = text;
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
//dfds
let getDataForEdit = localStorage.getItem('Data');
getDataForEdit = JSON.parse(getDataForEdit);
console.log(getDataForEdit);
for (let v = 0 ; v < getDataForEdit.length; v++){
    if (getDataForEdit[v] === li.id) {
        console.log(getDataForEdit[v])
        console.log(li)
        getDataForEdit.splice(v,1, text);
     localStorage.setItem(`Data`,JSON.stringify(getDataForEdit));
     li.setAttribute(`id` , text)
    }
}
    
})
document.getElementById("inputData").value = "";

// ********************* delete function **************************************


deleteBtn.addEventListener('click', function(){
    let li2 = this.parentNode;
    console.log(li2)
    let getDataForDelete = localStorage.getItem('Data');
    getDataForDelete = JSON.parse(getDataForDelete);
    console.log(getDataForDelete)
    for (let v = 0 ; v < getDataForDelete.length; v++){
        if (getDataForDelete[v] === li2.id) {
            console.log(getDataForDelete[v])
            console.log(li2)
            getDataForDelete.splice(v,1);
         localStorage.setItem(`Data`,JSON.stringify(getDataForDelete));
       
       
        }
    }
    li2.remove();
})



    }
}