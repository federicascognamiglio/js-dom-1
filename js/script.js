// - Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// - Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"

// DATI
// Nodi Prelevati
const btnSwitch = document.querySelector(".btn");
const mainTitle = document.getElementById("main-title");
const lightBulb = document.getElementById("light-bulb");
const main = document.querySelector("main");

// ESECUZIONE

btnSwitch.addEventListener("click", function() {
    console.log(btnSwitch.classList);
    if (btnSwitch.classList.contains("btn-on")) {
        btnSwitch.classList.remove("btn-on");
        lightBulb.src = "./img/yellow_lamp.png";
        mainTitle.innerHTML = "Buongiorno!";
        mainTitle.style.color = "#04043b";
        btnSwitch.innerHTML = "Spegni";
        btnSwitch.style.backgroundColor = "#04043b";
        btnSwitch.style.color = "#ffffff";
        btnSwitch.style.border = "1px solid #04043b";
        main.style.backgroundColor = "#faf6ea";
    } else {
        btnSwitch.classList.add("btn-on");
        lightBulb.src = "./img/white_lamp.png";
        mainTitle.innerHTML = "Buonanotte!";
         mainTitle.style.color = "#ffffff";
        btnSwitch.innerHTML = "Accendi";
        btnSwitch.style.backgroundColor = "#ffffff";
        btnSwitch.style.color = "#04043b";
        btnSwitch.style.border = "1px solid #ffffff";
        main.style.backgroundColor = "#04043b";
    }
})

// SI MI SONO VOLUTA COMPLICARE LA VITA, ma è molto carino così :)
