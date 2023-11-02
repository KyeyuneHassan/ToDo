// const inputBox =document.getElementById("input-box");
// const listContainer= document.getElementById("list-container");
// function addTask(){
//     if(inputBox.value === ''){
//         alert("You must write something!");
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML= '\u00d7'
//     }
//     inputBox.value=""; 

// }
// else {
//     listContainer.addEvenlistener('click',function (e){
//         if
//          (e.tagName is equivalent)})


// }
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const event = new KeyboardEvent('keydown', {
    key: 'Enter',
    code: 'Enter',
    which: 13,
    keyCode: 13,
  });
  document.getElementById('').dispatchEvent('click');

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span =  document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);}
    }
    listContainer.appendChild(li);
        let span =  document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        inputBox.value = ""; 

        listContainer.addEventListener("click", function(e){
            if(e.target.tagName === "LI"){
                e.target.classList.toggle("checked");
            }
            else if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove();
            }
        }, false);
       