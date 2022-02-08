// Create a button element
const button = document.createElement('button')

// Set the button text to 'Can you click me?'
button.innerText = 'Can you click me?'

button.addEventListener('click', () => {
    // When there is a 'click'
    // it shows an alert in the browser
    alert('Oh, you clicked me!')
})

document.body.appendChild(button)

