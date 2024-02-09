// take array as input, return object: manager-id= key; value=array of employees under manager
input = [
    {'id': '1', 'manager': '2'},
    {'id': '2', 'manager': '3'},
    {'id': '3'},
    {'id': '4', 'manager': '3'}]

managers = {}

function getEmployees(emp){
    for (i in emp) {
        console.log(i, emp[i])
    }
}

function listByManagerID(input) {

    for (i=0; i<input.length; i++) {
        // console.log(input[i], input[i].id, input[i].manager)
        managers[input[i].manager] = [];
    }

    return managers
}

ans = listByManagerID(input)
console.log('answer: ', ans)