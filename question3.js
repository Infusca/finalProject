// write fxn that accepts pw and returns strength of pw based on criteria

function strengthOfPw(password){
    var pw = password;
    points = 0;

    caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    lower = 'abcdefghijklmnopqrstuvwxyz'

    if (pw.length > 10) { points++ }

    for (i=0; i<pw.length; i++) {
        for (j in caps) {
            if (pw[i] == caps[j]) { 
                points++; 
                break;
            }
        }
        for (k in lower) { 
            if (pw[i] == lower[k]) {
                points++;
                break;
            }
        }
    }
    console.log(points);
}

console.log(strengthOfPw('fgd'))