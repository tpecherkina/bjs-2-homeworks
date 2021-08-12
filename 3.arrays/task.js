function compareArrays(arr1, arr2) {
  arr1 = Array.isArray(arr1) ? arr1 : [];
  arr2 = Array.isArray(arr2) ? arr2 : [];
  return arr1.length === arr2.length && arr1.every((el, ix) => el === arr2[ix]);
  }
  
function advancedFilter(arr) {
  let resultArr;
  
  resultArr = arr.filter(index => index >= 0 && index % 3===0).map(index => index * 10);
  return resultArr;
}
  