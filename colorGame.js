var numSquares = 6;
var colors = generateRandomColors(numSquares); //generate random 6  colors

//select the squares as an array of 6 elements.
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); //pick a random color to act as target 
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;// change color every reset with colorDisplay
var resultDisplay = document.querySelector("#message");
var heading = document.getElementById("heading");
var resetButton = document.querySelector("#reset");
var easybtn= document.querySelector("#easybtn")
var hardbtn= document.querySelector("#hardbtn")

easybtn.addEventListener("click",function(){ //add selected to selected button
   easybtn.classList.add("selected") 
   hardbtn.classList.remove("selected") 
   numSquares = 3;
   colors = generateRandomColors(numSquares);//generate 3 colors
   pickedColor = pickColor(); //select random color among the 3
   colorDisplay.textContent = pickedColor; //display
   for(var i = 0; i< squares.length;i++){
       if(colors[i]){
           squares[i].style.backgroundColor = colors[i];
       }
       else{
           squares[i].style.display = "none";  //removing the other three squares
       }
   }
})
hardbtn.addEventListener("click",function(){ //add selected to selected button
    easybtn.classList.remove("selected") 
    hardbtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);//generate 6 colors
   pickedColor = pickColor(); //select random color among the 3
   colorDisplay.textContent = pickedColor; //display
   for(var i = 0; i< squares.length;i++){
           squares[i].style.backgroundColor = colors[i];
           squares[i].style.display = "block";  //adding the other three squares after using the easy button
       
   }
})
resetButton.addEventListener("click",function(){
    colors = generateRandomColors(numSquares);//generate new colors
    pickedColor = pickColor();//select new target
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    resultDisplay.textContent = "";
    heading.style.backgroundColor = "steelblue";
    for(var i = 0;i < squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }

})


for( var i =0; i<squares.length;i++){
    //add initial colors to the squares using backgroundcolor
    squares[i].style.backgroundColor = colors[i];

   //add click listeners
    squares[i].addEventListener("click",function(){
       var clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedColor){
        resultDisplay.textContent ="CORRECT";
        resetButton.textContent = "Play Again?"
        for( var i =0; i<squares.length;i++){
            squares[i].style.backgroundColor = pickedColor;
       }
       heading.style.backgroundColor = clickedColor;
    }
           else{
               this.style.backgroundColor = "black";
               resultDisplay.textContent = "Try Again"
                    }
       
    })
}

// pick a random
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//generating an array of 6 colors for the squares
function generateRandomColors(num){
    var arr = []
    for(var i =0;i< num;i++){
        arr.push(randomColors());
    }
    return arr;

}

//inner function to generate a random RGB color
function randomColors(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g +", " + b + ")";
}