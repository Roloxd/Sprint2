$(document).ready(function () {
    
    const submit = document.getElementById('submit')
    var email = document.getElementById('formemail');
    var password = document.getElementById('formpassword');
    
    submit.addEventListener('click',()=>{
      
        if(email.checkValidity() == true){
            email.style.borderColor = "green";
        }else{
            email.style.borderColor = "orange";
        }
        if(password.checkValidity() == true){
            password.style.borderColor = "green";
        }else{
            password.style.borderColor = "orange";
        }
    });
    
});
