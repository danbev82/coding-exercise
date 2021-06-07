
  function groupArrayElements(arrData, colNumber){
    const arrLen = arrData.length;
    const groupedArr = [];
    
    if(colNumber <=0) {
      console.log("Please provide a valid number... ");
    } else {
  // use math.ceil to round number up then divide the lentgh of array by number of columns
      const size = Math.ceil(arrLen / colNumber);
  // slice the array by by the calulated size and push to new array until arrLen < 1
      for (var i = 0; i < arrLen; i += size) {
        groupedArr.push(arrData.slice(i, i + size));
  }                     
    return groupedArr;
  }}

//uncomment the below and amend values if required

// const colNumber = 0;
 const arrData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// call initial function
// console.log(groupArrayElements(arrData, colNumber)); 
   

// comment out test cases f required   
   
console.log(groupArrayElements(arrData, 0));  // Please provide a valid number...
console.log(groupArrayElements(arrData, 1));  // [ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ]
console.log(groupArrayElements(arrData, 2));  // [ [ 1, 2, 3, 4, 5, 6 ], [ 7, 8, 9, 10, 11, 12 ] ]
console.log(groupArrayElements(arrData, 3));  // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ]
console.log(groupArrayElements(arrData, 4));  // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ] ] 
console.log(groupArrayElements(arrData, 5));  // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ] ]
console.log(groupArrayElements(arrData, 6));  // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]
