//Function for calculating the total of phone price or case price
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const CurrentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(CurrentPhoneTotalString);
    return currentPhoneTotal;
}

//Function for setting text in a id
function setTextElementValueById(elementId , value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
//Function for calculating sub total
function calculateSubTotal(){
     const currentPhoneTotal = getTextElementValueById('phone-total');
     const currentCaseTotal = getTextElementValueById('case-total');
     const currentSubtotal = currentPhoneTotal + currentCaseTotal;
 
    setTextElementValueById('sub-total' , currentSubtotal);

     //Calculate tax
     const taxAmountString = (currentSubtotal * 0.1).toFixed(2);
     const taxAmount = parseFloat(taxAmountString)
     setTextElementValueById('tax-amount', taxAmount);

     //calculate final amount
     const finalAmount = currentSubtotal + taxAmount;
     setTextElementValueById('final-total' , finalAmount);
}