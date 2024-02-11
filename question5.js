// take array as input, return object: manager-id= key; value=array of employees under manager
input = [
    {'id': '1', 'manager': '2'},
    {'id': '2', 'manager': '3'},
    {'id': '3'},
    {'id': '4', 'manager': '3'}]

m = 0;

function listByManager(input, m) {
    // get manager id
    
    for (i=0; i<input.length; i++){
        employees = [];
        for (i in input){
            managerId = input[i].manager;
            if (managerId && m != managerId){
                m = managerId;
                employeeId = input[i].id;
                employees.push(employeeId);
                // console.log(managerId, employees)
                input[i].manager = employees;
                // console.log(employees)
            } else if (managerId && m == managerId) {
                // console.log(managerId, m, employeeId)
                employees.push(employeeId);
            }
            
        } 
    }
    
}

x = listByManager(input)
console.log(x);