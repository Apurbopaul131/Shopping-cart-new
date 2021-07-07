let plusIcon = document.querySelector('#icon-plus');
plusIcon.addEventListener('click',(e)=>{
    e.preventDefault();
//    let phoneInput = document.querySelector('#phone-input').value;
//    let phoneInputNumber = parseInt(phoneInput);
//    let newPhoneInputNumber = phoneInputNumber + 1;
//    document.querySelector('#phone-input').value = newPhoneInputNumber;
// //    let phoneAmount = document.querySelector('#phone-amount').innerText;
// //    let phoneAmountNumber = parseInt(phoneAmount);
//    let totalPhoneAmount = 1219 * newPhoneInputNumber;
//    document.querySelector('#phone-amount').innerText = totalPhoneAmount;



// update code and reduce extra code using function
productChange('#phone',true);
let phoneInput = document.querySelector('#phone-input').value;
let caseInput = document.querySelector('#case-input').value;
updateSubtotal(phoneInput,caseInput);




   //subtotal features add

   
//    let caseInput = document.querySelector('#case-input').value;
//    let caseInputNumber = parseInt(caseInput);
//    let newSubtotal = updateSubtotal(newPhoneInputNumber,caseInputNumber);
//    document.querySelector('#subtotal').innerText =  newSubtotal;

//    // call tax function
//    let resultTax = Tax(newSubtotal);
//   let newResultTax = Math.floor(resultTax);
//    document.querySelector('#tax').innerText = newResultTax;

//    //call TotalAmount function for calculate Total amount

//    let resultTotal = TotalAmount(newSubtotal,newResultTax);
//    document.querySelector('#total-amount').innerText = resultTotal;

})


let minusIcon = document.querySelector('#icon-minus');
minusIcon.addEventListener('click',(e)=>{
    e.preventDefault();
    // let phoneInputMinus = document.querySelector('#phone-input').value;
    // let phoneInputMinusNumber = parseInt(phoneInputMinus);
//    if( phoneInputMinusNumber > 1){
//     // let newPhoneInputMinusNumber = phoneInputMinusNumber - 1;
//     // document.querySelector('#phone-input').value = newPhoneInputMinusNumber;
//     // // let phoneMinusAmount = document.querySelector('#phone-amount').innerText;
//     // // let phoneMinusAmountNumber = parseInt(phoneMinusAmount);
//     // let totalMinusPhoneAmount = 1219 * newPhoneInputMinusNumber;
//     // document.querySelector('#phone-amount').innerText = totalMinusPhoneAmount;
//     let caseMinusInput = document.querySelector('#case-input').value;
//     let caseMinusInputNumber = parseInt(caseMinusInput);
//     let newMinusSubtotal = updateSubtotal(newPhoneInputMinusNumber,caseMinusInputNumber);
//    document.querySelector('#subtotal').innerText =  newMinusSubtotal;
//    // call tax function
//    let resultTax = Tax(newMinusSubtotal);
//    let newResultTax = Math.floor(resultTax);
//    document.querySelector('#tax').innerText = newResultTax;

//    // call Total Amount function for calculate total amount
   
//    let resultTotal = TotalAmount(newMinusSubtotal,newResultTax);
//    document.querySelector('#total-amount').innerText = resultTotal;


//    }
//    else{
//        alert('The number of mobile will not negative');
//    }

// update code and reduce extra code using function
productChange('#phone',false);
let phoneInput = document.querySelector('#phone-input').value;
let caseInput = document.querySelector('#case-input').value;
updateSubtotal(phoneInput,caseInput);



   
})


let casePlusIcon = document.querySelector('#case-plus');
casePlusIcon.addEventListener('click',(e)=>{
    e.preventDefault();
    
// update code and reduce extra code using more function
    productChange('#case',true);
 let phoneInput = document.querySelector('#phone-input').value;
let caseInput = document.querySelector('#case-input').value;
updateSubtotal(phoneInput,caseInput);





//    let caseInput = document.querySelector('#case-input').value;
//    let caseInputNumber = parseInt(caseInput);
//    let newCaseInputNumber = caseInputNumber + 1;
//    document.querySelector('#case-input').value = newCaseInputNumber;
// //    let phoneAmount = document.querySelector('#phone-amount').innerText;
// //    let phoneAmountNumber = parseInt(phoneAmount);
//    let totalCaseAmount = 59 * newCaseInputNumber;
//    document.querySelector('#case-amount').innerText = totalCaseAmount;

//    // subtotal updateSubtotal
//    let phoneInputPlus = document.querySelector('#phone-input').value;
//    let phoneInputPlusNumber = parseInt(phoneInputPlus);
//    let newPlusSubtotal = updateSubtotal(phoneInputPlusNumber,newCaseInputNumber);
//    document.querySelector('#subtotal').innerText =  newPlusSubtotal;

//    //call Tax function to
//    let resultTax = Tax(newPlusSubtotal);
//    let newResultTax = Math.floor(resultTax);
//    document.querySelector('#tax').innerText = newResultTax;

//     // call Total Amount function for calculate total amount
   
//     let resultTotal = TotalAmount(newPlusSubtotal,newResultTax);
//     document.querySelector('#total-amount').innerText = resultTotal;

})



let caseMinusIcon = document.querySelector('#case-minus');
caseMinusIcon.addEventListener('click',(e)=>{
    e.preventDefault();
//     let caseInputMinus = document.querySelector('#case-input').value;
//     let caseInputMinusNumber = parseInt(caseInputMinus);
//    if( caseInputMinusNumber > 1){
//     let newCaseInputMinusNumber = caseInputMinusNumber - 1;
//     document.querySelector('#case-input').value = newCaseInputMinusNumber;
//     // let phoneMinusAmount = document.querySelector('#phone-amount').innerText;
//     // let phoneMinusAmountNumber = parseInt(phoneMinusAmount);
//     let totalMinusCaseAmount = 59 * newCaseInputMinusNumber;
//     document.querySelector('#case-amount').innerText = totalMinusCaseAmount;

//     // subtotal updateSubtotal
//     let phoneInputMinus = document.querySelector('#phone-input').value;
//    let phoneInputMinusNumber = parseInt(phoneInputMinus);
//    let newMinusSubtotal = updateSubtotal(phoneInputMinusNumber,newCaseInputMinusNumber);
//    document.querySelector('#subtotal').innerText =  newMinusSubtotal;


//    // call tax function
//    let resultTax = Tax(newMinusSubtotal);
//    let newResultTax = Math.floor(resultTax);
//    document.querySelector('#tax').innerText = newResultTax;

//      // call Total Amount function for calculate total amount
   
//      let resultTotal = TotalAmount(newMinusSubtotal,newResultTax);
//      document.querySelector('#total-amount').innerText = resultTotal;
   
//    }
//    else{
//        alert('The number of case will not negative');
//    }


//update code and reduce extra code using function
productChange('#case',false);
let phoneInput = document.querySelector('#phone-input').value;
let caseInput = document.querySelector('#case-input').value;
updateSubtotal(phoneInput,caseInput);

   
})


// This function use for calculate updateSubtotal
const updateSubtotal = (phoneInput,caseInput)=>{
    let updateSubtotal = (1219 * phoneInput) + (59 * caseInput);
    document.querySelector('#subtotal').innerText = updateSubtotal;
    let resultTax = Tax(updateSubtotal);
   let updateResultTax =  Math.floor(resultTax);
   document.querySelector('#tax').innerText = updateResultTax;
   let totalAmount=TotalAmount(updateSubtotal,updateResultTax);
   document.querySelector('#total-amount').innerText = totalAmount;
   
}



// This function use for update calculate Tax
const Tax = (subtotal)=>{
    let updateTax = subtotal * 0.1;
    return updateTax;
}


// This function use for calculate total amount

const TotalAmount = (subtotal,tax)=>{
    let Total = subtotal + tax;
    return Total;
}



// This functionality will be run after checkout button is clicked

let checkoutButton = document.querySelector('#checkout-btn');
checkoutButton.addEventListener('click',(e)=>{
    e.preventDefault();
    let orderPage = document.querySelector('#order-page');
    orderPage.style.display = 'none';
    let productClip = document.querySelector('#product-clip');
    productClip.style.display = 'block';
    let changePhoneSize = document.querySelector('#phone-input').value;
    document.querySelector('#number-mobile').innerText = changePhoneSize;
    let changePhonePrice = document.querySelector('#phone-amount').innerText;
    document.querySelector('#mobile-price').innerText = changePhonePrice;


    let changeCaseSize = document.querySelector('#case-input').value;
    document.querySelector('#number-case').innerText = changeCaseSize;
    let changeCasePrice = document.querySelector('#case-amount').innerText;
    document.querySelector('#case-price').innerText = changeCasePrice;


    let newSubtotal = document.querySelector('#subtotal').innerText;
    document.querySelector('#proceed-subtotal').innerText = newSubtotal;
    let newTax = document.querySelector('#tax').innerText;
    document.querySelector('#proceed-tax').innerText = newTax;
    let newTotal = document.querySelector('#total-amount').innerText;
    document.querySelector('#proceed-total').innerText = newTotal;
    

})

// This function will be run after clicked proceed button 

let proceedButton = document.querySelector('#proceed-btn');
proceedButton.addEventListener('click',(e)=>{
  e.preventDefault();
  let productClip = document.querySelector('#product-clip');
    productClip.style.display = 'none';

    let orderPage = document.querySelector('#order-page');
    orderPage.style.display = 'block';


    document.querySelector('#phone-input').value = '1';
    document.querySelector('#case-input').value = '1';
    document.querySelector('#phone-amount').innerText = '1,219';
    document.querySelector('#case-amount').innerText = '59';
    document.querySelector('#subtotal').innerText = '1,278';
    document.querySelector('#tax').innerText = '127';
    document.querySelector('#total-amount').innerText = '1,405';



})


// phone cross
let phoneCross = document.querySelector('#phone-cross');
phoneCross.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('#phone-input').value = '1';
    document.querySelector('#phone-amount').innerText = '1,219';
  
   
})

//case cross 

let caseCross = document.querySelector('#case-cross');
caseCross.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('#case-input').value = '1';
    document.querySelector('#case-amount').innerText = '59';
   
   
})

//This is the main function of the project.This function use for increase and decrease input and update value
function productChange(product,isIncreasing){
    let productInput = document.querySelector(product + '-input').value;
    let productConvertNumber = parseInt(productInput);
    let newProductConvertNumber = 1;
    let totalProductAmount = 0;
   if(isIncreasing == true){
     newProductConvertNumber = productConvertNumber + 1;
   
    document.querySelector(product+'-input').value = newProductConvertNumber;
    if(product == '#phone'){
        totalProductAmount = 1219 * newProductConvertNumber;
       
    }
    else{
         totalProductAmount = 59 * newProductConvertNumber;
    }
    document.querySelector(product + '-amount').innerText =totalProductAmount;

}
else{
     newProductConvertNumber = productConvertNumber - 1;
    
    document.querySelector(product+'-input').value = newProductConvertNumber;
    if(product == '#phone'){
        totalProductAmount = 1219 * newProductConvertNumber;
       
    }
    else{
         totalProductAmount = 59 * newProductConvertNumber;
    }
    document.querySelector(product + '-amount').innerText =totalProductAmount;
}


}

    




