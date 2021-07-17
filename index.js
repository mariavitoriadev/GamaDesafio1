document.querySelector("#form").addEventListener('submit', function(e) {
    e.preventDefault();
    localStorage.setItem('name', document.querySelector("#name").value);
    localStorage.setItem('email', document.querySelector("#email").value);

    document.querySelector('.form-wrapper').style.visibility = "hidden";
    document.querySelector('.message-success').style.display = "block";
});