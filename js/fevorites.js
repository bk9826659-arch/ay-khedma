const container = document.getElementById("favoritesContainer");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

if (favorites.length === 0) {

    container.innerHTML = `
        <div class="col-12 text-center py-5">
            <h3>No favorite services yet ❤️</h3>
        </div>
    `;

} else {

    favorites.forEach(service => {

        container.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">

            <div class="card h-100 shadow border-0">

                <div class="position-relative">

                    <img src="${service.image}" class="card-img-top" alt="${service.name}">

                    <button
                        class="favorite-btn remove-btn"
                        data-id="${service.id}">
                        <i class="fa-solid fa-heart"></i>
                    </button>

                </div>

                <div class="card-body text-center">

                    <h5 class="card-title">${service.name}</h5>

                    <p class="card-text text-muted">
                        ${service.description}
                    </p>

                    <a href="details.html?id=${service.id}" class="btn btn-success">
                        View Details
                    </a>

                </div>

            </div>

        </div>
        `;

    });

}

document.addEventListener("click", function (e) {

    const btn = e.target.closest(".remove-btn");

    if (!btn) return;

    const id = btn.dataset.id;

    favorites = favorites.filter(service => service.id != id);

    localStorage.setItem("favorites", JSON.stringify(favorites));

    location.reload();
    console.log(localStorage.getItem("favorites"))

});