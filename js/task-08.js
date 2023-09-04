const logForm = document.querySelector('.login-form')

logForm.addEventListener('submit', submitHandler)

function submitHandler(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }
    const userDetails = { email: email.value, Password: password.value }

    console.log(userDetails)
    event.currentTarget.reset()
}