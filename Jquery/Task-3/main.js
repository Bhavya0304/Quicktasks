
var Students ={ 
    rows:["name","subject","marks","actions"],
    rowsInfo:[
        {
            type:"string"
        },
        {
            type:"string"
        },
        {
            type:"number",
            injectval:"%"
        },
        {
            type:"none"
        }
    ],
    data:[
    [
        {
            row:"name",
            value:"Joshi Bhavya",
            class:"",
            show:true,
            type:"input",
            validate:"defaultname"
        },
        {
            row:"subject",
            value: "Cpp",
            class:"",
            show:true,
            type:"input",
            validate:"defaultname"

        },
        {
            row:"marks",
            value: "84",
            class:"",
            show:true,
            type:"input",
            validate:"custom",
            customValidation:(value)=>{
                // debugger;   
                console.log(value);
                var number = parseInt(value);
                if(isNaN(value)){
                    return {
                        isValid:false,
                        messege:"Marks should be between 1 to 100 in percentage!"
                    };
                }
                else if (number < 0 || number > 100 || value ==""){
                    return {
                        isValid:false,
                        messege:"Marks should be between 1 to 100 in percentage!"
                    };
                }
                else{
                    return {
                        isValid:true
                    };
                }
            },
            events:(e)=>{
                if(!(e.keyCode >= 48 && e.keyCode <= 57)){
                    e.preventDefault();
                }
            }

        },
        {
            row:"actions",
            value: `<button class="btn btn-success mx-2 pass curr-active" onclick="removeOutlineClass(this)">Pass</button><button class="btn btn-outline-danger fail" onclick="removeOutlineClass(this)">fail</button>`,
            class:"",
            show:true,
            type:"html"

        },
    ],
    [
        {
            row:"name",
            value:"Joshi Bhavya",
            class:"",
            show:true,
            type:"input",
            validate:"defaultname"
        },
        {
            row:"subject",
            value: "ReactJs",
            class:"",
            show:true,
            type:"input",
            validate:"defaultname"

        },
        {
            row:"marks",
            value: "99",
            class:"",
            show:true,
            type:"input",
            validate:"custom",
            customValidation:(value)=>{
                var number = parseInt(value);
                if(isNaN(value)){
                    return {
                        isValid:false,
                        messege:"Marks should be between 1 to 100 in percentage!"
                    };
                }
                else if (number < 0 || number > 100 || value ==""){
                    return {
                        isValid:false,
                        messege:"Marks should be between 1 to 100 in percentage!"
                    };
                }
                else{
                    return {
                        isValid:true
                    };
                }
            },
            events:(e)=>{
                if(!(e.keyCode >= 48 && e.keyCode <= 57)){
                    e.preventDefault();
                }
            }

        },
        {
            row:"actions",
            value: `<button class="btn btn-success mx-2 pass curr-active" onclick="removeOutlineClass(this)">Pass</button><button class="btn btn-outline-danger fail" onclick="removeOutlineClass(this)">fail</button>`,
            class:"",
            show:true,
            type:"html"

        },
    ],
    [
        {
            row:"name",
            value:"Hemang",
            class:"",
            show:true,
            type:"input",
            validate:"defaultname"
        },
        {
            row:"subject",
            value: "Javascript",
            class:"",
            show:true,
            type:"input",
            validate:"defaultname"

        },
        {
            row:"marks",
            value: "99",
            class:"",
            show:true,
            type:"input",
            validate:"custom",
            customValidation:(value)=>{
                var number = parseInt(value);
                if(isNaN(value)){
                    return {
                        isValid:false,
                        messege:"Marks should be between 1 to 100 in percentage!"
                    };
                }
                else if (number < 0 || number > 100 || value ==""){
                    return {
                        isValid:false,
                        messege:"Marks should be between 1 to 100 in percentage!"
                    };
                }
                else{
                    return {
                        isValid:true
                    };
                }
            },
            events:(e)=>{
                if(!(e.keyCode >= 48 && e.keyCode <= 57)){
                    e.preventDefault();
                }
            }

        },
        {
            row:"actions",
            value: `<button class="btn btn-success mx-2 pass curr-active" onclick="removeOutlineClass(this)">Pass</button><button class="btn btn-outline-danger fail" onclick="removeOutlineClass(this)">fail</button>`,
            class:"",
            show:true,
            type:"html"

        },
    ],
    [
        {
            row:"name",
            value:"Chirag",
            class:"",
            show:true,
            type:"input",
            validate:"defaultname"
        },
        {
            row:"subject",
            value: "Dotnet",
            class:"",
            show:true,
            type:"input",
            validate:"defaultname"

        },
        {
            row:"marks",
            value: "100",
            class:"",
            show:true,
            type:"input",
            validate:"custom",
            customValidation:(value)=>{
                var number = parseInt(value);
                if(isNaN(value)){
                    return {
                        isValid:false,
                        messege:"Marks should be between 1 to 100 in percentage!"
                    };
                }
                else if (number < 0 || number > 100 || value ==""){
                    return {
                        isValid:false,
                        messege:"Marks should be between 1 to 100 in percentage!"
                    };
                }
                else{
                    return {
                        isValid:true
                    };
                }
            },
            events:(e)=>{
                if(!(e.keyCode >= 48 && e.keyCode <= 57)){
                    e.preventDefault();
                }
            }

        },
        {
            row:"actions",
            value: `<button class="btn btn-success mx-2 pass curr-active" onclick="removeOutlineClass(this)">Pass</button><button class="btn btn-outline-danger fail" onclick="removeOutlineClass(this)">fail</button>`,
            class:"",
            show:true,
            type:"html"

        },
    ],
    [
        {
            row:"name",
            value:"Vatsal",
            class:"",
            show:true,
            type:"input",
            validate:"defaultname"
        },
        {
            row:"subject",
            value: "Hover",
            class:"",
            show:true,
            type:"input",
            validate:"defaultname"

        },
        {
            row:"marks",
            value: "99",
            class:"",
            show:true,
            type:"input",
            validate:"custom",
            customValidation:(value)=>{
                var number = parseInt(value);
                if(isNaN(value)){
                    return {
                        isValid:false,
                        messege:"Marks should be between 1 to 100 in percentage!"
                    };
                }
                else if (number < 0 || number > 100 || value ==""){
                    return {
                        isValid:false,
                        messege:"Marks should be between 1 to 100 in percentage!"
                    };
                }
                else{
                    return {
                        isValid:true
                    };
                }
            },
            events:(e)=>{
                if(!(e.keyCode >= 48 && e.keyCode <= 57)){
                    e.preventDefault();
                }
            }

        },
        {
            row:"actions",
            value: `<button class="btn btn-success mx-2 pass curr-active" onclick="removeOutlineClass(this)">Pass</button><button class="btn btn-outline-danger fail" onclick="removeOutlineClass(this)">fail</button>`,
            class:"",
            show:true,
            type:"html"

        },
    ],
   
]
}

const editableTable = new EditableTable('EditableTable',Students,{validateDuplicates:true,noDuplicationCols:[["name","subject"]]});


addRow = ()=>{
    var newObj =   [
        {
            row:"name",
            value:"Change Val",
            class:"",
            show:true,
            type:"input",
            validate:"defaultname"
        },
        {
            row:"subject",
            value: "Javascript",
            class:"",
            show:true,
            type:"input",
            validate:"defaultname"

        },
        {
            row:"marks",
            value: "74",
            class:"",
            show:true,
            type:"input",
            validate:"custom",
            customValidation:(value)=>{
                var number = parseInt(value);
                if(isNaN(value)){
                    return {
                        isValid:false,
                        messege:"Marks should be between 1 to 100 in percentage!"
                    };
                }
                else if (number < 0 || number > 100 || value ==""){
                    return {
                        isValid:false,
                        messege:"Marks should be between 1 to 100 in percentage!"
                    };
                }
                else{
                    return {
                        isValid:true
                    };
                }
            },
             events:(e)=>{
                if(!(e.keyCode >= 48 && e.keyCode <= 57)){
                    e.preventDefault();
                }
            }

        },
        {
            value: `<button class="btn btn-success mx-2 pass curr-active" onclick="removeOutlineClass(this)">Pass</button><button class="btn btn-outline-danger fail" onclick="removeOutlineClass(this)">fail</button>`,
            class:"",
            show:true,
            type:"html"

        },
        
    ]
    editableTable.addRow(newObj);
};


generateReport = ()=>{
    var isValid = true;
    $('.editableable tbody tr').each((index,element)=>{
        if(!(editableTable.validateAllCol(element))){
            isValid = false;
        }
    })
 
    if(isValid){
        editableTable.closeAll();
        var newObj = JSON.parse(JSON.stringify(editableTable.mainObj));        
        newObj.data = secondReducer(newObj);
        newObj.rows.pop();
        newObj.data = parser(newObj);
        const reportTable = new ReportTable("reportTable",newObj,{});
        reportTable.initiaizeReportTable();
        var reduceObj = reducer(newObj);
        reduceObj.rows = ["name","result"];
        const secondReportTable = new ReportTable("secondReportTable",reduceObj,{reduce:true});
        secondReportTable.initiaizeReportTable();
}
else{
    alert("Validate all input first");
}
}

parser = (obj)=>{
    var newObj = obj.data.map((element)=>{
        element.pop();
        return element;
    });
    
    return newObj;
}



var removeOutlineClass = (ele)=>{
    if($(ele).hasClass('pass')){
        $(ele).addClass('btn-success').removeClass('btn-outline-success');
        $(ele).addClass('curr-active');
        $(ele).next().addClass('btn-outline-danger').removeClass('btn-danger');
        $(ele).next().removeClass('curr-active');
    }
    else{
        $(ele).addClass('btn-danger').removeClass('btn-outline-danger');
        $(ele).addClass('curr-active');
        $(ele).prev().addClass('btn-outline-success').removeClass('btn-success');
        $(ele).prev().removeClass('curr-active');
    }
   
}


var reducer = (obj)=>{
    var tempObj = JSON.parse(JSON.stringify(obj));
    tempObj.data = tempObj.data.reduce((acc,ele)=>{
        var found=false;
        var findElement = acc.find(element => (element[0].value.toLowerCase() == ele[0].value.toLowerCase()));
        if(!(findElement == undefined)){
            found = true;
        }
        if(!found){
            ele.splice(1,1);
            acc.push(ele);
            ele[1].count = 1;
        }else{
            var old = acc.find(element=> (element[0].value.toLowerCase() == ele[0].value.toLowerCase())); 
            old[1].value = (parseInt(old[1].value) + parseInt(ele[2].value));
            old[1].count++;
        }
        return acc;

    },[]);

    tempObj.data = tempObj.data.map((element)=>{
        element[1].value = (parseInt(element[1].value)/parseInt(element[1].count)) + "%";
        return element;
    })
    return tempObj;
}

var secondReducer = (obj)=>{
    var tempObj = JSON.parse(JSON.stringify(obj));
    var newData = [];
    console.log(tempObj);

    $('.editableable tbody tr').each((index,element)=>{
        var content = $(element).find('.content');
        if(!$(content).find('.curr-active').hasClass('fail')){
            newData.push(tempObj.data[index]);
        }
    });
  
    return newData;
}
