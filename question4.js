// take in array, return js object

class Plant {
    id;
}


const Plants = {}

function productionTimes(array) {

    // get plant id
    count = 0;
    times = {};
    
    for (i in array) {
        obj = new Plant;
        obj.id =  array[i].id;
        obj.steps = array[1].productionSteps;
        step = obj.steps[i].step;
        count += obj.steps[i].time;
        console.log(obj.id, count)
    }
    
    return obj;
}



array1 = [{
    "id": "Plant1",
    "productionSteps": [
    {"step": "Step1", "time": 5},
    {"step": "Step2", "time": 7},
    {"step": "Step3", "time": 2}
    ]
    },
    {
    "id": "Plant2",
    "productionSteps": [
    {"step": "StepA", "time": 3},
    {"step": "StepB", "time": 4},
    {"step": "StepC", "time": 8}
    ]
    }
    ]

// console.log(JSON.stringify(array1, null, 1))
console.log(productionTimes(array1))
// console.log(obj)
// console.log(array1[0].id)