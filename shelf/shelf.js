
const shelf_arr = []
let count = 1;
const createJar = () => {
    let newJar = {
        id: "",
        name: ""
    };
    newJar.id = ID;
    newJar.name = "Jar" + count;
    count++;
    shelf_arr.push(newJar);
}

function showNewJar() {
    var newj = document.createElement("div");
    document.getElementById(default_jar).appendChild(newj);
    return newj;
}

var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

