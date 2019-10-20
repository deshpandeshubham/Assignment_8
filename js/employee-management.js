/*eslint-env browser*/

var $ = function(id) {
    "use strict";
    return window.document.getElementById(id);
}

var addEmployee = function(e) {
    "use strict";
    var emplyeeDetails="", required, msg, name, title, extension;
    var tableCells = window.document.getElementsByTagName("td");
    required = "<span>Required Field</span>";
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;
    if(name === "") {
        tableCells[2].innerHTML = required;
    }
    else if(title === "") {
        tableCells[5].innerHTML = required;
    }
    else if(extension === "") {
        tableCells[8].innerHTML = required;
    }
    else {
        var empCnt = "Showing 3 Employees";
        $("employeeCount").innerHTML = empCnt;
        $("registration_form").submit();
    }
};

window.addEventListener("load", function () {
    var employee_list = [["Sally Smith","Quality Assurance",3423],
                        ["Mark Martin","VP Sales",3346],
                        ["John Johnson","Marketing",3232],
                        ["Shubham Deshpande","CEO",1111],
                        ["Martin Smith","CTO",2222],
                        ["Jim Queen","CFO",3333]];
    var name, title, extension, html="<tr><th>Name</th><th>Title</th><th>Extension</th><th></th></tr>";
    var employeeDetailsTable = $("employeeDetails");
    for(var i=0;i<employee_list.length;i++) {
        window.console.log("Name: " + employee_list[i][0] +"\nTitle: " + employee_list[i][1] +"\nExtension: " + employee_list[i][2]);
        var delButton = window.document.createElement("Button");
        delButton.innerHTML = "Delete";
        delButton.className = "del";
        html = html + "<tr><td>" + employee_list[i][0] + "</td>" + 
                      "<td>" + employee_list[i][1] + "</td>" + 
                      "<td>" + employee_list[i][2] + "</td>" +
                      "<td>" +  + "</td></tr>";
    }
    $("employeeDetails").innerHTML = html;
    $("addButton").addEventListener("click", addEmployee);
});

