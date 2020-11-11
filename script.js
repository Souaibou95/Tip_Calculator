let btn = document.getElementById("btn");
btn.addEventListener('click', function(){
  let bill_amount = document.getElementById("bill_amount").value;
  let tip_percentage = document.getElementById("tip_percentage").value;
  let tipAmount = bill_amount / tip_percentage;
  let tip_amount = document.getElementById("tip_amount").value = tipAmount.toFixed(2);

  let totalBill = document.getElementById("total_bill").value =
                    parseFloat(bill_amount) + parseFloat(tip_amount);
  let total_bill = totalBill.toFixed(2);

})
