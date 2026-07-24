const services = {

    Cleaning: [
        "Home Cleaning",
        "Carpet Cleaning",
        "Sofa Cleaning",
        "Marble Cleaning",
        "Glass Cleaning",
        "Tank Cleaning",
        "Disinfection",
        "Post Construction Cleaning"
    ],

    Finishing: [
        "Painting",
        "Gypsum Board",
        "Ceramic Installation",
        "Aluminum",
        "Door Repair"
    ],

    Maintenance: [
        "Electrician",
        "Plumber",
        "Carpenter",
        "Blacksmith",
        "AC Technician",
        "Appliance Repair"
    ],

    Moving: [
        "Furniture Moving",
        "Packing",
        "Furniture Installation",
        "Furniture Lift"
    ],

    Security: [
        "CCTV Cameras",
        "Intercom",
        "Alarm Systems",
        "Smart Home"
    ],

    Daily: [
        "Babysitting",
        "Elderly Care"
    ],

    Outdoor: [
        "Garden Cleaning",
        "Landscaping",
        "Tree Trimming",
        "Irrigation System"
    ]

};

const category = document.getElementById("category");
const service = document.getElementById("service");

category.addEventListener("change", function () {

    service.innerHTML =
        `<option selected disabled>Select Service</option>`;

    services[this.value].forEach(function(item){

        service.innerHTML +=
        `<option>${item}</option>`;

    });

});