class ReportTable {
    constructor(idName, dataObj, options) {
        this.mainDiv = $(`#${idName}`);
        this.dataObj = dataObj;
        this.displayObj = JSON.parse(JSON.stringify(this.dataObj));
        this.options = options;
        
    }

    initializeHeader = () => {
        $(this.tableHead).append('<tr></tr>');
        var headerRow = $(this.tableHead).children('tr');
        $(headerRow).append("<td>index</td>") ;
        this.createHeaderCell(this.dataObj.rows, headerRow);
    }

    createHeaderCell = (cells, parentRow) => {
       
        cells.forEach((cell) => {
            $(parentRow).append(`<td>${cell}</td>`);
        });
    }

    defineStructure = () => {
      

        var sortingCol = `<div class="col-6 sortingCol"></div>`;
        var searchingCol = `<div class="col-6 searchingCol"></div>`
        
        var filterRow = `<div class="row">${sortingCol}${searchingCol}</div>`
        var tableRow = `<div class="row tableRow"></div>`


        $(this.mainDiv).html(filterRow + tableRow);
    }

    initializeSortingDropDown = (sortingTypes) => {
        if ($(this.mainDiv).find('.sorting').length == 0) {
           
            var dropdown = `<select class="sorting form-control">`;
            var options = `<option value="nosort">Sort By</option>`
            sortingTypes.forEach((type) => {
                options += `<option value="${type}">${type}</option>`
              
            });
            dropdown += options + '</select>';
            $(this.mainDiv).find('.sortingCol').append(dropdown);
            $(".sorting").on('change',(e)=>{
                this.sortRow(e);
            })

           
        }
    }

    initializeSearchBar = () => {
        if ($(this.mainDiv).find('.searching').length == 0) {
            var serachBar = `<input type="text" placeholder="search here" class="form-control serachBar">`;
           
            $(this.mainDiv).find('.searchingCol').append(serachBar);
            $('.serachBar').on('keyup',(e)=>{
                this.searchCol(e);
            });
        }
    }

    initiaizeReportTable = () => {
        $(this.mainDiv).addClass('reportDiv');
        this.defineStructure();
        if (!this.options.reduce) {
            this.initializeSortingDropDown(this.dataObj.rows);
            this.initializeSearchBar();
        }
        this.createReportTable();
    }


    createReportTable = () => {
        var tableStr = `<table class="table"></table>`;
       
        $(this.mainDiv).children('.tableRow').append(tableStr);
        this.mainTable = $(this.mainDiv).children('.tableRow').children();
        $(this.mainTable).append('<thead></thead>');
        $(this.mainTable).append('<tbody></tbody>');
        this.tableHead = $(this.mainTable).children('thead');
        this.tableBody = $(this.mainTable).children('tbody');
        this.initializeHeader();
        this.genrateReport();
    }

    getLastIndex = () => {
        return $(this.tableBody).children('tr').length;
    }


    genrateReport = () => {
        $(this.tableBody).html("");
        this.displayObj.data.forEach((element) => {
            $(this.tableBody).append('<tr></tr>');
            var row = $(this.tableBody).children('tr:last-child');
            this.createCell(element, row);
        });
    }

    createCell = (cells, parentRow) => {
        $(parentRow).append(`<td>${this.getLastIndex()}</td>`);
        cells.forEach((cell) => {
            $(parentRow).append("<td></td>");
            var newCell = $(parentRow).children('td:last-child'); 
            newCell.html(cell.value);
            if (cell.row == "marks" && parseInt(cell.value) < 33) {
                $(parentRow).addClass('red');
            }
        });
    }

    sortRow = (e) => {
        var type = $(e.target).val();
        console.log(type);
        if (type == "nosort") {
            //code remaining
        }
        else {
            var rowIndex = this.displayObj.rows.indexOf(type);
            this.displayObj.data.sort((a, b) => {
                return this.displayObj.rowsInfo[rowIndex].type == "string" ? a[rowIndex].value.localeCompare(b[rowIndex].value) : parseInt(b[rowIndex].value) - parseInt(a[rowIndex].value);
            });
        }
        this.genrateReport();
    }

    searchCol = (e)=>{
        var value = $(e.target).val();
        console.log(value)
        this.displayObj = JSON.parse(JSON.stringify(this.dataObj));
        this.displayObj.data = this.displayObj.data.filter((element) => {
            return element[0].value.toLowerCase().includes(value.toLowerCase()) || element[1].value.toLowerCase().includes(value.toLowerCase());
        });
        this.genrateReport();
    }
}