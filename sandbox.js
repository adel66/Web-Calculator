const numbers = document.querySelectorAll(".nums");
const controls = document.querySelectorAll(".controls");
const screennumbers = document.getElementById("dynamic-number");
const screenresult = document.getElementById("result");

let num1 = 0;
let num2 = 0;
let currentoperation ="";

numbers.forEach(btn => {
    btn.addEventListener("mouseover",() => {
        btn.style.backgroundColor="red";
    })

    btn.addEventListener("mouseout",() => {
        btn.style.backgroundColor="Grey";
    })
});



controls.forEach(btn => {
    btn.addEventListener("mouseover",() => {
        btn.style.backgroundColor="red"
    })

    btn.addEventListener("mouseout",() => {
        btn.style.backgroundColor="orange"
    })
});


function add(num1,num2){
    return num1+num2;
};


function substract(num1,num2){
    return num1-num2;
};


function multiply(num1,num2){
    return num1*num2;
};


function divide(num1,num2){
    return num1/num2;
};

numbers.forEach(btn => {
    btn.addEventListener("click", () =>{
        screennumbers.value += btn.innerText;
    })
})



controls.forEach(btn => {
    btn.addEventListener("click",() =>{
        if(btn.innerText === "+"){
            num1 = screennumbers.value;
            screennumbers.style.visibility ="visible";
            screennumbers.value = "";
            screenresult.value = "";
            currentoperation = "+";
        }else if(btn.innerText === "-"){
            num1 = screennumbers.value;
            screennumbers.value = "";
            screenresult.value = "";
            currentoperation = "-";
        }else if(btn.innerText === "x"){
            num1 = screennumbers.value;
            screennumbers.value = "";
            screenresult.value = "";
            currentoperation = "x";
        }else if(btn.innerText === "÷"){
            num1 = screennumbers.value;
            screennumbers.value = "";
            screenresult.value = "";
            currentoperation = "÷";
        }else if(btn.innerText === "="){
            num2 = screennumbers.value;
            if(currentoperation === "+"){
                screennumbers.value = Number(num1) + Number(num2);
                screenresult.value = Number(num1) + Number(num2);
                screennumbers.style.visibility="hidden";
                num1 = screenresult.value ;
            }else if(currentoperation === "-"){
                screennumbers.value = Number(num1) -  Number(num2);
                screenresult.value = Number(num1) -  Number(num2);
                screennumbers.style.visibility="hidden";
                num1 = screenresult.value ;
            }else if(currentoperation === "x"){
                screennumbers.value = Number(num1) *  Number(num2);
                screenresult.value = Number(num1) *  Number(num2);
                screennumbers.style.visibility="hidden";
                num1 = screenresult.value ;
            }else if(currentoperation === "÷"){
                screennumbers.value = Number(num1) /  Number(num2);
                screenresult.value = Number(num1) /  Number(num2);
                screennumbers.style.visibility="hidden";
                num1 = screenresult.value ;
            }
        }else if(btn.innerText === "C"){
            screennumbers.style.visibility ="visible";
            num1 = 0;
            num2 = 0;
            screennumbers.value = "";
        }else if(btn.innerText === "AC"){
            screennumbers.style.visibility ="visible";
            num1 = 0;
            num2 = 0;
            screennumbers.value = "";
            screenresult.value = "";
        }else if(btn.innerText === "DEL"){
            screennumbers.style.visibility ="visible";
            let value = screennumbers.value;
            value = String(screennumbers.value).substring(0,String(screennumbers.value).length - 1);
            screennumbers.value = value;
        }
    })
})