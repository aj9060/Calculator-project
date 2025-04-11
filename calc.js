// DOM

function onaddition(){
    let num1= document.getElementById("input1");
    let num2= document.getElementById("input2");
    let n1= parseInt(num1.value);
    let n2= parseInt(num2.value);
    let res= n1+n2;

    let displaydata= document.getElementById("result");

    displaydata.innerHTML= `<h2>Your Result is : ${res}</h2>`;
}
function onsubtraction(){
    let num1= document.getElementById("input1");
    let num2= document.getElementById("input2");
    let n1= parseInt(num1.value);
    let n2= parseInt(num2.value);
    let res;
    if(n1>=n2){
     res= n1-n2;
    }else{
        alert("subtraction is not possible")
    }

    let displaydata= document.getElementById("result");

    displaydata.innerHTML= `<h2>Your Result is : ${res}</h2>`;
    
}
function ondivision(){
    let num1= document.getElementById("input1");
    let num2= document.getElementById("input2");
    let n1= parseFloat(num1.value);
    let n2= parseFloat(num2.value);
    let res =n1/n2;
    

    let displaydata= document.getElementById("result");

    displaydata.innerHTML= `<h2>Your Result is : ${res}</h2>`;
    
}
function onmultiply(){
    let num1= document.getElementById("input1");
    let num2= document.getElementById("input2");
    let n1= parseInt(num1.value);
    let n2= parseInt(num2.value);
    let res=n1*n2;
    

    let displaydata= document.getElementById("result");

    displaydata.innerHTML= `<h2>Your Result is : ${res}</h2>`;
    
}