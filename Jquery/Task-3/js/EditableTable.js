class EditableTable {

    actionCellDefault = `<button class="btn btn-outline-primary mx-2 editoption"><i class="bi bi-pencil-fill"></i></button>`;
    actionCell = `<button class="btn btn-outline-primary mx-2 editoption"><i class="bi bi-pencil-fill"></i></button><button class="btn btn-outline-danger mx-2 removeRow"><i class="bi bi-trash3"></i></button>`;

    editCell = `<button class="btn btn-outline-success mx-2 closeeditoption update"><i class="bi bi-check"></i></button><button class="btn btn-outline-danger mx-2 closeeditoption close">X</button>`;

    constructor(tableId, IntialObject,options) {
       
        this.table = $(`#${tableId}`);
        $(this.table).addClass('editableable')
        $(this.table).append('<thead></thead>');
        $(this.table).append('<tbody></tbody>');
        this.tableHead = $('.editableable thead');
        this.tableBody = $('.editableable tbody');
        this.mainObj = IntialObject;
        this.initializeHeader();
        this.initializeDefaultRows();
        this.ActivateEventListeniers();
        this.options = options;
    }



    initializeHeader = () => {
        $(this.tableHead).append('<tr></tr>');
        var headerRow = $(this.tableHead).children('tr');
        $(headerRow).append("<td>index</td>") ;
        this.createHeaderCell(this.mainObj.rows, headerRow);
        $(headerRow).append("<td>action</td>")
    }

    getLastIndex = ()=>{
        return $(this.tableBody).children('tr').length;
    }

    initializeDefaultRows = () => {
        this.mainObj.data.forEach((element) => {
            $(this.tableBody).append("<tr></tr>");
            var row = $(this.tableBody).children('tr:last-child')
            row.addClass('default');
            this.createCell(element, row);
            this.insertActionCell(row, this.actionCellDefault);
        })

    }

    createHeaderCell = (cells, parentRow) => {
        cells.forEach((cell) => {
            $(parentRow).append(`<td>${cell}</td>`);
        });
    }

    createCell = (cells, parentRow) => {
        var cellNo = 0;
        $(parentRow).append(`<td>${this.getLastIndex()}</td>`);
        cells.forEach((cell) => {
            if (cell.show) {
                $(parentRow).append("<td></td>");
                var newCell = $(parentRow).children('td:last-child'); 
                if (cell.type == "input") {
                    $(newCell).html(`<input type="text" value="${cell.value}" disabled="true" class="form-control">`);
                    $(newCell).addClass('input');
                    if(cell.events){
                        $(newCell).children('input').on('keypress',cell.events);
                    }
                }
                else {
                    $(newCell).html(`<div class="content"> ${cell.value}</div>`);
                }
                $(newCell).addClass(`table-col-${cellNo}`);
                cellNo++;
                $(newCell).attr('class', $(newCell).attr('class') + " " + cell.class);
            }
        });
    }

    insertActionCell = (row, action) => {
        $(row).append('<td></td>');
        var cell = $(row).children("td:last-child"); 
        $(cell).html(action);
        $(cell).addClass(`table-col-${$(row).children().length - 1}`);
    }

    addRow = (newObj) => {
        this.mainObj.data.push(newObj);
        $(this.tableBody).append("<tr></tr>");
        var row = $(this.tableBody).children("tr:last-child"); 
        this.createCell(newObj, row);
        this.insertActionCell(row, this.actionCell);
        this.ActivateEventListeniers();
        this.openEditOption(row);
    }

    removeRow = (event) => {
        if(!this.showConfirm("Do you want to delete this row?")){
            return;
        }
        var element = event.currentTarget;
        var row = $(element).closest('tr');
        var index = $(row).index();
        this.mainObj.data.splice(index - 1, 1);
        $(element).closest('tr').remove();
        this.updateIndexing(this.tableBody);
    }

    updateIndexing = (table)=>{
        var rowIndexCol = $(table).children('tr').children('td:first-child');
        $(rowIndexCol).each((index,element)=>{
            $(element).html(index+1);
        }); 
    }

    openEditOption = (event) => {
        var element = event.currentTarget;
        var row = element == null ? event : $(element).parent().closest('tr');
        $(row).children('td').children('input').each((index,input) => {
            $(input).removeAttr('disabled');
        });
        $(row).children('td:last-child').html(this.editCell);
        this.ActivateEventListeniers();
    }


    closeEditOption = (event) => {
        var element = event.currentTarget;
        var row = $(element).parent().closest('tr');
        if ($(element).hasClass('close')) {
            var index = $(row).index();
            var tableInputs = $(row).children('.input');
            var inputIndexing = 0;
            this.mainObj.data[index].forEach((element, index) => {
                if (element.type == "input") {
                    var inputField = $(tableInputs[inputIndexing]).children('input');
                    console.log(inputField)
                    $(inputField).val(element.value);
                    $(inputField).attr('disabled', "true");
                    this.removeValidation(tableInputs[inputIndexing]);
                    inputIndexing++;
                }
            });
            if ($(row).hasClass('default')) {
                $(row).children('td:last-child').html(this.actionCellDefault);
                this.ActivateEventListeniers();
            }
            else {
                $(row).children('td:last-child').html(this.actionCell);
                this.ActivateEventListeniers();
            }
        }
        else {
            var index = $(row).index();
            var tableInputs = $(row).children('.input');
            var tablecontents = $(row).children('.content');
            var inputIndexing = 0;
            var contentIndexing = 0;
            var isValid = true;
            isValid = this.validateAllCol(row);
            if (isValid) {
                var inputIndexing = 0;
                this.mainObj.data[index].forEach((element, index) => {
                    if (element.type == "input") {
                        var inputField = $(tableInputs[inputIndexing]).children('input');
                        element.value = $(inputField).val();
                        $(inputField).attr('disabled', "true");
                        inputIndexing++;
                    }
                    else{
                        var contentField = tablecontents[contentIndexing];
                        element.value = $(contentField).html(true);
                        contentIndexing++;
                    }
                });
                if ($(row).hasClass('default')) {
                    $(row).children('td:last-child').html(this.actionCellDefault);
                    this.ActivateEventListeniers();
                }
                else {
                    $(row).children('td:last-child').html(this.actionCell);
                    this.ActivateEventListeniers();
                }
            }
        }
    }

    closeAll = ()=>{
        $('.editableable tbody tr').each((indexs,row)=>{
            var index = $(row).index();
            var tableInputs = $(row).children('.input');
            var inputIndexing = 0;
            this.mainObj.data[index].forEach((element, index) => {
                if (element.type == "input") {
                    var inputField = $(tableInputs[inputIndexing]).children('input');
                    $(inputField).val(element.value);
                    $(inputField).attr('disabled', "true");
                    this.removeValidation(tableInputs[inputIndexing]);
                    inputIndexing++;
                }
            });
            if ($(row).hasClass('default')) {
                $(row).children('td:last-child').html(this.actionCellDefault);
                this.ActivateEventListeniers();
            }
            else {
                $(row).children('td:last-child').html(this.actionCell);
                this.ActivateEventListeniers();
            }
        });
    }

    validateAllCol = (row)=>{
        var index = $(row).index();
        var tableInputs = $(row).children('.input');
        var inputIndexing = 0;
        var isValid = true;
        this.mainObj.data[index].forEach((element, index) => {
            if (element.type == "input") {
                var inputField = $(tableInputs[inputIndexing]).children('input');
                var validation = this.validateInput(element, inputField);

                if (validation.isValid) {
                    this.removeValidation(tableInputs[inputIndexing]);
                }
                else {
                    this.throwValidationError(tableInputs[inputIndexing], validation.messege);
                    isValid = false;
                }
                inputIndexing++;
            }
        });
        return isValid;
    }

    ActivateEventListeniers = () => {
        var openEditMenuOptions = $('.editoption');
        var closeEditMenuOptions = $('.closeeditoption');
        var removeBtn = $('.removeRow');
        openEditMenuOptions.off().click((e)=>{
            this.openEditOption(e);
        })
        closeEditMenuOptions.off().click((e)=>{
            this.closeEditOption(e);
        })
        removeBtn.off().click((e)=>{
            this.removeRow(e);
        })
       
    }

    validateInput = (obj, inputs) => {
        if (obj.validate != null && obj.validate.includes('default')) {
            return this.defaultValidation($(inputs).val(), obj.validate);
        }
        else if (obj.validate == "custom") {
            return obj.customValidation($(inputs).val());
        }
    }

    defaultValidation = (value, type) => {
        if (type == "defaultname") {
            if (RegExp(/^([a-zA-Z ]){2,30}$/).test(value)) {
                return {
                    isValid: true
                };
            }
            else {
                return {
                    isValid: false,
                    messege: "Name is invalid"
                };
            }
        }
        else if (type == "defaultmobile") {
            if (RegExp(/^([0-9]){10}$/).test(value)) {
                return {
                    isValid: true
                };
            }
            else {
                return {
                    isValid: false,
                    messege: "Name is invalid"
                };
            }
        }
        return {
            isValid: true
        };
    }


    throwValidationError = (column, messege) => {
        if($(column).children('.error').length == 0){
            var errorElement = `<p class="error">${messege}</p>`;
            $(column).append(errorElement);
        }
    }

    removeValidation = (column) => {
        if ($(column).children('.error').length > 0) {
            $(column).children('.error').remove();
        }
    }
    showConfirm = (messege)=>{
        return confirm(messege);
    }


}
