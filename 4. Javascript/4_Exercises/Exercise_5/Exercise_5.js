let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")
let p5 = document.getElementById("p5")
let p6 = document.getElementById("p6")
let p7 = document.getElementById("p7")
const firstLine = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('initializing hack program')
        }, 4000);
    });
}
const secondLine = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hacking username...")
        }, 4000);
    });
}
const thirdLine = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('username found...')
        }, 4000);
    });
}
const fourthLine = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('connecting to snapchat...')
        }, 4000);
    });
}
const fifthLine = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fetching password...')
        }, 4000);
    });
}
const sixthLine = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('password fetched...')
        }, 4000);
    });
}
const seventhLine = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Congratutions your account is hacked successfully.')
        }, 4000);
    });
}


const hacking = async () => {
    let lineOne = await firstLine();
    p1.innerHTML = lineOne;
    let lineTwo = await secondLine();
    p2.innerHTML = lineTwo;
    console.log(lineTwo);
    let lineThree = await thirdLine();
    p3.innerHTML = lineThree;
    let lineFour = await fourthLine();
    p4.innerHTML = lineFour;
    let lineFive = await fifthLine();
    p5.innerHTML = lineFive;
    let lineSix = await sixthLine();
    p6.innerHTML = lineSix;
    let lineSeven = await seventhLine();
    p7.innerHTML = lineSeven;
}
hacking();
