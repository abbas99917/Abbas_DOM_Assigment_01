// <!-- Task 1: Change Text Using JavaScript -->
let change =  document.getElementById("DOM");
change.innerText = "Welcom to Javascript DOM"

// <!-- Task 2: Change Paragraph Text on Button Click -->
function changeText(){
    document.getElementById("para").innerText = "Paragraph Successfully Change!";
};

// <!-- Task 3: Change Background Color on Button Click -->
function changColor(){
    document.body.style.backgroundColor = "lightblue";
    document.body.style.transition = "0.2s";
};

//  <!-- Task 4: Show Alert Message on Button Click -->
function AlertMessage(){
    alert ("DOM IS WORKING!")
}

//  <!-- Task 5: Update Text Using Input Field -->
function updat(){
let text = document.getElementById("inputText").value;
document.getElementById("myPara").innerText = text;
};