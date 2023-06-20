function countAllPaarl(regNums){
    const ArrRegNums = regNums.split(",");
    const regNumsForPaarl = [];
    for(let i = 0; i < ArrRegNums.length; i++){
      let regNum = ArrRegNums[i].trim();
        if(regNum.startsWith('CJ')){
            regNumsForPaarl.push(regNum);
        }
    }
    return regNumsForPaarl.length;
}