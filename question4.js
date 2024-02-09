input = [{
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
}]

const output = {}
time = 0

function fxn(array) {

    for (item in array) {
        id = array[item].id;
        steps = array[item].productionSteps;

        output[id] = {};

        for (step in steps) {
            s = steps[step].step;
            time += steps[step].time;
            output[id][s] = time;
        }
        time = 0;
    }

    return(output)
}

console.log(fxn(input))