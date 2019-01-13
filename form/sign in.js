const form = document.querySelector('form');

form.addEventListener('submit',e => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem('users'));
    let email = document.getElementById('mail').value;
    let password = document.getElementById('password').value;



    data.find(element => {
        if(element.Email == email && element.password == password){
            alert('welcome ' + element.name);
            window.location.href = 'welcome.html';
        }
    })

    
})


