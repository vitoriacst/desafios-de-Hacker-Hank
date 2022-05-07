//ana -> [0,1,2]
//bob ->[1,0,3]
function compareTriplets(a, b) {
  let alicePoints = 0
  let bobPoints = 0;
for(let index = 0; index < 3; index++) {
    if (b[index] < a[index]) {
       (alicePoints += 1);
    }
    if (b[index] > a[index]) {
       (bobPoints += 1);
    }
  }
    return([alicePoints,bobPoints]);
}