function compareArrays(arr1, arr2) {
  let result;
  
 if (arr1.length === arr2.length) && arr1.every(function(element, index)) {
      return element === arr2[index]{ 
  result = true;
} else {
  result = false; 
}
 }
return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  
  resultArr = arr.filter(index => index >= 0 && index % 3===0).map(index => index * 10);
  return resultArr;
}
  