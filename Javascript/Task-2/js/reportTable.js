class ReportTable{
    constructor(idName,dataObj){
        this.mainDiv = document.getElementById(idName);
        this.dataObj = dataObj;
        this.displayObj = JSON.parse(JSON.stringify(this.dataObj));
    }

    initializeHeader = () => {
        var headerRow = this.tableHead.insertRow();
        var aCell = headerRow.insertCell();
        aCell.innerHTML = "index";
        this.createHeaderCell(this.dataObj.rows, headerRow);
        var aCell = headerRow.insertCell();
    }

    createHeaderCell = (cells, parentRow) => {
        cells.forEach((cell) => {
            var newCell = parentRow.insertCell();
            newCell.innerHTML = cell;
        });
    }
    
    defineStructure = ()=>{
        var filterRow = document.createElement('div');
        filterRow.classList.add('row');


        var sortingCol = document.createElement('div');
        sortingCol.classList.add('col-6');
        sortingCol.classList.add('sortingCol');
        
        var searchingCol = document.createElement('div');
        searchingCol.classList.add('col-6');
        searchingCol.classList.add('searchingCol');
        
        
        filterRow.appendChild(sortingCol);
        filterRow.appendChild(searchingCol);
        
        var tableRow = document.createElement('div');
        tableRow.classList.add('row');
        tableRow.classList.add('tableRow');
        

        this.mainDiv.innerHTML = filterRow.outerHTML + tableRow.outerHTML;
    }

    initializeSortingDropDown = (sortingTypes)=>{
        if(!this.mainDiv.querySelector('.sorting')){
            var dropdown = document.createElement('select');
            dropdown.addEventListener('change',this.sortRow);
            dropdown.classList.add('sorting');
            dropdown.classList.add('form-control')
            var options = document.createElement('option');
            options.innerHTML = "Sort By";
                options.value = "nosort";
                dropdown.appendChild(options);
            sortingTypes.forEach((type)=>{
                var options = document.createElement('option');
                options.innerHTML = type;
                options.value = type;
                dropdown.appendChild(options);
            });
            this.mainDiv.querySelector('.sortingCol').appendChild(dropdown);
        }
    }

    initializeSearchBar = ()=>{
        if(!this.mainDiv.querySelector('.searching')){
            var serachBar = document.createElement('input');
            serachBar.addEventListener('input',this.searchCol);
            serachBar.setAttribute('type','text');
            serachBar.setAttribute('placeholder','search here');
            serachBar.classList.add('form-control');
            serachBar.classList.add('searchbar');
            this.mainDiv.querySelector('.searchingCol').appendChild(serachBar);
        }
    }

    initiaizeReportTable = ()=>{
        this.mainDiv.classList.add('reportDiv');
        this.defineStructure();
        this.initializeSortingDropDown(this.dataObj.rows);
        this.initializeSearchBar();
        this.createReportTable();
    }


    createReportTable = ()=>{
        this.mainTable = document.createElement('table');
        this.mainTable.classList.add('table')
        this.mainDiv.querySelector('.tableRow').appendChild(this.mainTable);
        this.tableHead = this.mainTable.createTHead();
        this.tableBody = this.mainTable.createTBody();
        this.initializeHeader();
        this.genrateReport();
    }

    getLastIndex = ()=>{
        return this.tableBody.rows.length;
    }


    genrateReport = ()=>{
        this.tableBody.innerHTML = "";
        this.displayObj.data.forEach((element)=>{
            var row = this.tableBody.insertRow();
            this.createCell(element,row);
        });
    }

    createCell = (cells, parentRow) => {
        var cellNo = 0;
        parentRow.insertCell().innerHTML = this.getLastIndex();
        cells.forEach((cell) => {
            var newCell = parentRow.insertCell();
            newCell.innerHTML = cell.value;
            if(cell.row == "marks" && parseInt(cell.value) < 33){
                parentRow.classList.add('red');
            }
        });
    }



    sortRow = (e)=>{
        var type = e.target.value;
        if(type == "nosort"){
            //code remaining
        }
        else{
            var rowIndex = this.displayObj.rows.indexOf(type);
            this.displayObj.data.sort((a,b)=>{
                return this.displayObj.rowsInfo[rowIndex].type == "string" ? a[rowIndex].value.localeCompare(b[rowIndex].value) : parseInt(b[rowIndex].value) - parseInt(a[rowIndex].value) ;
            }); 
        }
        this.genrateReport();
    }

    searchCol = (e)=>{
        console.log(e.target.value)
        var value = e.target.value;
        this.displayObj = JSON.parse(JSON.stringify(this.dataObj));
        this.displayObj.data = this.displayObj.data.filter((element)=>{
            return element[0].value.toLowerCase().includes(value.toLowerCase()) || element[1].value.toLowerCase().includes(value.toLowerCase());
        });
        this.genrateReport();
    }
}