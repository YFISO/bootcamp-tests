function countRegNumber(regNo){
    const regNumbersArr = [];
  regNumbersArr.push(regNo.split(","));
   // return regNumbersArr[0].length
    return regNo.split(",").length;
}