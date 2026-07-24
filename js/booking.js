// ================= Date =================

const today = new Date().toISOString().split("T")[0];
document.getElementById("bookingDate").min = today;


// ================= Services =================

fetch("data/services.json")
.then(res => res.json())
.then(data => {

    const category = document.getElementById("category");
    const service = document.getElementById("service");

    function showService(item){

        document.getElementById("selectedService").textContent = item.name;
        document.getElementById("selectedDescription").textContent = item.description;
        document.getElementById("selectedImage").src = item.image;
        document.getElementById("selectedPrice").textContent = item.price + " EGP";

        document.getElementById("summaryService").textContent = item.name;
        document.getElementById("summaryPrice").textContent = item.price + " EGP";
    }

    category.addEventListener("change", function () {

        service.innerHTML = `<option value="">Select Service</option>`;

        const filtered = data.filter(item => item.category === this.value);

        filtered.forEach(item => {

            service.innerHTML += `
            <option value="${item.id}">
                ${item.name}
            </option>
            `;

        });

    });

    service.addEventListener("change", function () {

        const selected = data.find(item => item.id == this.value);

        if(selected){
            showService(selected);
        }

    });



    const savedId = localStorage.getItem("selectedServiceId");

    if(savedId){

        const selected = data.find(item => item.id == savedId);

        if(selected){

            category.value = selected.category;

            category.dispatchEvent(new Event("change"));

            setTimeout(()=>{

                service.value = selected.id;

                showService(selected);

            },100);

        }

    }

});


// ================= Payment =================

const paymentMethod = document.getElementById("paymentMethod");

const visaBox = document.getElementById("visaBox");
const vodafoneBox = document.getElementById("vodafoneBox");
const instapayBox = document.getElementById("instapayBox");

paymentMethod.addEventListener("change", function(){

    visaBox.classList.add("d-none");
    vodafoneBox.classList.add("d-none");
    instapayBox.classList.add("d-none");

    document.getElementById("summaryPayment").textContent = this.value;

    if(this.value === "Visa"){

        visaBox.classList.remove("d-none");

    }

    else if(this.value === "Vodafone Cash"){

        vodafoneBox.classList.remove("d-none");

    }

    else if(this.value === "InstaPay"){

        instapayBox.classList.remove("d-none");

    }

});


// ================= Summary =================

document.getElementById("bookingDate").addEventListener("change",function(){

    document.getElementById("summaryDate").textContent = this.value;

});

document.getElementById("bookingTime").addEventListener("change",function(){

    document.getElementById("summaryTime").textContent = this.value;

});


// ================= Booking =================

const bookingForm = document.getElementById("bookingForm");
const popup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

bookingForm.addEventListener("submit",function(e){

    e.preventDefault();

    if(bookingForm.checkValidity()){

        popup.classList.add("show");

    }else{

        bookingForm.reportValidity();

    }

});

closePopup.addEventListener("click",function(){

    popup.classList.remove("show");

    bookingForm.reset();

    visaBox.classList.add("d-none");
    vodafoneBox.classList.add("d-none");
    instapayBox.classList.add("d-none");

    document.getElementById("summaryService").textContent = "--";
    document.getElementById("summaryDate").textContent = "--";
    document.getElementById("summaryTime").textContent = "--";
    document.getElementById("summaryPayment").textContent = "--";
    document.getElementById("summaryPrice").textContent = "0 EGP";

});