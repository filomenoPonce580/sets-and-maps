function equalArrays(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  }else if(a1.length === 0 & a2.length === 0){
    return true
  }
  
  function createFrequencyMap(arr) {
    const frequencyMap = new Map();

    for (const element of arr) {
      frequencyMap.set(element, frequencyMap.get(element) + 1 || 1);
    }
    return frequencyMap;
  }
  
  const map1 = createFrequencyMap(a1);
  const map2 = createFrequencyMap(a2);
  
  for (const [key, value] of map1) {
    if(!map2.has(key) || map2.get(key)!== value){
      return false
    }
    return true
  }
}
