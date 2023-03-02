var DataObj =
{
    header: ["index","name", "subject", "marks", "action", "methods"],
    data: [
        {
            name: {
                type: "input",
                value: "bhavya",
                inputType: "text"
            },
            subject: {
                type: "input",
                value: "Cpp",
                inputType: "text"
            },
            marks: {
                type: "input",
                value: "100",
                inputType: "number"
            },
            action: {
                type: "html",
                value: "<button class='btn btn-outline-success mx-2'>Pass</button><button  class='btn btn-outline-success mx-2'>Fail</button>",
            },
            methods: {
                type: "html",
                value: "",
            }
        },
        {
            name: {
                type: "input",
                value: "Chirag",
                inputType: "text"
            },
            subject: {
                type: "input",
                value: "Designer",
                inputType: "text"
            },
            marks: {
                type: "input",
                value: "100",
                inputType: "number"
            },
            action: {
                type: "html",
                value: "<button class='btn btn-outline-success mx-2'>Pass</button><button  class='btn btn-outline-success mx-2'>Fail</button>",
            },
            methods: {
                type: "html",
                value: "",
            }
        }
    ]
}

$(document).ready(function () {
    var $table = $('#mainTable');
    createHeader($table);
    initializeTable($table);
    initiateInputMapping();
    indexing();
});

const printArrayInConsole = ()=>{
    console.table(DataObj.data);
}

const createHeader = (rootNode) => {
    var thead = "<thead><tr>"
    DataObj.header.forEach((element) => {
        thead += `<th>${element}</th>`;
    })
    thead += "</tr></thead>";
    $(rootNode).html(thead);
}

const initializeTable = (rootNode) => {
    var tbody = `<tbody>`
    DataObj.data.forEach((element) => {
        tbody += createCells(element);
    })
    tbody += "</tbody>"
    $(rootNode).append(tbody);
}

const appendRow = (obj) => {
    var row = createCells(obj);
    $('#mainTable tbody').append(row);

}

const createCells = (obj) => {
    var keys = DataObj.header;
    var row = "<tr>"
    row += "<td class='indexes'></td>"
    keys.forEach((key) => {
        if (obj[key]) {
            if (obj[key].type == "input") {
                row += `<td><input type="${obj[key].inputType}" value="${obj[key].value}"></td>`;
            }
            else {
                row += `<td>${obj[key].value}</td>`
            }
        }
    });
    row += `</tr>`
    return row;
}

const addRow = () => {
    var newObj = {
        name: {
            type: "input",
            value: "",
            inputType: "text"
        },
        subject: {
            type: "input",
            value: "",
            inputType: "text"
        },
        marks: {
            type: "input",
            value: "",
            inputType: "number"
        },
        action: {
            type: "html",
            value: "<button class='btn btn-outline-success mx-2'>Pass</button><button  class='btn btn-outline-success mx-2'>Fail</button>",
        },
        methods: {
            type: "html",
            value: "<button class='close-btn'>X</button>",
        }
    }

    DataObj.data.push(newObj);
    appendRow(newObj);
    initiateInputMapping();
    indexing();
    return false;
}

const deleteRow = (targetRow,rowIndex) => {
    DataObj.data.splice(rowIndex,1);
    targetRow.remove();
    indexing();
    initiateInputMapping();
}

const initiateInputMapping = () => {
    $('#mainTable tbody tr').each(function () {
        var rowIndex = $(this).index();
        var dataKeys = Object.keys(DataObj.data[rowIndex]).filter(ele => DataObj.data[rowIndex][ele].type == "input");
        $(this).find('input').each(function (index) {
            $(this).off().on('input', (e) => {
                DataObj.data[rowIndex][dataKeys[index]].value = e.target.value;
            });
        })
        $(this).find('.close-btn').each(function (index) {
            $(this).off().on('click', (e) => {
                deleteRow($(e.target).parents('tr'),rowIndex);
                return false;
            });
        })
    });
}

const indexing = ()=>{
    $('.indexes').each(function(i,e){
        $(e).html(i+1);
    })
}
