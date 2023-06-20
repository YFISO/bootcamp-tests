function totalPhoneBill(CustActions){
    const ArrCustActions = CustActions.split(",");
      let totalBill = 0;
      for(let i = 0; i < ArrCustActions.length; i++ ){
      let CustAct = ArrCustActions[i].trim();
        if(CustAct === "call"){
        totalBill += 2.75
        }
        else{
        totalBill += 0.65
        }
      }
    return "R" + totalBill.toFixed(2);
}