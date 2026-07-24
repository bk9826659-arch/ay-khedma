const services = [

{
icon:"fa-solid fa-broom",
title:"Cleaning",
page:"cleaning.html"
},

{
icon:"fa-solid fa-paint-roller",
title:"Finishing",
page:"finishing.html"
},

{
icon:"fa-solid fa-screwdriver-wrench",
title:"Maintenance",
page:"maintenance.html"
},

{
icon:"fa-solid fa-truck-fast",
title:"Moving",
page:"moving.html"
},

{
icon:"fa-solid fa-shield-halved",
title:"Security",
page:"security.html"
},

{
icon:"fa-solid fa-user-nurse",
title:"Daily",
page:"daily.html"
},

{
icon:"fa-solid fa-tree",
title:"Outdoor",
page:"outdoor.html"
}

];

const container = document.getElementById("serviceNavigation");

const currentPage = window.location.pathname.split("/").pop();

services.forEach(service=>{

container.innerHTML += `

<div class="col-lg col-md-3 col-6 mb-3">

<a href="${service.page}" class="text-decoration-none">

<div class="service-nav-card ${currentPage===service.page?"active":""}">

<i class="${service.icon}"></i>

<h6>${service.title}</h6>

</div>

</a>

</div>

`;

});