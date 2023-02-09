//////////////// add row event listener  //////////////////
const maxRowNumber = 5;


////////////////  Gets Last Row Id //////////////////
function getLastId(){
    return document.getElementsByClassName('tablerRow').length;
}



//////////////// Create Element //////////////////
function createElement(){


    var tr = document.createElement('tr');
    tr.classList.add('tablerRow');

    var tdForId = document.createElement('td');
    tdForId.classList.add('counter');
    tdForId.innerHTML = getLastId()+1;


    var tdForInput = document.createElement('td');
    var input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('placeholder','Enter your text here');
    input.classList.add('form-control');
    tdForInput.appendChild(input);


    var tdForEdit = document.createElement('td');
    var button = document.createElement('button');
    button.innerHTML = "X";
    button.setAttribute('onclick','deleteRow(this)');
    button.classList.add('btn');
    button.classList.add('btn-outline-danger');
    tdForEdit.appendChild(button);

    tr.appendChild(tdForId);
    tr.appendChild(tdForInput);
    tr.appendChild(tdForEdit);
    return tr;
}



////////////////  Add Elements to provided parent ////////////////// 
function addElement(parent){
    var element = createElement();
    parent.appendChild(element);
}


////////////////  Check if maximum row limit is reached  //////////////////
function checkRowsOffset(){
    if(getLastId() >= maxRowNumber){
        document.getElementById('addBtn').setAttribute('disabled','true');
    }
    else{
        document.getElementById('addBtn').removeAttribute('disabled');
    }
}


//////////////// add row event listener  //////////////////
function addRow(){
    if(getLastId() <= maxRowNumber){
        var mainTableBody = document.getElementById('mainTableBody');
        addElement(mainTableBody);
        checkRowsOffset();
    }
    else{
        alert('Maximum row creation reached');
    }
}


//////////////// delete row event listener  //////////////////
deleteRow = (element)=>{
    element.parentElement.parentElement.remove();
    checkRowsOffset();
    updateIndexing();
}


//////////////// updates the indexing of all rows after each delete  //////////////////
function updateIndexing(){
    var cols = document.querySelectorAll('.counter');
    for (let index = 1; index <= cols.length; index++) {
        cols[index-1].innerHTML = index;
    }
}

function refresh(){
    var rows = document.getElementsByClassName('tablerRow');
    console.log(rows);
    Array.from(rows).forEach((element)=>{
        element.remove();
    });
    checkRowsOffset();
}