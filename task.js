function processList(inputList) {
    if (inputList.length % 10 !== 0) {
      throw new Error('Error: Input list must be a multiple of 10 in length.');
    }
  
    const reqNum = [];
    
    for(let i = 0; i < inputList.length; i++) {
        if(i % 2 !== 0 && i % 3 !== 0)
        {
            reqNum.push(inputList[i]);
        }
    }
  
    return reqNum;
}
  
module.exports = processList;
  