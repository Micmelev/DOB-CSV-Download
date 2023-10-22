let input = document.getElementById("inputEl")
let downloadBtn = document.getElementById("downloadBtnEl")
let url = 'https://data.cityofnewyork.us/resource/'
let csv = '.csv?bin='
let list = ['3h2n-5cm9','6bgk-3dad','eabe-havv']
let dropDown = document.getElementById("listName")
let listType =''

dropDown.onchange = function(){
    let name = document.getElementById("listName")
    let name1 = name.value
    if (name1 === "DOB") {
        listType = list[0]
        console.log(listType)
    }
    else if (name1 === "DOB ECB") {
        listType = list[1]
        console.log(listType)
    }
    else if (name1 === "Complaints") {
        listType = list[2]
        console.log(listType)
    } 
  }

downloadBtn.addEventListener("click",function(){ 
    let bin = input.value
    
        window.open(url+listType+csv+bin)
        // window.location.assign(url+"6bgk-3dad.csv?bin="+bin)
     
    console.log(bin)
    console.log("hello")
    // input.value = ""

})

setInterval(
    function() {
    input.value = "";
    }, 20000)
