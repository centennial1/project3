
function makeTable()
{    
  
    var numberOfRows = document.getElementById('numrows').value;
   
  
    var numberOfCols = document.getElementById('numcols').value;
    

    var tableHeader = '<table border="1">\n';
    var tableBody = '';
    
  
    for( var i=0; i<numberOfRows;i++)
    {
        tableBody = tableBody + '<tr>';
        for( var j=0; j<numberOfCols;j++)
        {
            tableBody = tableBody +'<td>';
            tableBody = tableBody + 'table cell'  + i + ',' + j;
            tableBody = tableBody + '</td>'
        }
        tableBody = tableBody + '</tr>\n';
    }
    var tableFooter = '</table>';


    document.getElementById('result').innerHTML = tableHeader + tableBody + tableFooter;
    
}
