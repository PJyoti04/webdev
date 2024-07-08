document.getElementById("log").addEventListener("click",() =>{
    document.getElementById("login").style.display="block";
    document.getElementById("signin").style.display="none";
    document.getElementById("content").style.display="none";
    document.getElementById("add-blog").style.display="none";

    clearInputs();
    document.getElementById("i-input").addEventListener("click",() =>{
        document.getElementById("signin").style.display="block";
        document.getElementById("login").style.display="none";
    });
})

document.getElementById("cross-login").addEventListener("click",() =>{
    document.getElementById("login").style.display="none";
    clearInputs();
    document.getElementById("span1").style.display="none";
    document.getElementById("span2").style.display="none";
    document.getElementById("content").style.display="block";
})
document.getElementById("cross-signin").addEventListener("click",() =>{
    document.getElementById("signin").style.display="none";
    clearInputs();
    document.getElementById("span").style.display="none";    document.getElementById("content").style.display="block";
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
        document.getElementById("span2").style.display="none";
        document.getElementById("span").style.display="none";
        let i;
        let j = 2;
        for(i=0;i <= localStorage.length;i++){
            // console.log(i);
            if(localStorage.key(i) === `${name}`){
                // console.log(localStorage.getItem(`${name}`));
                if(localStorage.getItem((`${name}`)) == `${pass}`){
                    j=0;
                    break;
                }else{
                    j=1;
                }
                // document.getElementById("span").style.display="block";
                
            }
        }
        if(j === 0){
            let obj={
                username:name,
                password:pass
            }
            login.push(obj);
            console.log(login);
            clearInputs();
            document.getElementById("login").style.display="none";
            document.querySelector(".add").style.visibility = "visible";
            document.getElementById("content").style.display="block";
        }
        else if(j === 1){
            document.getElementById("span2").style.display="block"
        }
        else{
            document.getElementById("span").style.display = "block";
        }
        
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
        document.getElementById("span1").style.display="none";
        let i;
        let j;
        for(i=0;i <= localStorage.length;i++){
            // console.log(i);
            if(localStorage.key(i) === `${name}`){
                // document.getElementById("span1").style.display="block";
                j=0;
                break;
            }else{
                j=1;
            }
        }
        if(j !== 0){
            localStorage.setItem(`${name}`,`${pass}`);
            let obj={
                username:name,
                email:email,
                password:pass
            }
            signin.push(obj);
            console.log(signin);
            clearInputs();
            document.getElementById("signin").style.display="none";
            document.querySelector(".add").style.visibility = "visible";
            document.getElementById("content").style.display="block";
        }else{
            document.getElementById("span1").style.display="block";
        }
        
    }
})

function clearInputs() {
    let x = document.getElementsByTagName("input");
    for (let i = 0; i < x.length; i++) {
        x[i].value = "";
    }
}

document.getElementById("add-blog-cross").addEventListener("click",() =>{
    document.getElementById("add-blog").style.display="none";
    clearInputs();
    document.getElementById("blogs").value="";
    document.getElementById("content").style.display="block";
})

document.querySelector(".add").addEventListener("click",() =>{
    document.getElementById("add-blog").style.display="block";
    // clearInputs();
    document.getElementById("content").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("signin").style.display="none";
})
let i = 2;
document.getElementById("blog-submit").addEventListener("click",() =>{
    let title = document.getElementById("blogs").value;
    let image = document.getElementById("image").value;
    if(title === '' || image === ""){
        return;
    }else{
        addBlog(title, image,i);
        document.getElementById("add-blog").style.display="none";
        clearInputs();
        document.getElementById("blogs").value="";
        document.getElementById("content").style.display="block";
        i++;
    }
    
})

function addBlog(title, image,i) {
    let contentDiv = document.getElementById("content");

    let writingDiv = document.createElement("div");
    writingDiv.className = "writing";

    let textDiv = document.createElement("div");
    textDiv.className = "text";
    textDiv.innerText = title;

    let imgDiv = document.createElement("div");
    imgDiv.className = "img";

    let img = document.createElement("img");
    img.src= image;
    img.alt = "Blog Image";

    if(i % 2 === 0){
        imgDiv.appendChild(img);
        writingDiv.appendChild(imgDiv);
        writingDiv.appendChild(textDiv);
        contentDiv.appendChild(writingDiv);
    }else{
        // writingDiv.appendChild(textDiv);
        // imgDiv.appendChild(img);
        // writingDiv.appendChild(imgDiv);
        contentDiv.appendChild(writingDiv);
        writingDiv.appendChild(textDiv);
        writingDiv.appendChild(imgDiv);
        imgDiv.appendChild(img);
    }
    
}