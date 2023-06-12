/*
 return the union of two sets
 */
function union(s1, s2) {
  return new Set([... s1, ...s2])
}

/*
 return the intersection of two sets
*/
function intersect(s1, s2) {
  const result = [];
  s1.forEach((e)=>{
    if(s2.has(e)){
      result.push(e)
    }
  })
  
  return new Set(result)
}

/**
return the difference of two sets
*/
function difference(s1, s2) {
  const result = [];
  s1.forEach((e)=>{
    if(s2.has(e)===false){
      result.push(e)
    }
  })
  
  return new Set(result)
}

//ALTERNATIVE
// function setDifference(set1, set2) {
//   const difference = new Set();

//   for (const item of set1) {
//     if (!set2.has(item)) {
//       difference.add(item);
//     }
//   }

//   return difference;
// }
