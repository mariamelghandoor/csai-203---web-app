document.querySelector('form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    if (!name || !email || !phone) {
        event.preventDefault();
        alert('All fields are required!');
    }
});

