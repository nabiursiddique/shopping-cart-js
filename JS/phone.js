//functions
//Updating the number in the input field when plus or minus button is pressed
function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('Phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    
    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

//Updating the total price when phone is increasing or decreasing
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}



document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();   
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})