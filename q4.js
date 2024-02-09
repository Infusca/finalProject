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
        steps = array[0].productionSteps;
        // console.log(id,steps)

        output[id] = {};

        for (step = 0; step<steps.length; step++) {
            output[id][step] = {};
            s = steps[step].step;
            time += steps[step].time;
            console.log(s, time)
            output[id][step] = {s: time}
        }
        time = 0;
    }
    return(output)

}

console.log(fxn(input))
// fxn(input)