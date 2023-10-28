//hamburger menu
const hamburger = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".container");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// FORM REGISTER
function showError(message) {
    let error = document.getElementById("error")
    error.innerHTML = message
    return false
}

function specialChar(string) {
    for (let i = 0; i < string.length; i++) {
        if(!((string[i] >= 'a' && string[i] <= 'z') || 
        (string[i] >= 'A' && string[i] <= 'Z') || 
        (string[i] >= '0' && string[i] <= '9')))return false
    }return true
}

function validateRegister() {
    //terima value dari html
    let Email = document.getElementById("txtEmail").value
    let Birthday = document.getElementById("Birthday").value
    let username = document.getElementById("txtUsername").value
    let password = document.getElementById("txtPassword").value
    let password2 = document.getElementById("txtPassword2").value
    let region = document.getElementById("selectRegion").value

    let checkBox = document.getElementById("checkBox").checked

    // validasi form

    // email harus mengandung '@' dan diakhiri dengan '.com'
    if (Email.indexOf('@') == -1) {
        return showError("Email must contain @")
    }
     if(!Email.endsWith(".com")){
        return showError("Email must end with .com") 
    }

    
    // harus kelahiran dibawah 2006 (user harus berusia 16 tahun keatas)
     if(Birthday[0]+Birthday[1]+Birthday[2]+Birthday[3] > 2006){
        console.log(Birthday)
        return showError("You need to be 16 years old or older to register")
    }

    // username tidak boleh kosong
     if (username == "") {
        return showError("Username must not be empty")
    }

    // password harus 5 - 15 karakter, harus diawali huruf kapital, dan memiliki special karakter
     if (password.length < 5 || password.length > 15) {
        return showError("Password must be between 5-15 char")
    }
     if (password[0] != password[0].toUpperCase()) {
        return showError("Password must start with uppercase")
    }

     if (specialChar(password)) {
        
        return showError("Password must have special char")
    }

    //confirm password
     if(password != password2){
        return showError("The passwords is different!")
    }

    //Region harus dipilih
     if(region == -1){
        return showError("Region must be choosed")
    }
   
    // checkbox harus dicentang
     if (checkBox == false) {
        return showError("You need to agree to the terms and conditions")
    }
   
    alert("You have succesfully registered")
}   
