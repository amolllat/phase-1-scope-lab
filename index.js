var customerName = "bob";
function upperCaseCustomerName() {
    customerName=customerName.toUpperCase();
}


function setBestCustomer() {
    bestCustomer='not bob'; 
    return bestCustomer;
}



function overwriteBestCustomer(){
    bestCustomer="maybe bob";
    return bestCustomer;
}
console.log(overwriteBestCustomer());

const leastFavoriteCustomer='turtle';
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="new tutrtle";

}