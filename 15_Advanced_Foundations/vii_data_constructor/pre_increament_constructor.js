let currTicketNumber = 0;

function getTicketNumber() {
  return ++currTicketNumber;
}

console.log(`Guest 1, your ticket number is: ${getTicketNumber()}`);
console.log(`Guest 2, your ticket number is: ${getTicketNumber()}`);
console.log(`Guest 3, your ticket number is: ${getTicketNumber()}`);
