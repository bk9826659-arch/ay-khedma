fetch("data/services.json")
.then((response) => response.json())
.then((services) => {

const container = document.getElementById("servicesContainer");

const searchInput = document.getElementById("searchInput");

const maintenanceServices = services.filter(
service => service.category === "Maintenance"
);

let allServices = maintenanceServices;

displayServices(allServices);

function displayServices(data){

container.innerHTML = "";

data.forEach((service)=>{

container.innerHTML += `

<div class="col-lg-4 col-md-6 mb-4">

<div class="card h-100 shadow-sm border-0">

<div class="position-relative">

<img src="${service.image}" class="card-img-top" alt="${service.name}">

<button
class="favorite-btn"
data-id="${service.id}"
data-name="${service.name}"
data-image="${service.image}"
data-description="${service.description}"
data-price="${service.price}"
data-rating="${service.rating}">

<i class="fa-regular fa-heart"></i>

</button>

</div>

<div class="card-body">

<h5 class="card-title text-center">

${service.name}

</h5>

<p class="card-text text-muted text-center">

${service.description}

</p>

<div class="d-flex justify-content-between align-items-center mb-3">

<span class="fw-bold text-success fs-5">

Starting from ${service.price} EGP

</span>

<span class="text-warning fw-bold">

<i class="fa-solid fa-star"></i>

${service.rating}

</span>

</div>

<a href="details.html?id=${service.id}"
class="btn btn-success w-100">

View Details

</a>

</div>

</div>

</div>

`;

});

}

searchInput.addEventListener("input",function(){

const value = this.value.toLowerCase();

const filtered = allServices.filter(service=>

service.name.toLowerCase().includes(value) ||

service.description.toLowerCase().includes(value)

);

displayServices(filtered);

});

})
.catch((error)=>console.log(error));
document.addEventListener("click", function (e) {

    const btn = e.target.closest(".favorite-btn");

    if (!btn) return;

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const service = {
        id: btn.dataset.id,
        name: btn.dataset.name,
        image: btn.dataset.image,
        description: btn.dataset.description,
        price: btn.dataset.price,
        rating: btn.dataset.rating
    };

    const exists = favorites.find(item => item.id === service.id);

    if (!exists) {

        favorites.push(service);

        btn.classList.add("active");

        btn.innerHTML = '<i class="fa-solid fa-heart"></i>';

    } else {

        favorites = favorites.filter(item => item.id !== service.id);

        btn.classList.remove("active");

        btn.innerHTML = '<i class="fa-regular fa-heart"></i>';

    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
   

});