const form = document.querySelector('form');
const cardNumberInput = document.querySelector('input[name="cardnumber"]');
const cardHolderInput = document.querySelector('input[name="cardholder"]');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvvInput = document.getElementById('cvv');

let errorsBox = document.querySelector('.errors');
if (!errorsBox) {
  errorsBox = document.createElement('div');
  errorsBox.className = 'errors';
  errorsBox.setAttribute('role', 'alert');
  errorsBox.style.gridColumn = '1 / 4';
  errorsBox.style.gridRow = '4 / 5';
  errorsBox.style.color = '#b00020';
  errorsBox.style.whiteSpace = 'pre-wrap';
  errorsBox.style.alignSelf = 'center';
  errorsBox.style.fontSize = '14px';
  form.insertBefore(errorsBox, form.querySelector('button'));
}

function displayError(msg) {
  errorsBox.textContent = msg || '';
}

function isCardNumberValid(numberNoSpaces) {
  return numberNoSpaces === '1234123412341234';
}

function formatCardNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
}

cardNumberInput.addEventListener('input', () => {
  const start = cardNumberInput.selectionStart;
  const before = cardNumberInput.value;
  cardNumberInput.value = formatCardNumber(before);
  const diff = cardNumberInput.value.length - before.length;
  cardNumberInput.setSelectionRange(start + diff, start + diff);
});

function digitsOnly(e) {
  e.target.value = e.target.value.replace(/\D/g, '');
}
monthInput.addEventListener('input', digitsOnly);
yearInput.addEventListener('input', digitsOnly);
cvvInput.addEventListener('input', digitsOnly);

monthInput.setAttribute('maxlength', '2');
yearInput.setAttribute('maxlength', '2');
cvvInput.setAttribute('maxlength', '3');

monthInput.addEventListener('input', () => {
  if (monthInput.value.length === 2) yearInput.focus();
});

const expLabel = document.querySelector('#expdate label');
if (expLabel) {
  if (!expLabel.id) expLabel.id = 'expirationDate';
  monthInput.setAttribute('aria-labelledby', expLabel.id);
  yearInput.setAttribute('aria-labelledby', expLabel.id);
}

function submitHandler(event) {
  event.preventDefault();
  displayError('');
  let errorMsg = '';
  const rawCardDigits = cardNumberInput.value.replace(/\s+/g, '');
  if (!/^\d{16}$/.test(rawCardDigits)) {
    errorMsg += 'Card number must be 16 digits.\n';
  } else if (!isCardNumberValid(rawCardDigits)) {
    errorMsg += 'Card number is not valid.\n';
  }
  if (!cardHolderInput.value.trim()) {
    errorMsg += 'Card holder name is required.\n';
  }
  const mm = Number(monthInput.value);
  const yy = Number(yearInput.value);
  if (!(mm >= 1 && mm <= 12)) {
    errorMsg += 'Expiration month must be between 01 and 12.\n';
  }
  if (!/^\d{2}$/.test(yearInput.value)) {
    errorMsg += 'Expiration year must be two digits (e.g., 27).\n';
  }
  const now = new Date();
  const currentYY = now.getFullYear() % 100;
  const currentMM = now.getMonth() + 1;
  if (/^\d{2}$/.test(yearInput.value) && (mm >= 1 && mm <= 12)) {
    if (yy < currentYY || (yy === currentYY && mm < currentMM)) {
      errorMsg += 'Card is expired.\n';
    }
  }
  if (!/^\d{3}$/.test(cvvInput.value)) {
    errorMsg += 'CVV must be 3 digits.\n';
  }
  if (errorMsg) {
    displayError(errorMsg);
    return;
  }
  form.innerHTML = '<h2>Thank you for your purchase.</h2>';
}

form.addEventListener('submit', submitHandler);
