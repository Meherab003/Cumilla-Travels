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
      grandTotalCalculation(seat);
    } else {
      alert("You can select 4 Seats Maximum");
    }
  } else {
    alert("You've already selected the seat");
  }
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

  return (totalTicketPrice.innerText = totalTicketPriceCalc);
}

//apply button
couponInput.addEventListener("click", function () {
  if (bookedSeats.length == 4) {
    applyButton.removeAttribute("disabled");
  } else {
    applyButton.setAttribute("disabled", true);
    couponInput.value = "";
    alert("purchase 4 tickets to use coupon code");
  }
});

//Coupon input
let discount;
applyButton.addEventListener("click", function () {
  let grandTotalCalc;
  if (
    couponInput.value == couple20.innerText ||
    couponInput.value == new15.innerText
  ) {
    inputContainer.setAttribute("hidden", "");

    if (couponInput.value == couple20.innerText) {
      discount = (parseFloat(totalTicketPrice.innerText) * 20) / 100;
      console.log("Hello");
    } else {
      discount = (parseFloat(totalTicketPrice.innerText) * 15) / 100;
    }
    const discountName = document.createElement("p");
    discountName.innerText = "Discount";
    const discountContainer = document.createElement("p");
    discountContainer.innerText = discount;

    grandTotalCalc = parseFloat(totalTicketPrice.innerText) - discount;

    discountName.classList.add("font-secondary");
    discountName.classList.add("font-medium");
    discountContainer.classList.add("font-medium");
    discountContainer.classList.add("font-secondary");
    discountDiv.classList.add("flex");
    discountDiv.classList.add("justify-between");
    discountDiv.appendChild(discountName);
    discountDiv.appendChild(discountContainer);
  } else {
    alert("Invalid Coupon");
  }
  return (grandTotal.innerText = grandTotalCalc);
});

//grand Total
function grandTotalCalculation(elementID) {
  const grandTotalCalc = parseFloat(totalTicketPrice.innerText);

  return (grandTotal.innerText = grandTotalCalc);
}

//Confirm Button
// confirmButton.addEventListener("mouseover", function () {
//   alert("Select One seat and your Phone Number");
// });

// phoneNumber.addEventListener("keyup", function confirmButtonFunction() {
//   if (bookedSeats.length >= 1) {
//     confirmButton.removeAttribute("disabled");
//   }
// });

confirmButton.addEventListener("mousemove", function () {
  if (!bookedSeats.length >= 1 && !phoneNumber.value) {
    alert("select minimum one seat and provide a phone number");
    confirmButton.setAttribute("disabled");
  }
});
