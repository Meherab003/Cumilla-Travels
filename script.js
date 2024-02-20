const totalSeats = document.getElementById("total-seats");
const ticketPrice = document.getElementById("ticket-price");
const seatCounter = document.getElementById("seat-counter");
const ticketContainer = document.getElementById("tickets-container");
const totalTicketPrice = document.getElementById("total-price");
const grandTotal = document.getElementById("grand-total");
const couponInput = document.getElementById("coupon-input");
const couple20 = document.getElementById("couple-20");
const new15 = document.getElementById("new-15");
const applyButton = document.getElementById("apply-Button");
const inputContainer = document.getElementById("input-container");
const discountDiv = document.getElementById("discount-div");
const confirmButton = document.getElementById("confirmButton");
const phoneNumber = document.getElementById("phoneNumber");

//Seats Array
const bookedSeats = [];
// Main Function: it will work when you click on the seat buttons
function getClickedButton(seat) {
  if (!bookedSeats.includes(seat)) {
    if (bookedSeats.length <= 3) {
      changedBackground(seat);
      remainingSeats(seat);
      addTicketDetail(seat);
      bookedSeats.push(seat);
      addTicketContainer(seat);
      totalPriceCalculation(seat);
    } else {
      alert("You can select 4 Seats Maximum");
    }
  } else {
    alert("You've already selected the seat");
  }
  console.log(bookedSeats);
}

//Assigned Functions

//seat background color change
function changedBackground(elementID) {
  return document.getElementById(elementID).classList.add("bg-[#1dd100]");
}

//total Seat decrement
function remainingSeats(elementID) {
  return (totalSeats.innerText = parseInt(totalSeats.innerText) - 1);
}

//Increment ticketCounter number
function addTicketContainer(elementID) {
  return (seatCounter.innerText = bookedSeats.length);
}

//Add Ticket details in Ticket container
function addTicketDetail(elementID) {
  const ticketId = document.createElement("p");
  ticketId.innerText = elementID;
  ticketId.classList.add("ticket-container-items");

  const ticketClass = document.createElement("p");
  ticketClass.innerText = "Economy";
  ticketClass.classList.add("ticket-container-items");
  ticketClass.classList.add("text-center");

  const ticketPriceDetails = document.createElement("p");
  ticketPriceDetails.innerText = ticketPrice.innerText;
  ticketPriceDetails.classList.add("ticket-container-items");
  ticketPriceDetails.classList.add("text-end");

  return (
    ticketContainer.appendChild(ticketId),
    ticketContainer.appendChild(ticketClass),
    ticketContainer.appendChild(ticketPriceDetails)
  );
}

//total Price
function totalPriceCalculation(elementID) {
  const perTicketPrice = parseInt(ticketPrice.innerText);
  const totalTicketPriceCalc = perTicketPrice * bookedSeats.length;
  return (
    (totalTicketPrice.innerText = totalTicketPriceCalc), totalTicketPriceCalc
  );
}

//grand Total With coupon
couponInput.addEventListener("click", function () {
  if (bookedSeats.length == 4) {
    applyButton.removeAttribute("disabled");
  } else {
    applyButton.setAttribute("disabled", true);
    couponInput.value = "";
    alert("purchase 4 tickets to use coupon code");
  }
});

// function Compare(){
//   if(bookedSeats.length == 4){
//     couponConfirm(),
//   }
// }

//Apply Button trigged
// applyButton.addEventListener("click", function () {
//   const perTicketPrice = parseInt(ticketPrice.innerText);
//   const totalTicketPriceCalc = perTicketPrice * bookedSeats.length;
//   inputContainer.classList.add("hidden");
//   if (couponInput.value == "Couple 20") {
//     const discountCal = (totalTicketPriceCalc * 15) / 100;
//   } else if (couponInput.value == "NEW15") {
//     const discountCal = (totalTicketPriceCalc * 20) / 100;
//   }

//   const discountName = document.createElement("p");
//   discountName.innerText = "Discount";
//   const discount = document.createElement("p");
//   discount.innerText = discountCal;
//   discountDiv.appendChild(discountName), discountDiv.appendChild(discount);
// });

function applyCouponCode() {
  if (
    couponInput.value === couple20.innerText ||
    couponInput.value === new15.innerText
  ) {
    if (couponInput.value === couple20.innerText) {
      const discountPrice = (parseFloat(totalPrice.innerText) * 15) / 100;

      const discountName = document.createElement("p");
      discountName.innerText = "Discount";
      const discount = document.createElement("p");
      discount.innerText = discountPrice;

      discountDiv.appendChild(discountName), discountDiv.appendChild(discount);
      grandTotal.innerText = parseFloat(grandTotal.innerText) - discountPrice;
    } else {
      const discountPrice = (parseFloat(totalPrice.innerText) * 20) / 100;
      const discountName = document.createElement("p");
      discountName.innerText = "Discount";
      const discount = document.createElement("p");
      discount.innerText = discountPrice;

      discountDiv.appendChild(discountName), discountDiv.appendChild(discount);
      grandTotal.innerText = parseFloat(grandTotal.innerText) - discountPrice;
    }
    inputContainer.classList.add("hidden");
  } else {
    alert("Invalid Coupon");
  }
  couponInput.value = "";
}

confirmButton.addEventListener("click", function () {
  if (bookedSeats.length >= 1 && phoneNumber.value) {
    confirmButton.removeAttribute("disabled");
  } else {
    alert("select minimum one seat and provide phone number");
    confirmButton.setAttribute("disables", true);
  }
});
