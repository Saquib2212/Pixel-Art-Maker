// Select color input
var colorInput=document.querySelector("#colorPicker")

// selecting elements from DOM and storing them in Variables
var heightInput=document.querySelector("#inputHeight")
var widthInput=document.querySelector("#inputWidth")
var tablecr=document.querySelector("#pixelCanvas")
var meter=document.querySelector("#sizePicker")


//function calls makegrid function when user input the  height and width and click on submit.
//for loop will clear the existing grid when user click on submit button

meter.addEventListener("submit",function(event){
    //preventDefault will prevent page refresh on clicking submit.
    event.preventDefault();
    //for loop will clear the existing grid when user click on submit button
    for (i=1; i<=tablecr.childElementCount;i++){
        tablecr.removeChild(tablecr.firstChild)
    }
    makeGrid(heightInput.value,widthInput.value);
})

//ht= height enter by the user= no. of square representing height of grid
//wt= width enter by the user=no. of square representing width of grid
// function draws grid and assign event listener to all square in it.
function makeGrid(ht,wt) {
    for(let i=0;i<ht;i++){
        let row=tablecr.insertRow(i);
        for(let j=0;j<wt;j++){
            let colum=row.insertCell(j);

            colum.addEventListener("click",function(){
                colum.style.backgroundColor=colorInput.value;
            
            });
        }
    }

}
