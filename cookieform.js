function displayMessage() {
    var message;
    var firstName=document.getElementById("firstName").value;
    switch(firstName) {
    case "Cherry":
        message="Thank You Cherry!! Your order should arrive 20 days from February 4, 2017";
        break;
    case "Micheal":
        message = "Thank You Micheal!! Your order will be coming in two weeks";
        break;
    case "Sandra":
        message = "Thank You Sandra!! You've got a big order so it will take a month.";
        break;
    case "Cookie": 
        message= "Thank You Cookie!! Your order is coming tomorrow. So be at home between 1-2pm."; 
    }
    alert(message);
}