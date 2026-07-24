const params = new URLSearchParams(window.location.search);
const serviceId = Number(params.get("id"));

fetch("data/services.json")
.then(response => response.json())
.then(data => {

    const service = data.find(item => item.id === serviceId);

    if (!service) {

        document.querySelector(".service-details").innerHTML = `
        <div class="container text-center py-5">
            <h2>Service Not Found</h2>

            <a href="index.html"
               class="btn btn-success mt-3">
               Back Home
            </a>
        </div>
        `;

        return;
    }

    // name
    document.getElementById("serviceName").textContent = service.name;

    // description
    document.getElementById("serviceDescription").textContent = service.description;

    // image
    document.getElementById("serviceImage").src = service.image;
    document.getElementById("serviceImage").alt = service.name;

    // price
    document.getElementById("servicePrice").innerHTML =
    `Starting from ${service.price} EGP`;

    // rating
    document.getElementById("serviceRating").innerHTML =
    `<i class="fa-solid fa-star"></i> ${service.rating}`;
    
    document.getElementById("bookNow").addEventListener("click", function (e) {

    e.preventDefault();

    localStorage.setItem("selectedServiceId", service.id);

    window.location.href = "booking.html";

});

})
.catch(error => console.log(error));