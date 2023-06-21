document.getElementById("preferenceForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var question1 = document.querySelector('input[name="question1"]:checked').value;
    var question2 = document.querySelector('input[name="question2"]:checked').value;
    var price = calculatePrice(question1, question2);

    sessionStorage.setItem("question1", question1);

        sessionStorage.setItem("question2", question2);

    sessionStorage.setItem("price", price);

    window.location.href = "5. checkout laundry.html";
});

function calculatePrice(question1, question2) {
    var price = 0;

    if (question1 === "Small Load(1 - 5 kg)" && question2 === "Yes") {
        price = 20.000;

    }else if (question1 === "Medium Load(6 - 10kg)" && question2 === "Yes") {
        price = 50.000;

    }else if (question1 === "Large Load(11 - 15kg)" && question2 === "Yes") {
        price = 100.000;


    }else if(question1 === "Extra Large Load(16 - 25kg)" && question2 === "Yes"){
        price = 150.000;


    }else if (question1 === "Small Load(1 - 5 kg)" && question2 === "No") {
        price = 15.000;


    }else if (question1 === "Medium Load(6 - 10kg)" && question2 === "No") {
        price = 45.000;


    }else if (question1 === "Large Load(11 - 15kg)" && question2 === "No") {
        price = 95.000;
        weightprice = 94.000;


    }else if(question1 === "Extra Large Load(16 - 25kg)" && question2 === "No"){
        price = 145.000;

    }
    return price;
}


