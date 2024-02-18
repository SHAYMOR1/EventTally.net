function checkRemainingDays() {
// code to calculate remaining days for the existing date
}

function addDateInput() {
var datesContainer = document.querySelector('.dates');
var newDateInput = document.createElement('div');
newDateInput.classList.add('date');
newDateInput.innerHTML = `
<label for="date${datesContainer.childElementCount + 1}">תאריך ${datesContainer.childElementCount + 1}:</label>
<input type="datetime-local" id="date${datesContainer.childElementCount + 1}">
 `;
datesContainer.appendChild(newDateInput);
}

function goToNextPage(){
// code to navigate to the next page
}
