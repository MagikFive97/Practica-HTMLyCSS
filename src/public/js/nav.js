fetch("nav.html")
    .then(Response => Response.text())
    .then((datos) => {
        document.querySelector("header").innerHTML=datos;
});