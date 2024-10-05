function showSeatSelection(){
    hideElementById('buy-ticket');
    ShowElementById('ticketSet-section')
 }
   
 const allSeat = document.getElementsByClassName('seat')
 
 let leftSeat = 40;
 const maxSeat = 4
     for(const seat of allSeat){
         
           seat.addEventListener('click',function(e){
             seat.classList.add('selected')
             
         
         
          
 
 const ticketClass = 'Economoy';
 const ticketPrice = 550;


const countSeat = getConvertedValue('seat-count');
document.getElementById('seat-count').innerText = countSeat + 1
if(maxSeat == countSeat){
    alert('only 4 set u can select')
 }

 const leftSeat = getConvertedValue('seat-left')
 document.getElementById('seat-left').innerText = leftSeat - 1
 
 
 const selectedContainer = document.getElementById('selected-Customer-seat')
  const selectItem = e.target.parentNode.childNodes[3].innerText;
 const li = document.createElement('li');
 const p = document.createElement('p');
 p.innerText = ticketClass;
 const p2 = document.createElement('p');
   p2.innerText = ticketPrice
   const p3 = document.createElement('p')
   p3.innerText = selectItem
   li.appendChild(p3)
 li.appendChild(p)
 li.appendChild(p2)
 
 selectedContainer.appendChild(li)
 updateTotalCost(ticketPrice)
 updateGrandTotal()
 
 })      }
 
 
 
 
 
 
 function updateGrandTotal(status){
   const totalCost = getConvertedValue('total-cost')
   if(status == undefined){
    document.getElementById('grand-total').innerText = totalCost;
} else {
    const CouponCode = document.getElementById('coupon-Code').value;

    if(CouponCode === 'Couple 20'){
        const disCounted = totalCost * 0.2;
        document.getElementById('grand-total').innerText = totalCost - disCounted;
    } else if(CouponCode === 'NEW15'){
        const disCounted2 = totalCost * 0.15;
        document.getElementById('grand-total').innerText = totalCost - disCounted2;
    } else {
        alert('Please enter a valid coupon code');
    }
}

   }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 function updateTotalCost(value){
   
   const totalCost = getConvertedValue('total-cost')
   const sum = totalCost + parseInt(value)
   document.getElementById('total-cost').innerText = sum
 }
 
 
 function getConvertedValue(id){
   const ticketPrice = document.getElementById(id).innerText;
   const convertedTicketPrice = parseInt(ticketPrice)
   return convertedTicketPrice
 
 }
 
 
 document.getElementById("next-btn").addEventListener("click", function () {

   const name = document.getElementById("customerName").value.trim();
   const phone = document.getElementById("customerNumber").value.trim();
   const email = document.getElementById("customerEmail").value.trim();
 

   if (name === "" || phone === "number" || email === "") {
       alert("Please fill out all required fields.");
       return;
   }
 if(isNaN(phone)){
   alert('please input a valid number')
   return
 }
   
 
   
   const modal = document.getElementById("successModal");
   modal.classList.remove("hidden");
 });

 
 document.getElementById("closeModal").addEventListener("click", function () {
   const modal = document.getElementById("successModal");
   modal.classList.add("hidden");
 });
 