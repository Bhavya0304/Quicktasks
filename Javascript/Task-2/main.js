
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
                var number = parseInt(value);
                if(isNaN(value)){
                    return {
                        isValid:false,
                        messege:"Marks should be between 1 to 100 in percentage!"
                    };
                }
                else if (number < 0 || number > 100){
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
            }

        },
        {
            row:"actions",
            value: `<button class="btn btn-outline-success mx-2">Pass</button><button class="btn btn-outline-danger">fail</button>`,
            class:"",
            show:true,
            type:"html"

        },
    ],
    [
        {
            row:"name",
            value:"Yash Kotadiya",
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
                else if (number < 0 || number > 100){
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
            }

        },
        {
            row:"actions",
            value: `<button class="btn btn-outline-success mx-2">Pass</button><button class="btn btn-outline-danger">fail</button>`,
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
                else if (number < 0 || number > 100){
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
            }

        },
        {
            row:"actions",
            value: `<button class="btn btn-outline-success mx-2">Pass</button><button class="btn btn-outline-danger">fail</button>`,
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
            value: "Dot Net",
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
                else if (number < 0 || number > 100){
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
            }

        },
        {
            row:"actions",
            value: `<button class="btn btn-outline-success mx-2">Pass</button><button class="btn btn-outline-danger">fail</button>`,
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
                else if (number < 0 || number > 100){
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
            }

        },
        {
            row:"actions",
            value: `<button class="btn btn-outline-success mx-2">Pass</button><button class="btn btn-outline-danger">fail</button>`,
            class:"",
            show:true,
            type:"html"

        },
    ],
    [
        {
            row:"name",
            value:"Vivek",
            class:"",
            show:true,
            type:"input",
            validate:"defaultname"
        },
        {
            row:"subject",
            value: "English Spellings",
            class:"",
            show:true,
            type:"input",
            validate:"defaultname"

        },
        {
            row:"marks",
            value: "12",
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
                else if (number < 0 || number > 100){
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
            }

        },
        {
            row:"actions",
            value: `<button class="btn btn-outline-success mx-2">Pass</button><button class="btn btn-outline-danger">fail</button>`,
            class:"",
            show:true,
            type:"html"

        },
    ],


]
}

const editableTable = new EditableTable('EditableTable',Students);


parser = (obj)=>{
    var newObj = obj.data.map((element)=>{
        element.pop();
        return element;
    });
    return newObj;
}

generateReport = ()=>{
    var newObj = JSON.parse(JSON.stringify(editableTable.mainObj));
    newObj.rows.pop();
    newObj.data = parser(newObj);
    const reportTable = new ReportTable("reportTable",newObj);
    reportTable.initiaizeReportTable();
}

addRow = (element)=>{
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
                else if (number < 0 || number > 100){
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
            }

        },
        {
            value: `<button class="btn btn-outline-success mx-2">Pass</button><button class="btn btn-outline-danger">fail</button>`,
            class:"",
            show:true,
            type:"html"

        },
    ]
    editableTable.addRow(newObj);
};

