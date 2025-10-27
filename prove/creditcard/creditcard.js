const form = document.querySelector('#checkoutForm')
const paymentSelect = document.querySelector('#paymentMethod')
const creditCardContainer = document.querySelector('#creditCardNumberContainer')
const paypalContainer = document.querySelector('#paypalUsernameContainer')
const creditInput = document.querySelector('#creditCardNumber')
const paypalInput = document.querySelector('#paypalUsername')

const togglePayment = e => {
  const value = e.target.value
  paypalContainer.classList.add('hide')
  creditCardContainer.classList.add('hide')
  paypalInput.required = false
  creditInput.required = false
  if (value === 'creditCard') {
    creditCardContainer.classList.remove('hide')
    creditInput.required = true
  } else if (value === 'paypal') {
    paypalContainer.classList.remove('hide')
    paypalInput.required = true
  }
  paymentSelect.setAttribute('aria-expanded', value === 'creditCard' || value === 'paypal')
}

paymentSelect.addEventListener('change', togglePayment)

const displayError = msg => document.querySelector('.errors').textContent = msg
const isCardNumberValid = n => n === '1234123412341234'

// auto-format spaces every 4 digits, max 16 digits total
creditInput.addEventListener('input', e => {
  let value = e.target.value.replace(/\D/g, '')
  value = value.substring(0, 16)
  value = value.replace(/(.{4})/g, '$1 ').trim()
  e.target.value = value
})

const handleSubmit = e => {
  e.preventDefault()
  let error = ''
  displayError('')
  if (paymentSelect.value === 'creditCard') {
    const num = creditInput.value.replace(/\s+/g, '')
    if (!/^\d{16}$/.test(num)) error = 'Card number must be 16 digits\n'
    else if (!isCardNumberValid(num)) error = 'Card number is not valid\n'
    const m = Number(document.querySelector('#month').value)
    const y = Number(document.querySelector('#year').value)
    const now = new Date()
    const fullYear = 2000 + y
    if (fullYear < now.getFullYear() || (fullYear === now.getFullYear() && m <= now.getMonth() + 1))
      error += 'Card is expired\n'
  }
  if (error) return displayError(error)
  form.innerHTML = '<h2>Thank you for your purchase.</h2>'
}

form.addEventListener('submit', handleSubmit)
