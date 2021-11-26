const weight = [60, 40, 55, 75, 64];
const totalWeight = [0, 0];
weight.forEach ((x,y) => {
    if (y % 2 ===0) {
        totalWeight[0] += x;
    } else {
        totalWeight[1] += x;
    }
})
console.log(totalWeight);