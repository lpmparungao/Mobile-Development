var loaded = false;
function loadFile() {
  $(document).ready(function(){
    $.getJSON("employee.json", function(data){
        var employeeData = ``;
        employeeData += `List of Employees:<br><br>`;
      $.each(data, function(key, value){
        employeeData += '\
        <tr> \
        <td>'+value["id"]+'  '+value["firstName"]+' '+value["lastName"]+'  '+value["age"]+'  '+value["sex"]+'</td><br>\
        </tr>';
      });
      if (!loaded){
        $('#employeeTable').append(employeeData);
        loaded = true;
      }
    });
  });
}