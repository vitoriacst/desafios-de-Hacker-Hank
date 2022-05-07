//ana -> [0,1,2]
//bob ->[1,0,3]
const points = () => {
    let bobArray = [1, 3, 5];
    let alicePoints = 0
    let aliceArray = [0, 1, 3];
    for (let index = 0; index < aliceArray.length; index++) {
      let bobPoints = 0;
      for (let index = 0; index < bobArray.length; index++) {
        if (bobArray[0] > aliceArray[0]) {
          return (bobPoints += 1);
        }
        if (bobArray[1] > aliceArray[1]) {
          return (bobPoints += 1);
        }
        if (bobArray[2] > aliceArray[2]) {
          return (bobPoints += 1);
        }
        console.log([alicePoints+''+bobPoints]);
      }
    }
  };
  points();
  
