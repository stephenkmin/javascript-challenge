// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function buildTable(data){
    tbody.html("");
    data.forEach(dataRow => {
        console.table(dataRow);
        let row = tbody.append("tr");

       console.table(Object.values(dataRow));
       Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
}

function handleClick(){
    d3.event.preventDefault()
    
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    if (date){
        filterData = filterData.filter((row) => row.datetime === date);
    }
    buildTable(filterData);
}



d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);