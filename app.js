function clearBtn(){
    var clearValue=document.getElementById("result")
    var clearinnerValue=document.getElementById("innerresult")
    clearValue.value= "";
    clearinnerValue.value= "";

}
function number(num){
    var numberInput=document.getElementById("innerresult")
    numberInput.value += num;
}
function resultEnd(){
    var resultValue=document.getElementById("innerresult")
    var resultValueMain=document.getElementById("result")
    resultValueMain.value=eval(resultValue.value)
    
    document.getElementById("innerresult").value =resultValueMain.value;



}
function delNum(){
    var resultValue=document.getElementById("innerresult")
    resultValue.value=(resultValue.value).substring(0,(resultValue.value).length - 1)
}

