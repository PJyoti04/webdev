// document.getElementById("password").style.visibility='hidden';


let i=0;
let x = document.getElementsByClassName("input");
x[i].style.visibility='visible';
document.getElementById("next").addEventListener("click",()=>{
    // console.log(i);
    if(i > 1){
        i=1;
    }
    x[++i].style.visibility='visible';
    x[i-1].style.visibility='hidden';

    // i++;
    if(i === 2){
        document.querySelector('.btn').style.visibility='visible';
    }
});


document.getElementById("prev").addEventListener("click",()=>{
    if(i <= 0){
        i = 0;
    }else{
        i--;
    }
    // console.log(i);
    x[i+1].style.visibility='hidden';
    x[i].style.visibility='visible';

    if(i === 1){
        document.querySelector('.btn').style.visibility='hidden';
    }
});

function fun(){
    let input = document.querySelectorAll("input");
    console.log(input[0].value);
    input[0].value="";
    console.log(input[1].value);
    input[1].value="";
    console.log(input[2].value);
    input[2].value="";

}