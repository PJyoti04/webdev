let updInd = JSON.parse(localStorage.getItem("updInd"));
let dataupdate = JSON.parse(localStorage.getItem( "data"))
document.getElementById("id").value = dataupdate[updInd].id;
document.getElementById("title").value = dataupdate[updInd].title;
document.getElementById("price").value = dataupdate[updInd].price;
document.getElementById("desc").value = dataupdate[updInd].description;
document.getElementById("category").value = dataupdate[updInd].category;
document.getElementById("image").value = dataupdate[updInd].image;
document.getElementById("rate").value = dataupdate[updInd].rating.rate;
document.getElementById("count").value = dataupdate[updInd].rating.count;


function updateData() {
    dataupdate[updInd].id = document.getElementById("id").value
    dataupdate[updInd].title = document.getElementById("title").value
    dataupdate[updInd].price = document.getElementById("price").value
    dataupdate[updInd].description = document.getElementById("desc").value
    dataupdate[updInd].category = document.getElementById("category").value
    dataupdate[updInd].image = document.getElementById("image").value
    dataupdate[updInd].rating.rate = document.getElementById("rate").value
    dataupdate[updInd].rating.count = document.getElementById("count").value
    localStorage.setItem("data", JSON.stringify(dataupdate))
    clearInputs()
    window.location.href = "home.html"
}

// document.getElementById("add-cross").addEventListener("click",() =>{
//     // document.getElementById("add-blog").style.display="none";
//     clearInputs();
//     window.location.href = "home.html"
// })