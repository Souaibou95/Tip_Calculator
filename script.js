let btn = document.getElementById("btn");
btn.addEventListener('click', function(){
  let bill_amount = document.getElementById("bill_amount").value;
  let tip_percentage = document.getElementById("tip_percentage").value;
  let tip_amount = document.getElementById("tip_amount").value =
                    bill_amount / tip_percentage;
  let total_bill = document.getElementById("total_bill").value =
                    parseFloat(bill_amount) + parseFloat(tip_amount);

})
