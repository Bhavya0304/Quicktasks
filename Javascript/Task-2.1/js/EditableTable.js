class EditableTable {

    actionCellDefault = `<button class="btn btn-outline-primary mx-2 editoption"><i class="bi bi-pencil-fill"></i></button>`;
    actionCell = `<button class="btn btn-outline-primary mx-2 editoption"><i class="bi bi-pencil-fill"></i></button><button class="btn btn-outline-danger mx-2 removeRow"><i class="bi bi-trash3"></i></button>`;

    editCell = `<button class="btn btn-outline-success mx-2 closeeditoption update"><i class="bi bi-check"></i></button><button class="btn btn-outline-danger mx-2 closeeditoption close">X</button>`;

    constructor(tableId, IntialObject) {
        this.table = document.getElementById(tableId);
        this.table.classList.add('editableable')
        this.tableHead = this.table.createTHead();
        this.tableBody = this.table.createTBody();
        this.mainObj = IntialObject;
        this.initializeHeader();
        this.initializeDefaultRows();
        this.ActivateEventListeniers();
    }



    initializeHeader = () => {
        var headerRow = this.tableHead.insertRow();
        var aCell = headerRow.insertCell();
        aCell.innerHTML = "index";
        this.createHeaderCell(this.mainObj.rows, headerRow);
        var aCell = headerRow.insertCell();
        aCell.innerHTML = "action";
    }

    getLastIndex = ()=>{
        return this.tableBody.rows.length;
    }

    initializeDefaultRows = () => {
        this.mainObj.data.forEach((element) => {
            var row = this.tableBody.insertRow();
            row.classList.add('default');
            this.createCell(element, row);
            this.insertActionCell(row, this.actionCellDefault);
        })

    }

    createHeaderCell = (cells, parentRow) => {
        cells.forEach((cell) => {
            var newCell = parentRow.insertCell();
            newCell.innerHTML = cell;
        });
    }

    createCell = (cells, parentRow) => {
        var cellNo = 0;
        parentRow.insertCell().innerHTML = this.getLastIndex();
        cells.forEach((cell) => {
            if (cell.show) {
                var newCell = parentRow.insertCell();
                if (cell.type == "input") {
                    newCell.innerHTML = `<input type="text" value="${cell.value}" disabled="true" class="form-control">`;
                    newCell.classList.add('input');
                }
                else {
                    newCell.innerHTML = cell.value;
                }
                newCell.classList.add(`table-col-${cellNo}`);
                cellNo++;
                newCell.setAttribute('class', newCell.classList.value + " " + cell.class);
            }
        });
    }

    insertActionCell = (row, action) => {
        var cell = row.insertCell();
        cell.innerHTML = action;
        cell.classList.add(`table-col-${row.cells.length - 1}`);
    }

    addRow = (newObj) => {
        this.mainObj.data.push(newObj);
        var row = this.tableBody.insertRow();
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
        var row = element.parentElement.closest('tr');
        var index = row.rowIndex;
        this.mainObj.data.splice(index - 1, 1);
        element.parentElement.parentElement.remove();
        this.updateIndexing(this.tableBody);
    }

    updateIndexing = (table)=>{
        var rowIndexCol = table.querySelectorAll('td:first-child');
        rowIndexCol.forEach((element,index)=>{
            element.innerHTML = index+1;
        }); 
    }

    openEditOption = (event) => {
        var element = event.currentTarget;
        var row = element == null ? event : element.parentElement.closest('tr');
        row.querySelectorAll('input').forEach((input) => {
            input.removeAttribute('disabled');
        });
        row.querySelector('td:last-child').innerHTML = this.editCell;
        this.ActivateEventListeniers();
    }


    closeEditOption = (event) => {
        var element = event.currentTarget;
        var row = element.parentElement.closest('tr');
        if (element.classList.contains('close')) {
            var index = row.rowIndex;
            var tableInputs = Array.from(row.querySelectorAll('.input'));
            var inputIndexing = 0;
            this.mainObj.data[index - 1].forEach((element, index) => {
                if (element.type == "input") {
                    var inputField = tableInputs[inputIndexing].querySelector('input');
                    inputField.value = element.value;
                    inputField.setAttribute('disabled', "true");
                    this.removeValidation(tableInputs[inputIndexing]);
                    inputIndexing++;
                }
            });
            if (row.classList.contains('default')) {
                row.querySelector('td:last-child').innerHTML = this.actionCellDefault;
                this.ActivateEventListeniers();
            }
            else {
                row.querySelector('td:last-child').innerHTML = this.actionCell;
                this.ActivateEventListeniers();
            }

        }
        else {
            var index = row.rowIndex;
            var tableInputs = Array.from(row.querySelectorAll('.input'));
            var inputIndexing = 0;
            var isValid = true;
            this.mainObj.data[index - 1].forEach((element, index) => {
                if (element.type == "input") {
                    var inputField = tableInputs[inputIndexing].querySelector('input');
                    var validation = this.validateInput(element, inputField);
                    console.log(validation);
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
            if (isValid) {
                var inputIndexing = 0;
                this.mainObj.data[index - 1].forEach((element, index) => {
                    if (element.type == "input") {
                        var inputField = tableInputs[inputIndexing].querySelector('input');
                        element.value = inputField.value;
                        inputField.setAttribute('disabled', "true");
                        inputIndexing++;
                    }
                });
                if (row.classList.contains('default')) {
                    row.querySelector('td:last-child').innerHTML = this.actionCellDefault;
                    this.ActivateEventListeniers();
                }
                else {
                    row.querySelector('td:last-child').innerHTML = this.actionCell;
                    this.ActivateEventListeniers();
                }
            }
        }
    }



    ActivateEventListeniers = () => {
        var openEditMenuOptions = Array.from(document.getElementsByClassName('editoption'));
        var closeEditMenuOptions = Array.from(document.getElementsByClassName('closeeditoption'));
        var removeBtn = Array.from(document.getElementsByClassName('removeRow'));
        openEditMenuOptions.forEach((element) => {
            element.addEventListener('click', this.openEditOption);
        });
        closeEditMenuOptions.forEach((element) => {
            element.addEventListener('click', this.closeEditOption);
        });
        removeBtn.forEach((element) => {
            element.addEventListener('click', this.removeRow);
        });
    }

    validateInput = (obj, inputs) => {
        if (obj.validate != null && obj.validate.includes('default')) {
            return this.defaultValidation(inputs.value, obj.validate);
        }
        else if (obj.validate == "custom") {
            return obj.customValidation(inputs.value);
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
        if(!column.querySelector('.error')){
            var errorElement = document.createElement('p');
            errorElement.innerHTML = messege;
            errorElement.classList.add('error');
            column.appendChild(errorElement);
        }
    }

    removeValidation = (column) => {
        if (column.querySelector('.error')) {
            column.querySelector('.error').remove();
        }
    }
    showConfirm = (messege)=>{
        return confirm(messege);
    }
}
