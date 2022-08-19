//Functions 
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    //Increasing or decreasing functionality
    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

//Updating the price when plus or minus button is pressed
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click' , function(){
    //Increasing the case number
    const newCaseNumber = updateCaseNumber(true); 
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal(); 
    
})

document.getElementById('btn-case-minus').addEventListener('click' , function(){
    //Increasing the case number
    const newCaseNumber = updateCaseNumber(false); 
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})