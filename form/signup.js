
    const form = document.querySelector('form');
    let fname = document.getElementById('firstname');
    let lname = document.getElementById('lastName');
    let password = document.getElementById('password');
    let email = document.getElementById('emaill');
    let fnameError = document.getElementById('error1');
    let button = document.getElementById('submit');
    let itemsArray = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

    localStorage.setItem('users', JSON.stringify(itemsArray));
    const data = JSON.parse(localStorage.getItem('users'));

   
    

    form.addEventListener('submit', record);
   
function record(e){
    e.preventDefault();
    let user = {
        name: fname.value,
        password: password.value,
        Email: email.value
    }
    itemsArray.push(user);
    localStorage.setItem('users', JSON.stringify(itemsArray));

    form.reset();
    alert('registration successfull');
    window.location.href = "sign in.html";

    


}