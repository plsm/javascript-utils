function table_sorter_create (table_id, table_data, table_columns)
{
    var table_element = document.getElementById (table_id);
	 table_element.deleteTHead ();
	 table_element.tBodies = [];
	 // create the table header with buttons to sort sortable columns and
	 // normal text in standard columns
	 var table_head = table_element.createTHead ();
	 var row = table_head.insertRow ();
	 for (i = 0; i < table_columns.length; i++) {
		  var content = "";
		  if (table_columns [i].sortable) {
				content = content + "<button onClick=\"table_sorter_sort ('" + table_id
					 + "', " + table_id + "_data"
					 + ", " + table_id + "_column"
					 + ", " + i.toString ()
					 + ")\">";
		  }
		  content = content + table_columns [i].column_name;
		  if (table_columns [i].sortable) {
				content = content + "</button>";
		  }
		  var cell = row.insertCell ();
		  cell.innerHTML = content;
	 }
	 // create the table body 
	 var table_body = table_element.createTBody ();
	 for (j = 0; j < table_data.length; j++) {
		  var row = table_body.insertRow ();
		  for (i = 0; i < table_columns.length; i++) {
				var cell = row.insertCell ();
				cell.innerHTML = table_data [j][table_columns [i].view_index];
		  }
	 }
}

function table_sorter_sort (table_id, table_data, table_columns, index)
{
	 // sort the data
    table_data.sort (function (rowA, rowB) {
		  if (table_columns [index].sort_ascending)
				return rowA [table_columns [index].sort_index] - rowB [table_columns [index].sort_index];
		  else
				return rowB [table_columns [index].sort_index] - rowA [table_columns [index].sort_index];
    })
    table_columns [index].sort_ascending = !table_columns [index].sort_ascending;
	 // update the table body
    var table_element = document.getElementById (table_id);
	 var tbody = table_element.tBodies [0];
	 for (j = 0; j < table_data.length; j++) {
		  var row = tbody.rows [j];
		  for (i = 0; i < table_columns.length; i++) {
				var cell = row.cells [i];
				cell.innerHTML = table_data [j][table_columns [i].view_index];
		  }
	 }
}


function table_sorter (table_name, table_data, columns, index)
{
    var table_element = document.getElementById (table_name);
    var content = "";
    table_data.sort (function (rowA, rowB) {
		  if (columns [index].sort_ascending)
				return rowA [columns [index].sort_index] - rowB [columns [index].sort_index];
		  else
				return rowB [columns [index].sort_index] - rowA [columns [index].sort_index];
    })
    columns [index].sort_ascending = !columns [index].sort_ascending;

    content = "<thead>";
    for (i = 0; i < columns.length; i++) {
		  var cell = "<th>";
		  if (columns [i].sortable) {
				cell = cell + "<button onClick=\"table_sorter ('" + table_name
					 + "', " + table_name + "_data"
					 + ", " + table_name + "_column"
					 + ", " + i.toString ()
					 + ")\">";
		  }
		  cell = cell + columns [i].column_name;
		  if (columns [i].sortable) {
				cell = cell + "</button>";
		  }
		  cell = cell + "</th>";
		  content = content + cell;
    }
    content = content + "</thead>";
    content = content + "<tbody>";
    for (j = 0; j < table_data.length; j++) {
		  var row = "<tr>";
		  for (i = 0; i < columns.length; i++) {
				var cell = "<td>";
				cell = cell + table_data [j][columns [i].view_index];
				cell = cell + "</td>";
				row = row + cell;
		  }
		  row = row + "</tr>";
		  content = content + row;
    }
    content = content + "</tbody>";
    table_element.innerHTML = content;
}
