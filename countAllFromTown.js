function countAllFromTown(regNums, locCode){
    const ArrRegNums = regNums.split(",");
    const regNumsForTown = [];
    for(let i = 0; i < ArrRegNums.length; i++){
      let regNum = ArrRegNums[i].trim();
        if(regNum.startsWith(locCode)){
        regNumsForTown.push(regNum);
        }
    }
    return regNumsForTown.length;
}