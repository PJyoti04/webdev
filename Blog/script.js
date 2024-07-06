document.getElementById("log").addEventListener("click",() =>{
    document.getElementById("login").style.display="block";
    document.getElementById("signin").style.display="none";
    let x = document.getElementsByTagName("input");
    for (let i = 0; i < x.length; i++) {
        x[i].value = "";
    }
    document.getElementById("i-input").addEventListener("click",() =>{
        document.getElementById("signin").style.display="block";
        document.getElementById("login").style.display="none";
    });
})

document.getElementById("cross-login").addEventListener("click",() =>{
    document.getElementById("login").style.display="none";
    let x = document.getElementsByTagName("input");
    for (let i = 0; i < x.length; i++) {
        x[i].value = "";
    }
})
document.getElementById("cross-signin").addEventListener("click",() =>{
    document.getElementById("signin").style.display="none";
    let x = document.getElementsByTagName("input");
    for (let i = 0; i < x.length; i++) {
        x[i].value = "";
    }
})

let login = [];
let signin = [];

document.getElementById("btn").addEventListener("click",() => {
    // e.preventDefault();
    let name = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if(name === "" || pass === ""){
        return;
    }else{
        let obj={
            username:name,
            password:pass
        }
        login.push(obj);
        console.log(login);
        clearInputs();
        document.getElementById("login").style.display="none";
    }
})


document.getElementById("button").addEventListener("click",() => {
    // e.preventDefault();
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    let email = document.getElementById("email").value;
    if(name === "" || pass === "" || email === ""){
        return;
    }else{
        let obj={
            username:name,
            email:email,
            password:pass
        }
        signin.push(obj);
        console.log(signin);
        clearInputs();
        document.getElementById("signin").style.display="none";
    }
})

function clearInputs() {
    let x = document.getElementsByTagName("input");
    for (let i = 0; i < x.length; i++) {
        x[i].value = "";
    }
}