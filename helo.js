const totalTickets = document.getElementById("totalTickets");
const ticketPrice = document.getElementById("ticketPrice");
const totalPrice = document.getElementById("totalPrice");
const grandTotal = document.getElementById("grandTotal");
const couponElement = document.getElementById("couponElement");
const couponButton = document.getElementById("couponButton");
const couponField = document.getElementById("couponField");
const couponCode1 = document.getElementById("couponCode1");
const couponCode2 = document.getElementById("couponCode2");
const discountAmount = document.getElementById("discountAmount");
const confirmButton = document.getElementById("confirmButton");

const phoneNumber = document.getElementById("phoneNumber");

const totalTicketContainer = document.getElementById("totalTicketContainer");

const bookedTickets = [];

function selectSeat(seat) {
  if (bookedTickets.length <= 3) {
    if (!bookedTickets.includes(seat)) {
      makeSelected(seat);
      updateAvailableSeats("totalSeats");
      createElementandUpdatePrice(seat);
      calculateTicketPrice();
      bookedTickets.push(seat);
    } else {
      alert("This seat already booked");
    }
  } else {
    alert("you can book maximum 4 ticket");
  }
  totalTickets.innerText = bookedTickets.length;
}

// set the background color for selected tickets
function makeSelected(ticketId) {
  return document
    .getElementById(ticketId)
    .classList.add("bg-[#1DD101]", "text-white");
}

// update the available ticket from the total tickets
function updateAvailableSeats(availableSeats) {
  return (document.getElementById(availableSeats).innerText =
    parseInt(document.getElementById(availableSeats).innerText) - 1);
}

// create booking history
function createElementandUpdatePrice(seat) {
  const seatNumber = document.createElement("p");
  seatNumber.innerText = seat;
  seatNumber.classList.add("font-normal", "text-base", "text-[#03071299]");

  const Price = document.createElement("p");
  Price.innerText = ticketPrice.innerText;
  Price.classList.add("font-normal", "text-base", "text-[#03071299]");

  const ticketClass = document.createElement("p");
  ticketClass.innerText = "Economy";
  ticketClass.classList.add("font-normal", "text-base", "text-[#03071299]");

  return (
    totalTicketContainer.append(seatNumber),
    totalTicketContainer.appendChild(ticketClass),
    totalTicketContainer.appendChild(Price)
  );
}

// update the price of tickets
function calculateTicketPrice() {
  totalPrice.innerText =
    parseFloat(totalPrice.innerText) + parseFloat(ticketPrice.innerText);
  grandTotal.innerText =
    parseFloat(grandTotal.innerText) + parseFloat(ticketPrice.innerText);
}

// apply coupon code if eligible
function applyCoupon() {
  if (
    couponField.value === couponCode1.innerText ||
    couponField.value === couponCode2.innerText
  ) {
    if (couponField.value === couponCode1.innerText) {
      const discountPrice = parseFloat(totalPrice.innerText) * 0.15;

      const h2 = document.createElement("h2");
      h2.innerText = "Discount";
      const p = document.createElement("p");
      p.innerText = discountPrice;

      discountAmount.appendChild(h2), discountAmount.appendChild(p);
      grandTotal.innerText = parseFloat(grandTotal.innerText) - discountPrice;
    } else {
      const discountPrice = parseFloat(totalPrice.innerText) * 0.2;
      const h2 = document.createElement("h2");
      h2.innerText = "Discount";
      const p = document.createElement("p");
      p.innerText = discountPrice;

      discountAmount.appendChild(h2), discountAmount.appendChild(p);
      grandTotal.innerText = parseFloat(grandTotal.innerText) - discountPrice;
    }
    couponElement.classList.add("hidden");
  } else {
    alert("invalid coupon code");
  }
  couponField.value = "";
}

// enable or disable the coupon button
couponField.addEventListener("click", function () {
  if (bookedTickets.length == 4) {
    couponButton.removeAttribute("disabled");
  } else {
    couponButton.setAttribute("disabled", true);
    couponField.value = "";
    alert("purchase 4 tickets to use coupon code");
  }
});

// if condition is met then goto the confirm booking
confirmButton.addEventListener("mousemove", function () {
  if (bookedTickets.length >= 1 && phoneNumber.value) {
    confirmButton.removeAttribute("disabled");
  } else {
    alert("select minimum one seat and provide phone number");
    confirmButton.setAttribute("disables", true);
  }
});
