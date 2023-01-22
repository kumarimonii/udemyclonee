
$(function () {
    $('[data-toggle="popover"]').popover()
  })
  var btn = document.getElementById("btn");
  var span = document.getElementById("span")
  let count = 0;
  //let total=0;
  function display(event) {
    count += 1;
    document.getElementById("span").innerHTML = count;
  
    var products = JSON.parse(localStorage.getItem("products")) || [];
    var namee = event.target.parentElement.children[0].innerText
    console.log(namee)
    var price = event.target.parentElement.children[3].innerText
    console.log(price)
    var mrp = event.target.parentElement.children[4].innerText
    console.log(mrp)
    //   var total=event.target
    //  console.log(total)
    products.push({ namee, price, mrp })
    localStorage.setItem("products", JSON.stringify(products));
    console.log(products)
  
  
  
    let trElement = document.createElement("tr");
    let tdElement1 = document.createElement("td");
    tdElement1.setAttribute("style", "border:1px solid;padding: 10px");
    let tdElement2 = document.createElement("td");
    tdElement2.setAttribute("style", "border:1px solid;padding: 10px");
  
    let tdElement4 = document.createElement("td");
    tdElement4.setAttribute("style", "border:1px solid;padding: 10px");
    tdElement4.setAttribute("id", "mrp")
   
    let tdElement7 = document.createElement("td");
    tdElement7.setAttribute("style", "border:1px solid;padding: 10px");
    tdElement7.setAttribute("id", "price")
    let tdElement8 = document.createElement("td");
    var netPrice = parseInt(price) - parseInt(mrp);
    tdElement8.innerText = netPrice;
    tdElement8.setAttribute("class", "net");
  
    tdElement8.setAttribute("style", "border:1px solid;padding: 10px");
       let tdElement9 = document.createElement("td");
    tdElement9.setAttribute("style", "border:1px solid;padding: 10px");
    tdElement9.setAttribute("id", "sub")
  
    tdElement1.innerText = document.getElementById("tbody").childElementCount + 1;
    tdElement2.innerText = namee;
    tdElement4.innerText = price;
  
    tdElement7.innerText = mrp;
   
    tdElement9.innerText = mrp
    var netPrice = parseInt(price) - parseInt(mrp);
    tdElement8.innerText = netPrice;
    tdElement8.setAttribute("id", "net");
  
    trElement.appendChild(tdElement1);
    trElement.appendChild(tdElement2);
    trElement.appendChild(tdElement4);
    trElement.appendChild(tdElement7);
    trElement.appendChild(tdElement8);
    trElement.appendChild(tdElement9);
  
    document.getElementById("tbody").appendChild(trElement)
  
    update()
  }
  
  function check() {
    var products = JSON.parse(localStorage.getItem("products")) || [];
  
    // Get the order summary div
    var orderSummaryDiv = document.getElementById("order-summary");
  
    let totalLabel = document.createElement("label");
    totalLabel.classList.add("label-class");
    totalLabel.innerText = "Total: ";
    orderSummaryDiv.appendChild(totalLabel);
    let totalInput = document.createElement("input");
    totalInput.setAttribute("type", "text");
    totalInput.setAttribute("id", "total");
    orderSummaryDiv.appendChild(totalInput);
  
    let savingLabel = document.createElement("label");
    savingLabel.classList.add("label-class");
    savingLabel.innerText = "Saving: ";
    orderSummaryDiv.appendChild(savingLabel);
    let savingInput = document.createElement("input");
    savingInput.setAttribute("type", "text");
    savingInput.setAttribute("id", "totalsave");
    orderSummaryDiv.appendChild(savingInput);
    // Create a new element for the discounted total
    let amountLabel = document.createElement("label");
    amountLabel.classList.add("label-class");
    amountLabel.innerText = "Amount: ";
    orderSummaryDiv.appendChild(amountLabel);
    let amountInput = document.createElement("input");
    amountInput.setAttribute("type", "text");
    amountInput.setAttribute("id", "amount");
    orderSummaryDiv.appendChild(amountInput)
   
    for (var i = 0; i < products.length; i++) {
      let product = products[i];
  
      var updateValues = update();
      totalInput.value = updateValues.total;
      savingInput.value = updateValues.saving;
    }
   
    var placeOrderBtn = document.getElementById("place-order-btn");
    placeOrderBtn.addEventListener("click", function () {
      // Get the current total value
      var total = parseInt(document.getElementById("total").value);
  
      // Get the entered promo code
      var enteredPromoCode = document.querySelector(".promo").innerText;
  
      // Get the correct promo code
      var correctPromoCode = "BOH232";
  
      // Check if the entered promo code matches the correct one
      if (enteredPromoCode === correctPromoCode) {
        // Calculate the 5% discount
        var discount = total * 0.05;
  
        // Update the amount input field with the discounted total
        document.getElementById("amount").value = total - discount;
      } else {
        alert("Invalid promo code!");
      }
    });
  
   
      
  }
    
    function update() {
        var products = JSON.parse(localStorage.getItem("products")) || [];
        let prices = document.querySelectorAll("#price");
        let total = Array.from(prices).map(price => parseInt(price.innerText)).reduce((acc, val) => acc + val);
        console.log(total);
        let totalInput = document.getElementById("total");
        totalInput.value = total;
        // Get the total savings by summing up the difference between the MRP and price of all products
        let netprices = document.querySelectorAll("#net");
        let saving = Array.from(netprices).map(net => parseInt(net.innerText)).reduce((acc, val) => acc + val);
        console.log(saving);
        let savingInput = document.getElementById("totalsave");
        savingInput.value = saving;
  
        if (document.getElementById("total") !== null) {
          document.getElementById("total").value = total;
        }
        if (document.getElementById("totalsave") !== null) {
          document.getElementById("totalsave").value = saving;
        }
  
        return { total: total, saving: saving };
      }
  
 function conform() {
   alert("Thanks for Purchasing!!!")
 }
 function out(){
  window.location.href = "login.html";
 }
  